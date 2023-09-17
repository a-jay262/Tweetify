import mongoose from 'mongoose';

const TweetModel = new mongoose.Schema({
	userId: String,
	createdAt: { type: String, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	type: {
		type: String,
		enum: ['tweet', 'comment', 'retweet'],
		default: 'tweet',
	},
	text: String,
	imagesLink: { type: Array, default: [] },
	videosLink: { type: Array, default: [] },
	updatedAt: { type: String, default: Date.now },
	linkedTweetId: { type: String, default: '' },
	likedby: { type: Array, default: [] },
});

export const Tweet =
	mongoose.models.tweet || mongoose.model('tweet', TweetModel);
