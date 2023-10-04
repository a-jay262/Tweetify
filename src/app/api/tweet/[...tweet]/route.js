import mongoose from 'mongoose';
import { Tweet } from '../../../../lib/model/tweet';
import { User } from '../../../../lib/model/user';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse } from 'next/server';



export async function POST(request) {
	try {
		await mongoose.connect(connectionStr);
		const payload = await request.json();
		let tweet = new Tweet(payload);
		await tweet.save();
		return NextResponse.json({ tweet }, { status: 200 });
	} catch {
		internalServerError();
	}
}


export async function PUT(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract tweet ID from the request parameters or body
		const tweetId = content.params.tweet[0];

		// Find the tweet by ID
		let tweet = await Tweet.findById(tweetId);

		// Check if the tweet exists
		if (!tweet) {
			return notFoundError();
		}

		// Update tweet fields based on the request body
		const payload = await request.json();
		tweet.set(payload);

		// Set the updatedAt field to the current date
		tweet.updatedAt = new Date().toISOString();

		// Save the updated tweet
		await tweet.save();

		return NextResponse.json({ tweet }, { status: 200 });
	} catch {
		internalServerError();
	}
}

