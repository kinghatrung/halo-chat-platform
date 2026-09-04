'use client';

import { useRouter } from 'next/navigation';
import { Badge, Button, Empty, Popover, Skeleton, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import {
  useNotifications,
  useMarkNotificationAsRead,
  useMarkAllNotificationsAsRead,
} from '@/hook/useNotifications';
import { useChatStore } from '@/store/useChatStore';
import type { NotificationItem } from '@/types/notification';

const { Text } = Typography;

const formatTime = (isoDate: string) =>
  new Date(isoDate).toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

function getNotificationGroupTitle(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Trước đó';

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);

  const sevenDaysAgo = new Date(startOfToday);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  if (date >= startOfToday) {
    return 'Hôm nay';
  }
  if (date >= startOfYesterday) {
    return 'Hôm qua';
  }
  if (date >= sevenDaysAgo) {
    const dayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    return dayNames[date.getDay()];
  }

  return 'Trước đó';
}

const NotificationBell = () => {
  const router = useRouter();
  const setSelectedConversationId = useChatStore((s) => s.setSelectedConversationId);

  const { data, isLoading } = useNotifications({ page: 1, pageSize: 20 });
  const markAsReadMutation = useMarkNotificationAsRead();
  const markAllAsReadMutation = useMarkAllNotificationsAsRead();

  const items = data?.data.items ?? [];
  const unreadCount = data?.data.meta.unreadCount ?? 0;

  const groupedSections = items.reduce<{ title: string; items: NotificationItem[] }[]>(
    (acc, item) => {
      const title = getNotificationGroupTitle(item.createdAt);
      const existing = acc.find((sec) => sec.title === title);
      if (existing) {
        existing.items.push(item);
      } else {
        acc.push({ title, items: [item] });
      }
      return acc;
    },
    [],
  );

  const handleClickItem = (item: NotificationItem) => {
    if (!item.isRead) {
      markAsReadMutation.mutate(item._id);
    }
    if (item.link?.startsWith('/chat/')) {
      setSelectedConversationId(item.link.replace('/chat/', ''));
      router.push('/chat');
    } else if (item.link) {
      router.push(item.link);
    }
  };

  const content = (
    <div style={{ width: 320, maxHeight: 420, overflowY: 'auto' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}
      >
        <Text strong>Thông báo</Text>
        {unreadCount > 0 && (
          <Button
            type="link"
            size="small"
            loading={markAllAsReadMutation.isPending}
            onClick={() => markAllAsReadMutation.mutate()}
          >
            Đánh dấu đã đọc tất cả
          </Button>
        )}
      </div>

      {isLoading && <Skeleton active paragraph={{ rows: 3 }} />}
      {!isLoading && items.length === 0 && (
        <Empty description="Không có thông báo nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
      {!isLoading &&
        groupedSections.map((section) => (
          <div key={section.title} style={{ marginBottom: 10 }}>
            <Text
              type="secondary"
              style={{
                fontSize: 12,
                fontWeight: 600,
                display: 'block',
                marginBottom: 4,
                paddingLeft: 4,
              }}
            >
              {section.title}
            </Text>
            {section.items.map((item) => (
              <div
                key={item._id}
                onClick={() => handleClickItem(item)}
                style={{
                  padding: '10px 8px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  background: item.isRead ? 'transparent' : 'rgba(91,91,246,0.08)',
                  marginBottom: 2,
                }}
              >
                <Text style={{ display: 'block', fontSize: 13 }}>{item.content}</Text>
                <Text type="secondary" style={{ fontSize: 11 }}>
                  {formatTime(item.createdAt)}
                </Text>
              </div>
            ))}
          </div>
        ))}
    </div>
  );

  return (
    <Popover content={content} trigger="click" placement="bottomRight">
      <Badge count={unreadCount} size="small" offset={[-4, 4]}>
        <Button type="text" icon={<BellOutlined />} />
      </Badge>
    </Popover>
  );
};

export default NotificationBell;
