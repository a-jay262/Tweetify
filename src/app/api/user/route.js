import mongoose from 'mongoose';
import { User } from '../../../lib/model/user';
import { connectionStr } from '../../../lib/db';
import { internalServerError } from '../../../lib/errors/server';
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		await mongoose.connect(connectionStr);
		const payload = await request.json();
		let user = new User(payload);
		await user.save();
		return NextResponse.json({ user }, { status: 200 });
	} catch {
		internalServerError();
	}
}
