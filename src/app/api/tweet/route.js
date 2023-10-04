import mongoose from 'mongoose';
import { Tweet } from '../../../lib/model/tweet';
import { internalServerError } from '../../../lib/errors/server';
import { connectionStr } from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		await mongoose.connect(connectionStr);

		// Fetch all tweets from the database
		const tweets = await Tweet.find();

		return NextResponse.json({ tweets }, { status: 200 });
	} catch {
		return internalServerError();
	}
}
