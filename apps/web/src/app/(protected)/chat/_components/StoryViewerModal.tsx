'use client';

import { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Avatar, Input, Modal, Popover, Skeleton, Typography } from 'antd';
import { CloseOutlined, DeleteOutlined, EyeOutlined, SendOutlined } from '@ant-design/icons';

import { useUserStories, useDeleteStory, useStoryViewers } from '@/hook/useStories';
import { conversationService } from '@/services/conversation.service';
import { messageService } from '@/services/message.service';
import { colorForId, initialOf } from '@/lib/avatar';
import { notify } from '@/lib/notify';

const { Text } = Typography;

const STORY_DURATION_MS = 5000;
const QUICK_REACTIONS = ['❤️', '😂', '😮', '😢', '🔥', '👏'];

interface StoryViewerModalProps {
  open: boolean;
  onClose: () => void;
  userId: string;
  currentUserId?: string;
}

const StoryViewerModal = ({ open, onClose, userId, currentUserId }: StoryViewerModalProps) => {
  const [index, setIndex] = useState(0);
  const [replyText, setReplyText] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useUserStories(open ? userId : '');
  const deleteStoryMutation = useDeleteStory();

  const stories = useMemo(() => data?.data.stories ?? [], [data]);
  const activeStory = stories[index];
  const isOwn = currentUserId === userId;

  useEffect(() => {
    if (data && !isOwn) {
      queryClient.invalidateQueries({ queryKey: ['stories', 'feed'] });
    }
  }, [data, isOwn, queryClient]);

  const { data: viewersData } = useStoryViewers(activeStory?._id ?? '', isOwn && open);
  const viewers = viewersData?.data.viewers ?? [];

  useEffect(() => {
    if (open) {
      setIndex(0);
      setReplyText('');
    }
  }, [open, userId]);

  useEffect(() => {
    if (!open || stories.length === 0) return;
    const timer = setTimeout(() => {
      if (index < stories.length - 1) {
        setIndex((i) => i + 1);
      } else {
        onClose();
      }
    }, STORY_DURATION_MS);
    return () => clearTimeout(timer);
  }, [open, index, stories.length, onClose]);

  const handleDelete = () => {
    if (!activeStory) return;
    deleteStoryMutation.mutate(activeStory._id, {
      onSuccess: () => {
        notify.success('Đã xoá story!');
        if (stories.length <= 1) onClose();
        else setIndex((i) => Math.max(0, i - 1));
      },
      onError: () => notify.error('Xoá story thất bại!'),
    });
  };

  const handleSendReactionOrReply = async (contentToSend: string) => {
    if (!contentToSend.trim() || isOwn) return;
    setIsSendingReply(true);
    try {
      // 1. Get or create direct conversation with story creator
      const convRes = await conversationService.createDirectConversation(userId);
      const conversationId = convRes.data.conversation._id;

      // 2. Send story reply message
      const prefix = activeStory?.caption ? `[Story: "${activeStory.caption}"] ` : '[Story] ';
      await messageService.sendMessage(conversationId, {
        content: `${prefix}${contentToSend}`,
        type: 'text',
      });

      notify.success(`Đã gửi phản hồi tới tác giả!`);
      setReplyText('');
    } catch {
      notify.error('Không thể gửi phản hồi cho story');
    } finally {
      setIsSendingReply(false);
    }
  };

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => (index < stories.length - 1 ? setIndex((i) => i + 1) : onClose());

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      closable={false}
      width={400}
      styles={{ body: { padding: 0, background: '#000', borderRadius: 16, overflow: 'hidden' } }}
    >
      <div
        style={{
          position: 'relative',
          height: 680,
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Story Progress Indicators */}
        <div style={{ display: 'flex', gap: 4, padding: '8px 8px 0', zIndex: 10 }}>
          {stories.map((s, i) => (
            <div
              key={s._id}
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                background: i < index ? '#fff' : 'rgba(255,255,255,0.35)',
                overflow: 'hidden',
              }}
            >
              {i === index && (
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    background: '#fff',
                    animation: `story-progress ${STORY_DURATION_MS}ms linear forwards`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <style>{`@keyframes story-progress { from { width: 0% } to { width: 100% } }`}</style>

        {/* Top User Info & Controls Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 12px',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Avatar size={34} style={{ backgroundColor: colorForId(userId) }}>
              {initialOf(userId)}
            </Avatar>
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>
              {activeStory?.caption ? activeStory.caption : 'Story'}
            </Text>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {isOwn && activeStory && (
              <>
                <Popover
                  trigger="click"
                  content={
                    <div style={{ maxWidth: 220 }}>
                      {viewers.length === 0 && <Text type="secondary">Chưa có lượt xem</Text>}
                      {viewers.map((v) => (
                        <div
                          key={v._id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '4px 0',
                          }}
                        >
                          <Avatar size={24} src={v.avatar || undefined}>
                            {initialOf(v.username)}
                          </Avatar>
                          <Text style={{ fontSize: 13 }}>{v.username}</Text>
                        </div>
                      ))}
                    </div>
                  }
                >
                  <button type="button" style={iconButtonStyle}>
                    <EyeOutlined /> {activeStory.viewerIds.length}
                  </button>
                </Popover>
                <button type="button" style={iconButtonStyle} onClick={handleDelete}>
                  <DeleteOutlined />
                </button>
              </>
            )}
            <button type="button" style={iconButtonStyle} onClick={onClose}>
              <CloseOutlined />
            </button>
          </div>
        </div>

        {/* Story Content View Area */}
        {isLoading && (
          <div
            style={{
              padding: 24,
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Skeleton.Image active style={{ width: '100%', height: 480 }} />
          </div>
        )}

        {!isLoading && activeStory && (
          <div
            style={{
              position: 'relative',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#09090b',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeStory.attachmentId.url}
              alt="story"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
            {/* Click handlers for previous/next story navigation */}
            <div
              onClick={goPrev}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '35%',
                cursor: 'pointer',
                zIndex: 2,
              }}
            />
            <div
              onClick={goNext}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '35%',
                cursor: 'pointer',
                zIndex: 2,
              }}
            />
          </div>
        )}

        {/* Bottom Facebook Reaction & Direct Message Reply Bar */}
        {!isOwn && (
          <div
            style={{
              padding: '8px 12px 14px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {/* Quick Emoji Reaction bar */}
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 4px' }}>
              {QUICK_REACTIONS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => handleSendReactionOrReply(emoji)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 24,
                    cursor: 'pointer',
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {emoji}
                </button>
              ))}
            </div>

            {/* Direct Text Reply Bar */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Input
                placeholder="Gửi tin nhắn phản hồi..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onPressEnter={() => handleSendReactionOrReply(replyText)}
                style={{
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.18)',
                  borderColor: 'transparent',
                  color: '#fff',
                }}
              />
              <button
                type="button"
                onClick={() => handleSendReactionOrReply(replyText)}
                disabled={!replyText.trim() || isSendingReply}
                style={{
                  background: replyText.trim() ? '#6366f1' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 34,
                  height: 34,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: replyText.trim() ? 'pointer' : 'default',
                }}
              >
                <SendOutlined style={{ fontSize: 13 }} />
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

const iconButtonStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.15)',
  border: 'none',
  color: '#fff',
  borderRadius: 16,
  padding: '4px 10px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 13,
};

export default StoryViewerModal;
