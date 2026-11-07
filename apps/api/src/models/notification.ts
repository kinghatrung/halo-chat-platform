import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  userId: mongoose.Types.ObjectId;
  content: string;
  type: 'message' | 'mention' | 'system' | 'friend_request';
  isRead: boolean;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['message', 'mention', 'system', 'friend_request'],
      default: 'message',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// Listing is "my notifications, newest first"; the single userId index made Mongo sort in memory.
NotificationSchema.index({ userId: 1, createdAt: -1 });
// One row per message per recipient adds up fast; Mongo drops rows older than 30 days by itself.
NotificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

const Notification = mongoose.model<INotification>('Notification', NotificationSchema);
export default Notification;
