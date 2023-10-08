import mongoose from 'mongoose';
import { Notification } from '../../../../lib/model/notification';
import {
	internalServerError,
	notFoundError,
} from '../../../../lib/errors/server';
import { connectionStr } from '../../../../lib/db';
import { NextResponse } from 'next/server';


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
