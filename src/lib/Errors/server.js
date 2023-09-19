import { NextResponse } from 'next/server';

export function internalServerError() {
	return NextResponse.json({ status: 500 });
}

export function notFoundError() {
	return NextResponse.json({ error: 'Not Found' }, { status: 404 });
}