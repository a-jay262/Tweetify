import mongoose, { Document, Model } from 'mongoose';

export interface UserDocument extends Document {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	passwordHash: string;
	birthday: string | null;
	isVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
	isEmailVerified: boolean;
	bio: string;
	link: string;
	linkText: string;
	isDeleted: boolean;
	profilePictureLink: string;
	coverPictureLink: string;
	bookmarkTweet: string[];
}

const userSchema = new mongoose.Schema<UserDocument>({
	username: String,
	firstName: String,
	lastName: String,
	email: String,
	passwordHash: String,
	birthday: { type: String, default: null },
	isVerified: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	isEmailVerified: { type: Boolean, default: false },
	bio: { type: String, default: '' },
	link: { type: String, default: '' },
	linkText: { type: String, default: '' },
	isDeleted: { type: Boolean, default: false },
	profilePictureLink: { type: String, default: '' },
	coverPictureLink: { type: String, default: '' },
	bookmarkTweet: { type: [String], default: [] },
});

export const User: Model<UserDocument> =
	mongoose.models.users || mongoose.model('users', userSchema);
