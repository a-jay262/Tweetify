// Import necessary modules and dependencies
import mongoose from 'mongoose';
import { Tweet } from '../../../../lib/model/tweet';
import { User } from '../../../../lib/model/user';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse } from 'next/server';

// Define the POST function to handle tweet creation
export async function POST(request) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract the payload (tweet data) from the request body
		const payload = await request.json();

		// Create a new Tweet instance with the payload
		let tweet = new Tweet(payload);

		// Save the new tweet to the database
		await tweet.save();

		// Respond with the created tweet and a 200 status
		return NextResponse.json({ tweet }, { status: 200 });
		return NextResponse.json( { status: 200 });
	} catch {
		// Handle internal server error in case of an exception
		internalServerError();
	}
}

// Define the PUT function to handle tweet updates
export async function PUT(request, content) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract the tweet ID from the request parameters or body
		const tweetId = content.params.tweet[0];

		// Find the tweet in the database by ID
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

		// Save the updated tweet to the database
		await tweet.save();

		// Respond with the updated tweet and a 200 status
		return NextResponse.json({ tweet }, { status: 200 });
	} catch {
		// Handle internal server error in case of an exception
		internalServerError();
	}
}

// Define the DELETE function to handle tweet deletion
export async function DELETE(request, content) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract the tweet ID from the request parameters or body
		const tweetId = content.params.tweet[0];

		// Find the tweet in the database by ID
		let tweet = await Tweet.findById(tweetId);

		// Check if the tweet exists
		if (!tweet) {
			return notFoundError();
		}

		// Set isDeleted to true instead of physically deleting the tweet
		tweet.isDeleted = true;

		// Save the updated tweet to the database
		await tweet.save();

		// Respond with a success message and a 200 status
		return NextResponse.json(
			{ message: 'Tweet marked as deleted successfully' },
			{ status: 200 }
		);
	} catch {
		// Handle internal server error in case of an exception
		internalServerError();
	}
}

// Define the GET function to retrieve tweets of a user
export async function GET(request, content) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract the user ID from the request parameters or body
		const user_Id = content.params.tweet[0];

		// Retrieve tweets of the user where isDeleted is false
		const tweets = await Tweet.find({ userId: user_Id, isDeleted: false });

		// Respond with the retrieved tweets and a 200 status
		return NextResponse.json({ tweets }, { status: 200 });
	} catch {
		// Handle internal server error in case of an exception
		internalServerError();
	}
}
