import mongoose, { Document, Schema } from 'mongoose';

interface TweetDocument extends Document {
	userId: string;
	createdAt: Date;
	isDeleted: boolean;
	type: 'tweet' | 'comment' | 'retweet';
	text: string;
	imagesLink: string[];
	videosLink: string[];
	updatedAt: Date;
	linkedTweetId: string;
	likedby: string[];
}

const TweetModelSchema: Schema = new Schema<TweetDocument>({
	userId: String,
	createdAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	type: {
		type: String,
		enum: ['tweet', 'comment', 'retweet'],
		default: 'tweet',
	},
	text: String,
	imagesLink: { type: [String], default: [] },
	videosLink: { type: [String], default: [] },
	updatedAt: { type: Date, default: Date.now },
	linkedTweetId: { type: String, default: '' },
	likedby: { type: [String], default: [] },
});

export const Tweet =
	mongoose.models.tweet ||
	mongoose.model<TweetDocument>('tweet', TweetModelSchema);

	