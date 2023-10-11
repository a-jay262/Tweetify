import mongoose from 'mongoose';
import { Notification } from '../../../../../lib/model/notification';
import {
	internalServerError,
	notFoundError,
} from '../../../../../lib/Errors/server';
import { connectionStr } from '../../../../../lib/db';
import { NextResponse } from 'next/server';

// Api to get all notification of a user
export async function DELETE(request, content) {
	try {
		await mongoose.connect(connectionStr);

		// Extract notification ID from the request parameters or body
		const  notificationId  = content.params.notification[0];

		// Find the notification by ID
		let notification = await Notification.findById(notificationId);

		// Check if the notification exists
		if (!notification) {
			return notFoundError();
		}

		// Update fields to mark the notification as deleted
		notification.isDeleted = true;
		notification.updatedAt = new Date().toISOString();

		// Save the updated notification
		await notification.save();

		return NextResponse.json({ message:"Notification has been deleted" }, { status: 200 });
	} catch {
		internalServerError();
	}
}
