import mongoose, { Document, Schema } from 'mongoose';

interface PaymentDocument extends Document {
	userId: string;
	createdAt: Date;
	isDeleted: boolean;
	amount: number;
}

const PaymentModelSchema: Schema = new Schema<PaymentDocument>({
	userId: String,
	createdAt: { type: Date, default: Date.now },
	isDeleted: { type: Boolean, default: false },
	amount: { type: Number, default: 0 },
});

export const payment =
	mongoose.models.payments ||
	mongoose.model<PaymentDocument>('payments', PaymentModelSchema);
