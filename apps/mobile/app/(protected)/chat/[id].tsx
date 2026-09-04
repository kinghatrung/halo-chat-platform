import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedKeyboard,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import ScreenWrapper from '@/providers/ScreenWrapper';
import ChatInfoModal from '@/components/ChatInfoModal';
import { useConversationDetail } from '@/hooks/useConversations';
import { useGetMe } from '@/hooks/useAuth';
import {
  useListMessages,
  useMarkAsRead,
  useSendMessage,
  useDeleteMessage,
  useTogglePinMessage,
  usePinnedMessages,
} from '@/hooks/useMessages';
import { useSocketContext } from '@/providers/SocketProvider';
import { resolvePresence, useChatStore } from '@/stores/chat';
import * as ImagePicker from 'expo-image-picker';
import { attachmentService, type MobileFile } from '@/services/attachment.service';
import type { Message, MessageAttachment, MessageType } from '@/types/message';
import {
  FloatingMessageContextMenu,
  MessageBubbleLayout,
} from '@/components/FloatingMessageContextMenu';
import { SwipeToReply } from '@/components/SwipeToReply';
import { MessageComposer } from '@/components/MessageComposer';

const TYPING_STOP_DELAY_MS = 2500;

// ─── Image Viewer Modal with Safe Area & Swipe-to-Dismiss ─────────────────────

function ImageViewerModal({
  visible,
  imageUri,
  onClose,
}: {
  visible: boolean;
  imageUri: string | null;
  onClose: () => void;
}) {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  // Reset image position and opacity when opening modal
  useEffect(() => {
    if (visible) {
      translateY.value = 0;
      opacity.value = 1;
    }
  }, [visible, opacity, translateY]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      // eslint-disable-next-line react-hooks/immutability
      translateY.value = e.translationY;
      const progress = Math.abs(e.translationY) / 300;
      // eslint-disable-next-line react-hooks/immutability
      opacity.value = Math.max(0.3, 1 - progress);
    })
    .onEnd((e) => {
      if (Math.abs(e.translationY) > 90 || Math.abs(e.velocityY) > 400) {
        // eslint-disable-next-line react-hooks/immutability
        translateY.value = withTiming(e.translationY > 0 ? 600 : -600, { duration: 150 }, () => {
          runOnJS(handleClose)();
        });
      } else {
        translateY.value = withSpring(0, { damping: 20, stiffness: 200 });
        // eslint-disable-next-line react-hooks/immutability
        opacity.value = withTiming(1);
      }
    });

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedBackdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Modal
      visible={Boolean(visible && imageUri)}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      statusBarTranslucent
    >
      <Animated.View style={[{ flex: 1, backgroundColor: 'black' }, animatedBackdropStyle]}>
        {/* Safe Top Close Button for devices with notches / camera cut-outs */}
        <View
          style={{ paddingTop: Math.max(insets.top, 16) }}
          className="absolute top-0 right-0 left-0 z-30 flex-row justify-between items-center px-4"
        >
          <Pressable
            onPress={handleClose}
            className="justify-center items-center w-10 h-10 rounded-full bg-white/25 active:bg-white/45"
            hitSlop={12}
          >
            <Ionicons name="close" size={24} color="white" />
          </Pressable>
        </View>

        {/* Swipe-to-dismiss Container */}
        <GestureDetector gesture={gesture}>
          <View className="flex-1 justify-center items-center">
            {imageUri ? (
              <Animated.Image
                source={{ uri: imageUri }}
                style={[{ width: '100%', height: '100%' }, animatedImageStyle]}
                resizeMode="contain"
              />
            ) : null}
          </View>
        </GestureDetector>
      </Animated.View>
    </Modal>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatMessageTime = (isoDate: string) =>
  new Date(isoDate).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

const isSameDayStr = (a: string, b: string) => {
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
};

// ─── Attachment Component ──────────────────────────────────────────────────────

const API_BASE = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.7:5000/api';
const SERVER_URL = API_BASE.replace(/\/api\/?$/, '');

