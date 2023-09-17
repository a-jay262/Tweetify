import mongoose from 'mongoose';

const relationModel = new mongoose.Schema({
	firstPerson: String,
	secondPerson: String,
	relationType: {
		type: String,
		enum: ['following', 'block'],
		default: 'following',
	},
    isMuted: { type: Boolean, default: false },
	createdAt: { type: String, default: Date.now },
	isDeleted: { type: Boolean, default: false },
});

export const Relation = 
	mongoose.models.relation || mongoose.model('relation', relationModel);
