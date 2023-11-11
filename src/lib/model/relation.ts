import mongoose, { Document, Schema } from 'mongoose';

export interface RelationDocument extends Document {
	firstPerson: string;
	secondPerson: string;
	relationType: 'following' | 'block';
	isMuted: boolean;
	createdAt: Date;
	isDeleted: boolean;
}

const RelationModelSchema: Schema = new Schema<RelationDocument>({
	firstPerson: String,
	secondPerson: String,
	relationType: {
		type: String,
		enum: ['following', 'block'],
		default: 'following',
	},
	isMuted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
});

export const Relation =
	mongoose.models.relation ||
	mongoose.model<RelationDocument>('relation', RelationModelSchema);
