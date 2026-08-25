import React, { RefObject, useEffect } from 'react';
import {
  ActivityIndicator,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// ─── Constants ─────────────────────────────────────────────────────────────────

const ANIM_DURATION = 200;
const ACTIONS_WIDTH = 80; // total width of the 3 action icons

// ─── Props ─────────────────────────────────────────────────────────────────────

export interface MessageComposerProps {
  draft: string;
  onDraftChange: (text: string) => void;
  onSend: () => void;
  onPickMedia: () => void;
  onTakeCamera: () => void;
  onVoice?: () => void;
  inputRef: RefObject<TextInput | null>;
  isKeyboardVisible: boolean;
  isSending: boolean;
  isUploading: boolean;
  hasContent: boolean; // draft.trim() || attachments.length > 0
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function MessageComposer({
  draft,
  onDraftChange,
  onSend,
  onPickMedia,
  onTakeCamera,
  onVoice,
  inputRef,
  isKeyboardVisible,
  isSending,
  isUploading,
  hasContent,
}: MessageComposerProps) {
  // Shared animation values: 0 = compact (keyboard up), 1 = expanded (keyboard down)
  const expanded = useSharedValue(isKeyboardVisible ? 0 : 1);

  useEffect(() => {
    expanded.value = withTiming(isKeyboardVisible ? 0 : 1, {
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.quad),
    });
  }, [isKeyboardVisible, expanded]);

  // ── Animated Styles ──────────────────────────────────────────────────────────

  /** Secondary action buttons (Image, Camera, Mic): slide + fade out when compact */
  const actionsStyle = useAnimatedStyle(() => ({
    width: expanded.value * ACTIONS_WIDTH,
    opacity: expanded.value,
    overflow: 'hidden',
  }));

  /** "Expand" chevron shown in compact mode (inverse of actions) */
  const expandBtnStyle = useAnimatedStyle(() => ({
    opacity: 1 - expanded.value,
    width: (1 - expanded.value) * 36,
    overflow: 'hidden',
  }));

  /** Divider between actions and TextInput — only visible when expanded */
  const dividerStyle = useAnimatedStyle(() => ({
    opacity: expanded.value,
    width: expanded.value * 1,
    marginHorizontal: expanded.value * 4,
  }));

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <View className="min-h-[54px] flex-row items-center rounded-[28px] bg-[#F2F4F7] px-2 py-1">

      {/* ── Expand chevron (compact mode only) ── */}
      <Animated.View style={expandBtnStyle} className="overflow-hidden justify-center items-center">
        <Pressable
          onPress={() => inputRef.current?.blur()}
          className="justify-center items-center w-9 h-9 rounded-full active:bg-gray-200"
        >
          <Ionicons name="chevron-forward" size={22} color="#6B7280" />
        </Pressable>
      </Animated.View>

      {/* ── Secondary actions (Image, Camera, Mic) — visible when expanded ── */}
      <Animated.View style={actionsStyle} className="overflow-hidden flex-row items-center">
        <Pressable
          onPress={onPickMedia}
          className="justify-center items-center w-10 h-10 rounded-full active:bg-gray-200"
        >
          <Ionicons name="image-outline" size={23} color="#6B7280" />
        </Pressable>

        <Pressable
          onPress={onTakeCamera}
          className="justify-center items-center w-10 h-10 rounded-full active:bg-gray-200"
        >
          <Ionicons name="camera-outline" size={26} color="#6B7280" />
        </Pressable>
        
        {/* <Pressable
          onPress={onVoice}
          className="justify-center items-center w-10 h-10 rounded-full active:bg-gray-200"
        >
          <Ionicons name="mic-outline" size={23} color="#6B7280" />
        </Pressable> */}
      </Animated.View>

      {/* ── Divider ── */}
      <Animated.View style={[dividerStyle, { height: 22, backgroundColor: '#DADDE2' }]} />

      {/* ── Text Input ── */}
      <TextInput
        ref={inputRef}
        className="flex-1 px-2 text-[16px] font-normal leading-5 text-gray-900"
        placeholder="Nhập tin nhắn..."
        placeholderTextColor="#9CA3AF"
        value={draft}
        onChangeText={onDraftChange}
        multiline
        textAlignVertical="center"
      />

      {/* ── Send / Mic button ── */}
      <Pressable
        onPress={hasContent ? onSend : onVoice}
        disabled={(hasContent && (isSending || isUploading))}
        className={`ml-1 h-[42px] w-[42px] items-center justify-center rounded-full active:opacity-80 ${
          hasContent ? 'bg-[#6f6bff]' : 'bg-[#6f6bff]'
        }`}
      >
        {isSending || isUploading ? (
          <ActivityIndicator size="small" color="white" />
        ) : hasContent ? (
          <Ionicons name="send" size={18} color="white" />
        ) : (
          <Ionicons name="mic" size={20} color="white" />
        )}
      </Pressable>
    </View>
  );
}