const getAttachmentUrl = (url: string) => {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('file://') ||
    url.startsWith('content://')
  ) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${SERVER_URL}${cleanPath}`;
};

function AttachmentDisplay({
  attachment,
  isMe,
  onPressImage,
}: {
  attachment: MessageAttachment;
  isMe: boolean;
  onPressImage?: (url: string) => void;
}) {
  const mime = attachment.mimeType || '';
  const isImage = mime.startsWith('image/');
  const isVideo = mime.startsWith('video/');
  const fullUrl = getAttachmentUrl(attachment.url);
  const fullThumb = attachment.thumbnailUrl ? getAttachmentUrl(attachment.thumbnailUrl) : null;

  if (isImage) {
    return (
      <Pressable
        onPress={() => onPressImage?.(fullUrl)}
        className="overflow-hidden mb-1 rounded-2xl active:opacity-90"
        style={{ width: 230, height: 165 }}
      >
        <Image
          source={{ uri: fullUrl }}
          style={{ width: 230, height: 165, borderRadius: 16 }}
          resizeMode="cover"
        />
      </Pressable>
    );
  }

  if (isVideo) {
    return (
      <View
        className="overflow-hidden relative justify-center items-center mb-1 rounded-2xl bg-black/40"
        style={{ width: 230, height: 145 }}
      >
        {fullThumb ? (
          <Image
            source={{ uri: fullThumb }}
            style={{ width: 230, height: 145, borderRadius: 16 }}
            resizeMode="cover"
          />
        ) : null}
        <View className="absolute justify-center items-center w-12 h-12 rounded-full bg-black/50">
          <Ionicons name="play" size={24} color="white" />
        </View>
      </View>
    );
  }

  // Document / file attachment
  const sizeMb = (attachment.size / (1024 * 1024)).toFixed(1);
  const sizeKb = (attachment.size / 1024).toFixed(0);
  const displaySize = attachment.size > 1024 * 1024 ? `${sizeMb} MB` : `${sizeKb} KB`;

  return (
    <View
      className={`mb-1 flex-row items-center p-3 rounded-2xl ${
        isMe ? 'bg-white/20' : 'bg-gray-100'
      }`}
      style={{ width: 230 }}
    >
      <View className="mr-3 justify-center items-center w-10 h-10 rounded-xl bg-[#6f6bff]/20">
        <Ionicons name="document-text" size={22} color="#6f6bff" />
      </View>
      <View className="flex-1">
        <Text
          numberOfLines={1}
          className={`text-[14px] font-semibold ${isMe ? 'text-white' : 'text-gray-900'}`}
        >
          {attachment.fileName}
        </Text>
        <Text className={`text-[12px] ${isMe ? 'text-white/75' : 'text-gray-500'}`}>
          {displaySize}
        </Text>
      </View>
    </View>
  );
}

const formatDateSeparator = (isoDate: string) => {
  const date = new Date(isoDate);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (isSameDayStr(isoDate, now.toISOString())) return 'Hôm nay';
  if (isSameDayStr(isoDate, yesterday.toISOString())) return 'Hôm qua';
  return date.toLocaleDateString('vi-VN', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function DateSeparator({ label }: { label: string }) {
  return (
    <View className="items-center my-3">
      <View className="rounded-full bg-[#EBEBEB] px-3.5 py-1">
        <Text className="text-sm font-medium text-gray-500">{label}</Text>
      </View>
    </View>
  );
}

function SystemMessage({ content }: { content: string }) {
  return (
    <View className="items-center my-2">
      <View className="rounded-full bg-[#EBEBEB] px-3.5 py-1">
        <Text className="text-sm font-medium text-center text-gray-500">{content}</Text>
      </View>
    </View>
  );
}

interface MessageBubbleProps {
  message: Message;
  currentUserId?: string;
  isGroup?: boolean;
  isFirstInGroup?: boolean;
  isLastInGroup?: boolean;
  isContextMenuActive?: boolean;
  onLongPress?: (
    message: Message,
    measureBubble: (cb: (layout: MessageBubbleLayout) => void) => void,
  ) => void;
  onReply?: (message: Message) => void;
  onPressImage?: (url: string) => void;
}

function MessageBubble({
  message,
  currentUserId,
  isGroup,
  isFirstInGroup,
  isLastInGroup,
  isContextMenuActive,
  onLongPress,
  onReply,
  onPressImage,
}: MessageBubbleProps) {
  const bubbleRef = useRef<View>(null);
  const isMe = message.senderId?._id === currentUserId;
  const avatarUrl = message.senderId?.avatar;
  const timeLabel = formatMessageTime(message.createdAt);
  const showSenderName = isGroup && !isMe && isFirstInGroup;
  const showAvatar = !isMe;
  const showTimestamp =
    isLastInGroup || message.status === 'sending' || message.status === 'failed';

  const measureBubble = useCallback((cb: (layout: MessageBubbleLayout) => void) => {
    bubbleRef.current?.measureInWindow((x, y, width, height) => {
      cb({ x, y, width, height });
    });
  }, []);

  const firstImageAtt = message.attachmentIds?.find((att) => {
    const mime = att.mimeType || '';
    return mime.startsWith('image/') || att.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i);
  });
  const firstImageUrl = firstImageAtt ? getAttachmentUrl(firstImageAtt.url) : null;

  return (
    <View
      className={`${isLastInGroup ? 'mb-3.5' : 'mb-1'} ${message.isPinned && !message.isDeleted ? 'mt-2' : ''} flex-row ${isMe ? 'justify-end' : 'justify-start'}`}
    >
      <View className={`max-w-[85%] ${isMe ? 'items-end' : 'items-start'}`}>
        {/* Sender name in group (only on top message of consecutive group) */}
        {showSenderName && (
          <Text className={`mb-1 text-sm font-medium text-gray-500 ${showAvatar ? 'ml-10' : ''}`}>
            {message.senderId?.username}
          </Text>
        )}

        {/* Bubble & Avatar Row */}
        <View className={`flex-row items-end ${isMe ? 'justify-end' : 'justify-start'}`}>
          {/* Avatar (Messenger style: avatar ONLY at the bottom of consecutive block) */}
          {showAvatar && (
            <View className="justify-end mr-2 w-8">
              {isLastInGroup ? (
                avatarUrl ? (
                  <Image source={{ uri: avatarUrl }} className="w-8 h-8 rounded-full" />
                ) : (
                  <View className="h-8 w-8 rounded-full bg-[#6f6bff] items-center justify-center">
                    <Text className="text-xs font-semibold text-white">
                      {message.senderId?.username?.charAt(0).toUpperCase() || 'U'}
                    </Text>
                  </View>
                )
              ) : (
                <View className="w-8 h-8" />
              )}
            </View>
          )}

          <View className="shrink">
            {/* Pin indicator ABOVE the bubble (Messenger style) */}
            {message.isPinned && !message.isDeleted && (
              <View
                className={`flex-row items-center mb-1 ml-2.5 ${isMe ? 'self-end' : 'self-start'}`}
              >
                <Text className="ml-1 text-[11px] text-gray-500">Đã ghim</Text>
              </View>
            )}

            {/* Reply header label */}
            {message.replyToMessageId && !message.isDeleted && (
              <View
                className={`flex-row mt-1 items-center mb-1 ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                <Ionicons name="arrow-undo-outline" size={13} color="#6B7280" />
                <Text className="ml-1 text-xs font-medium text-gray-500">
                  {isMe
                    ? 'Bạn đã trả lời chính mình'
                    : 'Bạn đã trả lời ' + message.replyToMessageId.senderId?.username}
                </Text>
              </View>
            )}

            {/* Main bubble with long press handler & SwipeToReply gesture */}
            <SwipeToReply
              onReply={() => onReply?.(message)}
              onLongPress={() => {
                if (!message.isDeleted && onLongPress) {
                  onLongPress(message, measureBubble);
                }
              }}
              onPress={() => {
                if (!message.isDeleted && firstImageUrl) {
                  onPressImage?.(firstImageUrl);
                }
              }}
              isMe={isMe}
              enabled={!message.isDeleted}
            >
              <View
                ref={bubbleRef}
                style={{
                  position: 'relative',
                  opacity: isContextMenuActive ? 0 : 1,
                }}
              >
                {message.replyToMessageId && !message.isDeleted ? (
                  /* Messenger Quoted Reply Layout */
                  <View className={`items-${isMe ? 'end' : 'start'}`}>
                    {/* Quoted Original Message Bubble (No left border, clean background) */}
                    <View
                      className={`rounded-2xl px-3.5 py-2 ${
                        isMe ? 'self-end bg-gray-200/70' : 'self-start bg-gray-100'
                      }`}
                      style={{
                        maxWidth: '92%',
                      }}
                    >
                      <Text
                        numberOfLines={2}
                        className={`text-[13px] leading-4.5 text-gray-500 font-normal ${
                          message.replyToMessageId.isDeleted ? 'italic' : ''
                        }`}
                      >
                        {message.replyToMessageId.isDeleted
                          ? 'Tin nhắn đã được thu hồi'
                          : message.replyToMessageId.content || 'Tệp đính kèm'}
                      </Text>
                    </View>

                    {/* Main Reply Response Bubble (Overlapping bottom corner) */}
                    <Pressable
                      onPress={() => {
                        if (!message.isDeleted && firstImageUrl) {
                          onPressImage?.(firstImageUrl);
                        }
                      }}
                      onLongPress={() => {
                        if (!message.isDeleted && onLongPress) {
                          onLongPress(message, measureBubble);
                        }
                      }}
                      delayLongPress={250}
                      className={`-mt-2 z-10 rounded-2xl ${
                        message.attachmentIds &&
                        message.attachmentIds.length > 0 &&
                        !message.content
                          ? 'p-0 bg-transparent'
                          : `px-4 py-2 ${isMe ? 'rounded-br-xs bg-[#6f6bff] self-end' : 'rounded-bl-xs bg-white self-start'}`
                      }`}
                      style={
                        message.attachmentIds &&
                        message.attachmentIds.length > 0 &&
                        !message.content
                          ? {}
                          : {
                              shadowColor: '#000',
                              shadowOffset: { width: 0, height: 2 },
                              shadowOpacity: 0.12,
                              shadowRadius: 4,
                              elevation: 3,
                            }
                      }
                    >
                      {message.attachmentIds &&
                        message.attachmentIds.length > 0 &&
                        !message.isDeleted && (
                          <View className="flex-col mb-1">
                            {message.attachmentIds.map((att) => (
                              <AttachmentDisplay
                                key={att._id || att.url}
                                attachment={att}
                                isMe={isMe}
                                onPressImage={onPressImage}
                              />
                            ))}
                          </View>
                        )}
                      {Boolean(message.content) && (
                        <Text
                          className={`text-[16px] leading-6 font-normal ${
                            message.isDeleted
                              ? isMe
                                ? 'italic text-white/75'
                                : 'italic text-gray-400'
                              : isMe
                                ? 'text-white'
                                : 'text-gray-900'
                          }`}
                        >
                          {message.isDeleted ? 'Tin nhắn đã được thu hồi' : message.content}
                        </Text>
                      )}
                    </Pressable>
                  </View>
                ) : (
                  /* Standard Message Bubble */
                  <Pressable
                    onPress={() => {
                      if (!message.isDeleted && firstImageUrl) {
                        onPressImage?.(firstImageUrl);
                      }
                    }}
                    onLongPress={() => {
                      if (!message.isDeleted && onLongPress) {
                        onLongPress(message, measureBubble);
                      }
                    }}
                    delayLongPress={250}
                    className={`rounded-2xl ${
                      message.attachmentIds && message.attachmentIds.length > 0 && !message.content
                        ? 'p-0 bg-transparent'
                        : `px-3.5 py-2 ${isMe ? 'rounded-br-xs bg-[#6f6bff]' : 'rounded-bl-xs bg-white'}`
                    }`}
                    style={
                      message.attachmentIds && message.attachmentIds.length > 0 && !message.content
                        ? {}
                        : {
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.08,
                            shadowRadius: 4,
                            elevation: 1.5,
                          }
                    }
                  >
                    {message.attachmentIds &&
                      message.attachmentIds.length > 0 &&
                      !message.isDeleted && (
                        <View className="flex-col mb-1">
                          {message.attachmentIds.map((att) => (
                            <AttachmentDisplay
                              key={att._id || att.url}
                              attachment={att}
                              isMe={isMe}
                              onPressImage={onPressImage}
                            />
                          ))}
                        </View>
                      )}
                    {Boolean(message.content) && (
                      <Text
                        className={`text-[16px] leading-6 font-normal ${
                          message.isDeleted
                            ? isMe
                              ? 'italic text-white/75'
                              : 'italic text-gray-400'
                            : isMe
                              ? 'text-white'
                              : 'text-gray-900'
                        }`}
                      >
                        {message.isDeleted ? 'Tin nhắn đã được thu hồi' : message.content}
                      </Text>
                    )}
                  </Pressable>
                )}

                {/* Pin icon overlaid on top-left corner of bubble */}
                {message.isPinned && !message.isDeleted && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -8,
                      left: isMe ? undefined : -6,
                      right: isMe ? -6 : undefined,
                    }}
                  >
                    <View
                      className="justify-center items-center w-5 h-5 bg-[#6f6bff] rounded-full"
                      style={{
                        shadowColor: '#6f6bff',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                        elevation: 3,
                      }}
                    >
                      <FontAwesome5 name="thumbtack" size={10} color="white" />
                    </View>
                  </View>
                )}
              </View>
            </SwipeToReply>
          </View>
        </View>

        {/* Timestamp / status (only shown on last message of consecutive block or status) */}
        {showTimestamp && (
          <Text
            className={`mt-1 text-[11px] ${
              message.status === 'failed' ? 'text-red-500 font-medium' : 'text-gray-400'
            } ${isMe ? 'text-right' : 'text-left'} ${showAvatar ? 'ml-10' : ''}`}
          >
            {message.status === 'sending' && 'Đang gửi...'}
            {message.status === 'failed' && 'Gửi thất bại'}
            {(!message.status || message.status === 'sent') &&
              `${timeLabel}${message.isEdited && !message.isDeleted ? ' · Đã chỉnh sửa' : ''}`}
          </Text>
        )}
      </View>
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

