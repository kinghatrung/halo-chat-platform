import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useListConversations } from '@/hooks/useConversations';
import type { ConversationListItem } from '@/types/conversation';
import type { Message } from '@/types/message';

interface ForwardMessageModalProps {
  visible: boolean;
  onClose: () => void;
  messageToForward: Message | null;
  onForward: (targetConversationId: string, message: Message) => Promise<void> | void;
}

export const ForwardMessageModal: React.FC<ForwardMessageModalProps> = ({
  visible,
  onClose,
  messageToForward,
  onForward,
}) => {
  const [search, setSearch] = useState('');
  const [forwardedIds, setForwardedIds] = useState<string[]>([]);
  const [sendingId, setSendingId] = useState<string | null>(null);

  const { data, isLoading } = useListConversations({ page: 1, pageSize: 50 });

  const conversations = data?.data.items ?? [];
  const filtered = conversations.filter((c) => {
    const name = c.type === 'group' ? c.name : c.otherMember?.username;
    return name?.toLowerCase().includes(search.toLowerCase());
  });

  const handleSend = async (conv: ConversationListItem) => {
    if (!messageToForward) return;
    try {
      setSendingId(conv._id);
      await onForward(conv._id, messageToForward);
      setForwardedIds((prev) => [...prev, conv._id]);
    } catch (error) {
      console.error('Failed to forward message:', error);
    } finally {
      setSendingId(null);
    }
  };

  const handleClose = () => {
    setForwardedIds([]);
    setSearch('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={handleClose}>
      <View className="flex-1 justify-end bg-black/50">
        <View className="bg-white rounded-t-3xl h-[80%] px-4 pt-4 pb-6">
          {/* Header */}
          <View className="flex-row justify-between items-center pb-3 border-b border-gray-100">
            <Text className="text-lg font-semibold text-gray-900">Chuyển tiếp tin nhắn</Text>
            <TouchableOpacity onPress={handleClose} className="p-1">
              <Ionicons name="close" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {/* Message Preview */}
          {messageToForward && (
            <View className="flex-row items-center p-3 my-3 bg-gray-50 rounded-xl border border-gray-100">
              <Ionicons name="arrow-redo" size={18} color="#6366F1" />
              <Text numberOfLines={1} className="flex-1 ml-2 text-sm font-medium text-gray-700">
                {messageToForward.content || 'Tệp đính kèm'}
              </Text>
            </View>
          )}

          {/* Search Bar */}
          <View className="flex-row items-center px-3 py-2 mb-3 bg-gray-100 rounded-xl">
            <Ionicons name="search" size={18} color="#9CA3AF" />
            <TextInput
              className="flex-1 ml-2 text-sm text-gray-900"
              placeholder="Tìm kiếm hội thoại..."
              value={search}
              onChangeText={setSearch}
              placeholderTextColor="#9CA3AF"
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Ionicons name="close-circle" size={16} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </View>

          {/* Conversation List */}
          {isLoading ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#6366F1" />
            </View>
          ) : (
            <FlatList
              data={filtered}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                const displayName =
                  item.type === 'group' ? item.name || 'Nhóm chat' : item.otherMember?.username;
                const avatarUrl = item.type === 'group' ? item.avatar : item.otherMember?.avatar;
                const isDone = forwardedIds.includes(item._id);
                const isSending = sendingId === item._id;

                return (
                  <View className="flex-row justify-between items-center py-3 border-b border-gray-100">
                    <View className="flex-row flex-1 items-center mr-3">
                      {avatarUrl ? (
                        <Image source={{ uri: avatarUrl }} className="w-11 h-11 rounded-full" />
                      ) : (
                        <View className="w-11 h-11 rounded-full bg-[#6366F1]/10 items-center justify-center">
                          <Text className="text-[#6366F1] font-semibold text-base">
                            {(displayName || 'C')[0].toUpperCase()}
                          </Text>
                        </View>
                      )}
                      <Text numberOfLines={1} className="ml-3 text-base font-medium text-gray-900">
                        {displayName}
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => handleSend(item)}
                      disabled={isDone || isSending}
                      className={`px-4 py-2 rounded-xl flex-row items-center ${
                        isDone ? 'bg-gray-100' : 'bg-[#6366F1]'
                      }`}
                    >
                      {isSending ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        <Text
                          className={`text-sm font-semibold ${
                            isDone ? 'text-gray-500' : 'text-white'
                          }`}
                        >
                          {isDone ? 'Đã gửi' : 'Gửi'}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                );
              }}
              ListEmptyComponent={
                <View className="items-center py-8">
                  <Text className="text-sm text-gray-400">Không tìm thấy hội thoại</Text>
                </View>
              }
            />
          )}
        </View>
      </View>
    </Modal>
  );
};
