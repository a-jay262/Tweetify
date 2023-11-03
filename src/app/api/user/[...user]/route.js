import mongoose from 'mongoose';
import { User } from '../../../../lib/model/user';
import { connectionStr } from '../../../../lib/db';
import { internalServerError } from '../../../../lib/errors/server';
import { NextResponse } from 'next/server';

// Get User with username and password
export async function GET(request, content) {
	try {
		await mongoose.connect(connectionStr);
		let findUser = await User.findOne({
			username: content.params.user[0],
			passwordHash: content.params.user[1],
		});
		if (findUser == null) {
			return NextResponse.json({ findUser }, { status: 404 });
		}
		return NextResponse.json({ findUser }, { status: 200 });
	} catch {
		internalServerError();
	}
}

export async function PUT(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract user ID from the request parameters or body
		const userId = content.params.user[0];

		// Find the user by ID
		let user = await User.findById(userId);

		// Check if the user exists
		if (!user) {
			return notFoundError();
		}

		// Update user fields based on the request body
		const payload = await request.json();
		user.set(payload);

		// Save the updated user
		await user.save();

		return NextResponse.json({ user }, { status: 200 });
	} catch {
		internalServerError();
	}
}

export async function DELETE(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract user ID from the request parameters or body
		const userId = content.params.user[0];

		// Find the user by ID
		let user = await User.findById(userId);

		// Check if the user exists
		if (!user) {
			return notFoundError();
		}

		// Set isDeleted to true instead of physically deleting the user
		user.isDeleted = true;

		// Save the updated user
		await user.save();

		return NextResponse.json(
			{ message: 'User marked as deleted successfully' },
			{ status: 200 }
		);
	} catch {
		internalServerError();
	}
}

// Get User with username 
export async function OPTIONS(request, content) {
	try {
		await mongoose.connect(connectionStr);
		let findUser = await User.findOne({
			username: content.params.user[0],
		});
		if (findUser == null) {
			return NextResponse.json({ findUser }, { status: 404 });
		}
		return NextResponse.json({ findUser }, { status: 200 });
	} catch {
		internalServerError();
	}
}

// Get User with username 
export async function PATCH(request, content) {
	try {
		await mongoose.connect(connectionStr);
		let findUser = await User.findOne({
			_id: content.params.user[0],
		});
		if (findUser == null) {
			return NextResponse.json({ findUser }, { status: 404 });
		}
		return NextResponse.json({ findUser }, { status: 200 });
	} catch {
		internalServerError();
	}
}