type ListItem =
  | { kind: 'date'; key: string; label: string }
  | {
      kind: 'message';
      key: string;
      message: Message;
      isFirstInGroup: boolean;
      isLastInGroup: boolean;
    };

export default function ChatDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: meData } = useGetMe();
  const currentUserId = meData?.data._id;

  const { startTyping, stopTyping } = useSocketContext();
  const setSelectedConversationId = useChatStore((s) => s.setSelectedConversationId);
  const onlineStatusOverrides = useChatStore((s) => s.onlineStatusOverrides);
  const typingMap = useChatStore((s) => (id ? s.typingByConversation[id] : undefined));

  const isOtherTyping = useMemo(
    () => Object.keys(typingMap || {}).some((userId) => userId !== currentUserId),
    [typingMap, currentUserId],
  );

  // Set selected conversation for socket join / leave
  useEffect(() => {
    if (id) {
      setSelectedConversationId(id);
    }
    return () => {
      setSelectedConversationId(null);
    };
  }, [id, setSelectedConversationId]);

  // Data
  const { data: convData, isLoading: convLoading } = useConversationDetail(id);
  const { data: messagesData, isLoading: messagesLoading } = useListMessages(id);
  const { data: pinnedMessagesRes } = usePinnedMessages(id);
  const sendMutation = useSendMessage(id);
  const markReadMutation = useMarkAsRead(id);
  const deleteMutation = useDeleteMessage(id);
  const togglePinMutation = useTogglePinMessage(id);

  // States
  const [replyToMessage, setReplyToMessage] = useState<Message | null>(null);
  const [deletedForMeIds, setDeletedForMeIds] = useState<string[]>([]);

  const conversation = convData?.data.conversation;
  const members = convData?.data.members ?? [];
  const messages = useMemo(() => messagesData?.data.items ?? [], [messagesData?.data.items]);

  const pinnedList = useMemo(
    () => pinnedMessagesRes?.data.items ?? [],
    [pinnedMessagesRes?.data.items],
  );
  const latestPinned = pinnedList.length > 0 ? pinnedList[pinnedList.length - 1] : null;

  const isGroup = conversation?.type === 'group';
  const otherMember = !isGroup ? members.find((m) => m.userId._id !== currentUserId)?.userId : null;

  const displayName = isGroup
    ? conversation?.name || 'Nhóm chat'
    : otherMember?.username || 'Người dùng';

  const avatarUrl = isGroup ? conversation?.avatar : otherMember?.avatar;

  const presence = resolvePresence(onlineStatusOverrides, otherMember?._id, otherMember?.status);
  const isOtherOnline = presence === 'online';

  // Full-Screen Chat Info Modal
  const [isChatInfoVisible, setChatInfoVisible] = useState(false);

  const handleOpenChatInfo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setChatInfoVisible(true);
  };

  // Media & File Attachments State
  const [selectedAttachments, setSelectedAttachments] = useState<MobileFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handlePickMedia = async () => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) return;
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsMultipleSelection: true,
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        const files: MobileFile[] = result.assets.map((asset) => ({
          uri: asset.uri,
          name: asset.fileName || `media_${Date.now()}.${asset.type === 'video' ? 'mp4' : 'jpg'}`,
          type: asset.mimeType || (asset.type === 'video' ? 'video/mp4' : 'image/jpeg'),
        }));
        setSelectedAttachments((prev) => [...prev, ...files]);
      }
    } catch (e) {
      console.error('Error picking media:', e);
    }
  };

  const handleTakeCamera = async () => {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) return;
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images', 'videos'],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        const asset = result.assets[0];
        const file: MobileFile = {
          uri: asset.uri,
          name: asset.fileName || `photo_${Date.now()}.${asset.type === 'video' ? 'mp4' : 'jpg'}`,
          type: asset.mimeType || (asset.type === 'video' ? 'video/mp4' : 'image/jpeg'),
        };
        setSelectedAttachments((prev) => [...prev, file]);
      }
    } catch (e) {
      console.error('Error taking photo:', e);
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setSelectedAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  // Input & Typing
  const [draft, setDraft] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const showSub = Keyboard.addListener(showEvent, () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener(hideEvent, () => setKeyboardVisible(false));

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (id) stopTyping(id);
    };
  }, [id, stopTyping]);

  const handleDraftChange = (text: string) => {
    setDraft(text);
    if (!id) return;

    startTyping(id);
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      stopTyping(id);
    }, TYPING_STOP_DELAY_MS);
  };

  // Mark as read when messages load
  useEffect(() => {
    if (messages.length === 0) return;
    const last = messages[messages.length - 1];
    if (last.status === 'sending' || last.status === 'failed') return;
    markReadMutation.mutate(last._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  // Build list items with date separators & message grouping
  const visibleMessages = useMemo(
    () => messages.filter((m) => !deletedForMeIds.includes(m._id)),
    [messages, deletedForMeIds],
  );

  const listItems: ListItem[] = [];
  visibleMessages.forEach((msg, idx) => {
    const prev = visibleMessages[idx - 1];
    const next = visibleMessages[idx + 1];

    const hasDateBefore = !prev || !isSameDayStr(prev.createdAt, msg.createdAt);

    if (hasDateBefore) {
      listItems.push({
        kind: 'date',
        key: `date-${msg.createdAt}`,
        label: formatDateSeparator(msg.createdAt),
      });
    }

    const isSameSenderAsPrev =
      !hasDateBefore &&
      prev &&
      prev.type !== 'system' &&
      msg.type !== 'system' &&
      prev.senderId._id === msg.senderId._id;

    const isSameSenderAsNext =
      next &&
      isSameDayStr(msg.createdAt, next.createdAt) &&
      next.type !== 'system' &&
      msg.type !== 'system' &&
      next.senderId._id === msg.senderId._id;

    const isFirstInGroup = !isSameSenderAsPrev;
    const isLastInGroup = !isSameSenderAsNext;

    listItems.push({
      kind: 'message',
      key: msg._id,
      message: msg,
      isFirstInGroup,
      isLastInGroup,
    });
  });

  const handleSend = useCallback(async () => {
    const text = draft.trim();
    if (!text && selectedAttachments.length === 0) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});

    try {
      setIsUploading(true);
      let attachmentIds: string[] = [];
      let inferredType: MessageType = 'text';

      if (selectedAttachments.length > 0) {
        const uploadRes = await attachmentService.uploadMobileFiles(selectedAttachments);
        const uploaded = uploadRes.data?.attachments || [];
        attachmentIds = uploaded.map((a) => a._id);

        const firstFile = selectedAttachments[0];
        if (firstFile.type.startsWith('image/')) {
          inferredType = 'image';
        } else if (firstFile.type.startsWith('video/')) {
          inferredType = 'video';
        } else {
          inferredType = 'file';
        }
      }

      setDraft('');
      setSelectedAttachments([]);
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (id) stopTyping(id);

      sendMutation.mutate({
        content: text,
        type: inferredType,
        attachmentIds,
        replyToMessageId: replyToMessage ? replyToMessage._id : undefined,
      });

      setReplyToMessage(null);
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (e) {
      console.error('Error uploading/sending attachment:', e);
    } finally {
      setIsUploading(false);
    }
  }, [draft, selectedAttachments, id, sendMutation, stopTyping, replyToMessage]);

  const inputRef = useRef<TextInput>(null);
  const keyboardWasOpenRef = useRef(false);
  const pendingLongPressRef = useRef<{
    message: Message;
    measureBubble: (cb: (layout: MessageBubbleLayout) => void) => void;
  } | null>(null);
  const isMountedRef = useRef(true);

  const [selectedActionMessage, setSelectedActionMessage] = useState<Message | null>(null);
  const [selectedMessageLayout, setSelectedMessageLayout] = useState<MessageBubbleLayout | null>(
    null,
  );

  // Listen for keyboardDidHide to perform precise post-keyboard screen measurement
  useEffect(() => {
    isMountedRef.current = true;

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      if (!isMountedRef.current) return;
      if (pendingLongPressRef.current) {
        const { message, measureBubble } = pendingLongPressRef.current;
        pendingLongPressRef.current = null;

        // Perform measurement AFTER keyboard has completely disappeared
        requestAnimationFrame(() => {
          measureBubble((layout) => {
            if (!isMountedRef.current) return;
            setSelectedActionMessage(message);
            setSelectedMessageLayout(layout);
          });
        });
      }
    });

    return () => {
      isMountedRef.current = false;
      hideSub.remove();
    };
  }, []);

  const handleLongPressMessage = useCallback(
    (msg: Message, measureBubble: (cb: (layout: MessageBubbleLayout) => void) => void) => {
      if (selectedActionMessage) return; // Prevent multiple while open

      // Instant 0ms tactile haptic feedback
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});

      if (isKeyboardVisible) {
        keyboardWasOpenRef.current = true;
        pendingLongPressRef.current = { message: msg, measureBubble };
        Keyboard.dismiss();
      } else {
        keyboardWasOpenRef.current = false;
        pendingLongPressRef.current = null;
        measureBubble((layout) => {
          setSelectedActionMessage(msg);
          setSelectedMessageLayout(layout);
        });
      }
    },
    [isKeyboardVisible, selectedActionMessage],
  );

  // Fullscreen Image Viewer State
  const [previewImageUri, setPreviewImageUri] = useState<string | null>(null);

  const renderItem = useCallback(
    ({ item }: { item: ListItem }) => {
      if (item.kind === 'date') return <DateSeparator label={item.label} />;

      const { message, isFirstInGroup, isLastInGroup } = item;
      if (message.type === 'system') return <SystemMessage content={message.content} />;

      return (
        <MessageBubble
          message={message}
          currentUserId={currentUserId || ''}
          isGroup={isGroup}
          isFirstInGroup={isFirstInGroup}
          isLastInGroup={isLastInGroup}
          isContextMenuActive={selectedActionMessage?._id === message._id}
          onLongPress={handleLongPressMessage}
          onReply={(msg) => setReplyToMessage(msg)}
          onPressImage={(url) => setPreviewImageUri(url)}
        />
      );
    },
    [currentUserId, isGroup, selectedActionMessage, handleLongPressMessage],
  );

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    router.back();
  };

  // ── Klavye animasyonu (Messenger-style keyboard-synchronized) ──────────────
  // useAnimatedKeyboard returns keyboard.height as a SharedValue updated in
  // real-time on the UI thread — perfectly synced with the native keyboard animation.
  const keyboard = useAnimatedKeyboard();

  const keyboardAnimStyle = useAnimatedStyle(() => ({
    // Push the entire layout up by the exact keyboard height, frame-by-frame
    paddingBottom: keyboard.height.value,
  }));

  return (
    <ScreenWrapper className="bg-white">
      {/* Replace KeyboardAvoidingView with an Animated.View driven by keyboard.height.
          This gives frame-perfect synchronization instead of KAV's delayed snap. */}
      <Animated.View style={[{ flex: 1, backgroundColor: '#F4F5FB' }, keyboardAnimStyle]}>
        {/* ── HEADER ── */}
        <View className="border-b border-[#EEEEEE] bg-white px-4">
          <View className="h-[58px] flex-row items-center">
            {/* Back Button */}
            <Pressable
              onPress={handleBackPress}
              className="justify-center items-center mr-2.5 w-9 h-10 rounded-full active:bg-gray-100"
              hitSlop={10}
            >
              <Ionicons name="chevron-back" size={28} color="#1F2937" />
            </Pressable>

            {/* Avatar & User Info */}
            <Pressable
              onPress={handleOpenChatInfo}
              className="flex-row flex-1 items-center active:opacity-75"
            >
              {avatarUrl ? (
                <Image source={{ uri: avatarUrl }} className="w-11 h-11 rounded-full" />
              ) : (
                <View className="h-11 w-11 rounded-full bg-[#6f6bff] items-center justify-center">
                  <Text className="text-xl font-bold text-white">
                    {displayName.charAt(0).toUpperCase()}
                  </Text>
                </View>
              )}

              <View className="flex-1 ml-3">
                <Text className="text-base font-bold text-gray-900" numberOfLines={1}>
                  {convLoading ? '...' : displayName}
                </Text>

                {convLoading ? null : isOtherTyping ? (
                  <Text className="text-xs text-[#6f6bff] italic font-medium">Đang nhập...</Text>
                ) : isGroup ? (
                  <Text className="text-sm text-gray-500">{members.length} thành viên</Text>
                ) : (
                  <View className="mt-0.5 flex-row items-center">
                    <View
                      className={`mr-1.5 h-2 w-2 rounded-full ${
                        isOtherOnline ? 'bg-[#57C95B]' : 'bg-gray-300'
                      }`}
                    />
                    <Text
                      className={`text-sm font-normal ${isOtherOnline ? 'text-[#34A853]' : 'text-gray-400'}`}
                    >
                      {isOtherOnline ? 'Đang hoạt động' : 'Ngoại tuyến'}
                    </Text>
                  </View>
                )}
              </View>
            </Pressable>

            {/* Call Actions */}
            <Pressable
              className="justify-center items-center mr-3 w-9 h-10 rounded-full active:bg-gray-100"
              hitSlop={8}
            >
              <Ionicons name="call-outline" size={23} color="#4B5563" />
            </Pressable>
            <Pressable
              className="justify-center items-center mr-1 w-9 h-10 rounded-full active:bg-gray-100"
              hitSlop={8}
            >
              <Ionicons name="videocam-outline" size={24} color="#4B5563" />
            </Pressable>
          </View>
        </View>

        {/* ── PINNED MESSAGES TOP TAB ── */}
        {latestPinned && (
          <Pressable
            onPress={() => setChatInfoVisible(true)}
            className="flex-row items-center px-4 py-3 bg-[#6f6bff] active:bg-[#5B52E0]"
          >
            <View className="w-7 h-7 rounded-full bg-white/20 items-center justify-center mr-2.5">
              <FontAwesome5 name="thumbtack" size={14} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-white" numberOfLines={1}>
                {pinnedList.length} tin nhắn đã ghim
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="rgba(255,255,255,0.7)" />
          </Pressable>
        )}

        {/* ── MESSAGES ── */}
        <View className="flex-1 bg-[#F4F5FB]">
          {messagesLoading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#6f6bff" />
            </View>
          ) : visibleMessages.length === 0 ? (
            <View className="flex-1 justify-center items-center">
              <Text className="text-base font-normal text-gray-400">
                Chưa có tin nhắn nào. Hãy gửi lời chào!
              </Text>
            </View>
          ) : (
            <FlatList
              ref={flatListRef}
              data={listItems}
              keyExtractor={(item) => item.key}
              renderItem={renderItem}
              contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
              onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
            />
          )}
        </View>

        {/* ── REPLY BANNER ── */}
        {replyToMessage && (
          <View className="flex-row justify-between items-center px-4 py-2.5 bg-white border-t-2 border-[#6f6bff]">
            <View className="flex-row flex-1 items-center mr-2">
              <View className="mr-3 w-[3px] h-9 bg-[#6f6bff] rounded-full" />
              <View className="flex-1">
                <Text className="text-[12px] font-bold text-[#6f6bff] mb-0.5">
                  Trả lời {replyToMessage.senderId.username}
                </Text>
                <Text className="text-[12px] text-gray-500" numberOfLines={1}>
                  {replyToMessage.content || 'Tệp đính kèm'}
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => setReplyToMessage(null)}
              className="justify-center items-center w-7 h-7 bg-gray-100 rounded-full active:bg-gray-200"
            >
              <Ionicons name="close" size={16} color="#6B7280" />
            </Pressable>
          </View>
        )}

        {/* ── SELECTED ATTACHMENTS PREVIEW BAR ── */}
        {selectedAttachments.length > 0 && (
          <View className="px-4 py-2 bg-white border-t border-gray-100">
            <FlatList
              horizontal
              data={selectedAttachments}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                const isImg = item.type.startsWith('image/');
                const isVid = item.type.startsWith('video/');
                return (
                  <View className="relative mt-3 mr-3">
                    {isImg || isVid ? (
                      <View className="overflow-hidden relative w-16 h-16 bg-gray-100 rounded-xl">
                        <Image
                          source={{ uri: item.uri }}
                          className="w-16 h-16"
                          resizeMode="cover"
                        />
                        {isVid && (
                          <View className="absolute inset-0 justify-center items-center bg-black/30">
                            <Ionicons name="play" size={16} color="white" />
                          </View>
                        )}
                      </View>
                    ) : (
                      <View className="justify-center p-2 w-28 h-16 bg-gray-100 rounded-xl">
                        <Ionicons name="document-text-outline" size={20} color="#6f6bff" />
                        <Text numberOfLines={1} className="mt-1 text-xs font-medium text-gray-700">
                          {item.name}
                        </Text>
                      </View>
                    )}
                    <Pressable
                      onPress={() => handleRemoveAttachment(index)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-700 justify-center items-center z-10"
                    >
                      <Ionicons name="close" size={12} color="white" />
                    </Pressable>
                  </View>
                );
              }}
            />
          </View>
        )}

        {/* ── INPUT / COMPOSER ── */}
        <View
          className="px-4 pt-2.5 bg-white"
          style={{ paddingBottom: isKeyboardVisible ? 10 : Math.max(insets.bottom, 10) }}
        >
          <MessageComposer
            draft={draft}
            onDraftChange={handleDraftChange}
            onSend={handleSend}
            onPickMedia={handlePickMedia}
            onTakeCamera={handleTakeCamera}
            inputRef={inputRef}
            isKeyboardVisible={isKeyboardVisible}
            isSending={sendMutation.isPending}
            isUploading={isUploading}
            hasContent={Boolean(draft.trim() || selectedAttachments.length > 0)}
          />
        </View>
      </Animated.View>

      {/* ── MESSENGER-STYLE FLOATING CONTEXT MENU OVERLAY ── */}
      <FloatingMessageContextMenu
        visible={Boolean(selectedActionMessage && selectedMessageLayout)}
        message={selectedActionMessage}
        layout={selectedMessageLayout}
        currentUserId={currentUserId || ''}
        onClose={() => {
          setSelectedActionMessage(null);
          setSelectedMessageLayout(null);
          pendingLongPressRef.current = null;

          if (keyboardWasOpenRef.current) {
            keyboardWasOpenRef.current = false;
            // Restore keyboard focus ONLY after floating context menu reverse animation unmounts completely
            setTimeout(() => {
              if (isMountedRef.current) {
                inputRef.current?.focus();
              }
            }, 150);
          }
        }}
        onReply={(msg) => setReplyToMessage(msg)}
        onTogglePin={(msgId) => togglePinMutation.mutate(msgId)}
        onDeleteForEveryone={(msgId) => deleteMutation.mutate(msgId)}
        onDeleteForMe={(msgId) => setDeletedForMeIds((prev) => [...prev, msgId])}
      />

      {/* Full-Screen Chat Info Modal (Slide from right) */}
      <ChatInfoModal
        visible={isChatInfoVisible}
        onClose={() => setChatInfoVisible(false)}
        conversationId={id}
        displayName={displayName}
        avatarUrl={avatarUrl}
        isGroup={Boolean(isGroup)}
        isOtherOnline={isOtherOnline}
        members={members}
        currentUserId={currentUserId}
      />

      {/* Fullscreen Image Viewer Modal with Safe Area & Swipe-to-Dismiss */}
      <ImageViewerModal
        visible={Boolean(previewImageUri)}
        imageUri={previewImageUri}
        onClose={() => setPreviewImageUri(null)}
      />
    </ScreenWrapper>
  );
}
