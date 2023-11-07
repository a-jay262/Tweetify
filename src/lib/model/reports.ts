import mongoose, { Document, Schema } from 'mongoose';

interface ReportDocument extends Document {
	reporterUserId: string;
	reportedUserId: string;
	reportedTweetId: string;
	createdAt: Date;
	isDeleted: boolean;
}

const ReportModelSchema: Schema = new Schema<ReportDocument>({
	reporterUserId: String,
	reportedUserId: String,
	reportedTweetId: String,
	createdAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
});

export const ReportModel =
	mongoose.models.reports ||
	mongoose.model<ReportDocument>('reports', ReportModelSchema);
