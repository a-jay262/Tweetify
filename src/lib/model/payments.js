import mongoose from 'mongoose';

const PaymentModel = new mongoose.Schema({
    userId: String,
    createdAt: { type: String, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    amount: { type: Number, default: 0 },
});

export const Reports =
	mongoose.models.payments || mongoose.model('payments', PaymentModel);
