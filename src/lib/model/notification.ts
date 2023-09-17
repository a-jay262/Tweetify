import mongoose, { Document, Schema } from 'mongoose';

export interface NotificationDocument extends Document {
	userId: string;
	createdAt: Date;
	isDeleted: boolean;
	isOpened: boolean;
	type:
		| 'like'
		| 'comment'
		| 'retweet'
		| 'message'
		| 'follow'
		| 'mention'
		| 'reply';
	TweetId: string;
	chatId: string;
	linkedUserId: string;
}

const notificationSchema = new Schema<NotificationDocument>({
	userId: String,
	createdAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	isOpened: { type: Boolean, default: false },
	type: {
		type: String,
		enum: [
			'like',
			'comment',
			'retweet',
			'message',
			'follow',
			'mention',
			'reply',
		],
		default: 'like',
	},
	TweetId: { type: String, default: '' },
	chatId: { type: String, default: '' },
	linkedUserId: { type: String, default: '' },
});

export const Notification =
	mongoose.models.notification ||
	mongoose.model<NotificationDocument>('notification', notificationSchema);
