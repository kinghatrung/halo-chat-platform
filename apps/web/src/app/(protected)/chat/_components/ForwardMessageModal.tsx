'use client';

import { useState } from 'react';
import { Avatar, Button, Flex, Input, Modal, Typography } from 'antd';
import { SearchOutlined, SendOutlined, TeamOutlined } from '@ant-design/icons';
import { useListConversations } from '@/hook/useConversations';
import { colorForId, initialOf } from '@/lib/avatar';
import type { ConversationListItem } from '@/types/conversation';
import type { Message } from '@/types/message';
import { notify } from '@/lib/notify';

const { Text } = Typography;

interface ForwardMessageModalProps {
  open: boolean;
  onClose: () => void;
  messageToForward: Message | null;
  onForward: (targetConversationId: string, message: Message) => void;
}

const ForwardMessageModal = ({
  open,
  onClose,
  messageToForward,
  onForward,
}: ForwardMessageModalProps) => {
  const [search, setSearch] = useState('');
  const [forwardedIds, setForwardedIds] = useState<string[]>([]);
  const { data } = useListConversations({ page: 1, pageSize: 50 });

  const conversations = data?.data.items ?? [];
  const filtered = conversations.filter((c) => {
    const name = c.type === 'group' ? c.name : c.otherMember?.username;
    return name?.toLowerCase().includes(search.toLowerCase());
  });

  const handleSend = (conv: ConversationListItem) => {
    if (!messageToForward) return;
    onForward(conv._id, messageToForward);
    setForwardedIds((prev) => [...prev, conv._id]);
    notify.success(
      `Đã chuyển tiếp tin nhắn tới "${conv.type === 'group' ? conv.name : conv.otherMember?.username}"`,
    );
  };

  return (
    <Modal
      title="Chuyển tiếp tin nhắn"
      open={open}
      onCancel={() => {
        setForwardedIds([]);
        onClose();
      }}
      footer={null}
      width={480}
    >
      <Input
        prefix={<SearchOutlined />}
        placeholder="Tìm hội thoại..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <div style={{ maxHeight: 360, overflowY: 'auto' }}>
        {filtered.map((conv) => {
          const displayName =
            conv.type === 'group' ? conv.name || 'Nhóm chat' : conv.otherMember?.username;
          const avatarUrl = conv.type === 'group' ? conv.avatar : conv.otherMember?.avatar;
          const isDone = forwardedIds.includes(conv._id);

          return (
            <Flex
              key={conv._id}
              align="center"
              justify="space-between"
              style={{ padding: '8px 4px', borderBottom: '1px solid #f0f0f0' }}
            >
              <Flex align="center" gap={10}>
                <Avatar
                  src={avatarUrl || undefined}
                  icon={conv.type === 'group' ? <TeamOutlined /> : undefined}
                  style={{ backgroundColor: colorForId(conv._id) }}
                >
                  {initialOf(displayName || '')}
                </Avatar>
                <Text strong>{displayName}</Text>
              </Flex>
              <Button
                type={isDone ? 'default' : 'primary'}
                disabled={isDone}
                icon={<SendOutlined />}
                size="small"
                onClick={() => handleSend(conv)}
              >
                {isDone ? 'Đã gửi' : 'Gửi'}
              </Button>
            </Flex>
          );
        })}
      </div>
    </Modal>
  );
};

export default ForwardMessageModal;
