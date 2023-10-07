import mongoose from 'mongoose';
import { Tweet } from '../../../../../lib/model/tweet';
import { internalServerError, notFoundError } from '@/lib/errors/server';
import { connectionStr } from '../../../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract user ID from the request parameters or body
		const user_Id = await content.params.tweet[0];
		// // Retrieve tweets of the user where isDeleted is false
		const tweets = await Tweet.find({ userId: user_Id, isDeleted: false });

		return NextResponse.json({ tweets }, { status: 200 });
	} catch {
		internalServerError();
	}
}

export async function DELETE(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract user ID from the request parameters or body
		const user_Id = await content.params.tweet[0];

		// Update all tweets of the user to mark them as deleted
		const result = await Tweet.updateMany(
			{ userId: user_Id },
			{
				$set: {
					isDeleted: true,
					updatedAt: new Date().toISOString(),
				},
			}
		);

		// Check if any tweets were updated
		return NextResponse.json(
			{ message: 'All tweets of the user marked as deleted successfully' },
			{ status: 200 }
		);
	} catch {
		internalServerError();
	}
}
