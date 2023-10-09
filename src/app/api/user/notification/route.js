import mongoose from 'mongoose';
import { Notification } from '../../../../lib/model/notification';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse } from 'next/server';

// Api to get all notification of a user
export async function GET(request) {
	try {
		await mongoose.connect(connectionStr);

		// Extract user ID from the request parameters or body
		const userId = request.nextUrl.searchParams.get('user_Id');

		// Retrieve all notifications of the user
		const notifications = await Notification.find({ userId, isDeleted: false });

		// Check if any notifications were found
		if (notifications.length > 0) {
			return NextResponse.json({ notifications }, { status: 200 });
		} else {
			return NextResponse.json({ status: 200 }); // No notifications found for the user
		}
	} catch {
		internalServerError();
	}
}


// Api to add a notification for a user
export async function POST(request) {
	try {
		await mongoose.connect(connectionStr);
		const payload = await request.json();
		let notification = new Notification(payload);
		await notification.save();
		return NextResponse.json({ notification }, { status: 200 });
	} catch {
		internalServerError();
	}
}
