// Import necessary modules and dependencies
import mongoose from 'mongoose';
import { Relation } from '../../../lib/model/relation';
import { internalServerError, notFoundError } from '../../../lib/errors/server';
import { connectionStr } from '../../../lib/db';
import { NextResponse, NextRequest } from 'next/server';

// Define the POST function to handle tweet creation
export async function POST(request:NextRequest) {
	try {
		notFoundError();

		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract user IDs and relation type from the request body
		const { firstUserId, secondUserId } = await request.json();

		// Create a new Relation instance with the provided data
		const newRelation = new Relation({
			firstPerson: firstUserId,
			secondPerson: secondUserId,
			relationType: 'following', // Default to 'following' if not provided
			isMuted: false,
			createdAt: new Date().toISOString(),
			isDeleted: false,
		});

		// Save the new relation to the database
		await newRelation.save();

		// Respond with the created relation and a 201 status
		return NextResponse.json({ relation: newRelation }, { status: 201 });
	} catch (error) {
		// Handle internal server error in case of an exception
		internalServerError();
	}
}
