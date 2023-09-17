import mongoose from 'mongoose';

const ReportModel = new mongoose.Schema({
	reporterUserId: String,
    reportedUserId: String,
    reportedTweetId: String,
    createdAt: { type: String, default: Date.now },
    isDeleted: { type: Boolean, default: false },
});

export const Reports =
	mongoose.models.reports || mongoose.model('reports', ReportModel);
