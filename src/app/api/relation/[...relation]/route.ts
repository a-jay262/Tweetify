// Import necessary modules and dependencies
import mongoose from 'mongoose';
import { Relation } from '../../../../lib/model/relation';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse, NextRequest } from 'next/server';

// Define the DELETE function to handle relation deletion
export async function DELETE(
	request: NextRequest,
	content: Record<string, any>
) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract relation ID from the request parameters
		const secondPersonId = content.params.relation[0];

		// Find the relation by ID
		const relation = await Relation.findOne({ secondPerson: secondPersonId });

		// Check if the relation exists
		if (!relation) {
			return notFoundError();
		}

		// Delete the relation
		await relation.deleteOne();

		// Respond with a success message and a 200 status
		return NextResponse.json(
			{ message: 'Relation deleted successfully' },
			{ status: 200 }
		);
	} catch (error) {
		// Handle internal server error in case of an exception
		return internalServerError();
	}
}

export async function PUT(request: NextRequest, content: Record<string, any>) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract relation ID from the request parameters
		const secondPersonId = content.params.relation[0];

		// Find the relation by ID
		const relation = await Relation.findOne({ secondPerson: secondPersonId });

		// Check if the relation exists
		if (!relation) {
			return notFoundError();
		}

		// Update the relation to mute (set isMuted to true)
		await relation.updateOne({ isMuted: true });

		// Respond with a success message and a 200 status
		return NextResponse.json(
			{ message: 'Relation updated successfully to mute' },
			{ status: 200 }
		);
	} catch (error) {
		// Handle internal server error in case of an exception
		return internalServerError();
	}
}

export async function GET(request: NextRequest, content: Record<string, any>) {
	try {
		// Connect to the MongoDB database using the connection string
		await mongoose.connect(connectionStr);

		// Extract user IDs from the request parameters or content
		const firstUserId = content.params.relation[0];
		const secondUserId = content.params.relation[1];

		// Find the relation based on the user IDs
		const relation = await Relation.findOne({
			firstPerson: firstUserId,
			secondPerson: secondUserId,
		});

		// Check if the relation exists
		if (relation) {
			// Respond with a success message and a 200 status
			return NextResponse.json({ hasRelation: true }, { status: 200 });
		} else {
			// Respond with a message indicating no relation and a 404 status
			return notFoundError();
		}
	} catch (error) {
		// Handle internal server error in case of an exception
		return internalServerError();
	}
}
