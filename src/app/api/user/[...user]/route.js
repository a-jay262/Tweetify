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

