// Import necessary modules and dependencies
import mongoose from 'mongoose';
import { Tweet } from '../../../lib/model/tweet';
import { internalServerError } from '../../../lib/errors/server';
import { connectionStr } from '../../../lib/db';
import { NextResponse } from 'next/server';

// Define the GET function to retrieve all tweets from the database
export async function GET() {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Fetch all tweets from the database
		const tweets = await Tweet.find();

		// Respond with the retrieved tweets and a 200 status
		return NextResponse.json({ tweets }, { status: 200 });
	} catch {
		// Handle internal server error in case of an exception
		return internalServerError();
	}
}
