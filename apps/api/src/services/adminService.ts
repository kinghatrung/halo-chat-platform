import { escapeRegex, toPageSize } from '@/helpers';
import User from '@/models/user';
import RefreshToken from '@/models/refresh_token';
import Message from '@/models/message';
import Conversation from '@/models/conversation';
import { sanitizeText } from '@/helpers/sanitize';
import { getOrSetCache } from '@/helpers/cache';

const METRICS_CACHE_TTL_SECONDS = 30;

const adminService = {
  listUsers: async (options: {
    q?: string;
    status?: 'active' | 'locked';
    page?: number;
    pageSize?: number;
  }) => {
    try {
      const page = Math.max(1, Number(options.page) || 1);
      const pageSize = toPageSize(options.pageSize, 20);
      const skip = (page - 1) * pageSize;

      const filter: any = {};
      if (options.status) {
        filter.accountStatus = options.status;
      }
      if (options.q) {
        filter.$or = [
          { username: { $regex: escapeRegex(options.q), $options: 'i' } },
          { email: { $regex: escapeRegex(options.q), $options: 'i' } },
        ];
      }

      const [items, total] = await Promise.all([
        User.find(filter).select('-password').skip(skip).limit(pageSize).sort({ createdAt: -1 }).exec(),
        User.countDocuments(filter),
      ]);

      const totalPages = Math.ceil(total / pageSize);

      return { items, meta: { total, page, pageSize, totalPages } };
    } catch (error) {
      throw error;
    }
  },

  updateUserStatus: async (
    adminId: string,
    targetUserId: string,
    data: { status: 'active' | 'locked'; reason?: string },
  ) => {
    try {
      if (adminId === targetUserId) {
        throw new Error('Bạn không thể tự khóa/mở khóa tài khoản của chính mình!');
      }
      if (data.status !== 'active' && data.status !== 'locked') {
        throw new Error('status không hợp lệ!');
      }

      const user = await User.findById(targetUserId);
      if (!user) {
        throw new Error('Không tìm thấy người dùng!');
      }

      user.accountStatus = data.status;
      user.lockReason = data.status === 'locked' ? sanitizeText(data.reason) || '' : null;
      user.lockedAt = data.status === 'locked' ? new Date() : null;
      await user.save();

      // Without this a locked user keeps refreshing access tokens for up to 7 days.
      if (data.status === 'locked') {
        await RefreshToken.deleteMany({ userId: targetUserId });
      }

      const { password, ...safeUser } = user.toObject();
      return safeUser;
    } catch (error) {
      throw error;
    }
  },

  getMetrics: async (from?: Date, to?: Date) => {
    try {
      const cacheKey = `admin:metrics:${from?.toISOString() || ''}:${to?.toISOString() || ''}`;

      return await getOrSetCache(cacheKey, METRICS_CACHE_TTL_SECONDS, async () => {
        const range: any = {};
        if (from) range.$gte = from;
        if (to) range.$lte = to;
        const createdAtFilter = Object.keys(range).length ? { createdAt: range } : {};

        const [
          totalUsers,
          newUsers,
          totalMessages,
          newMessages,
          totalConversations,
          newConversations,
        ] = await Promise.all([
          User.countDocuments({}),
          User.countDocuments(createdAtFilter),
          Message.countDocuments({}),
          Message.countDocuments(createdAtFilter),
          Conversation.countDocuments({}),
          Conversation.countDocuments(createdAtFilter),
        ]);

        return {
          users: { total: totalUsers, new: newUsers },
          messages: { total: totalMessages, new: newMessages },
          conversations: { total: totalConversations, new: newConversations },
        };
      });
    } catch (error) {
      throw error;
    }
  },
};

export default adminService;
