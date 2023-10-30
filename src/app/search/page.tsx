'use client';
import React from 'react';
import SearchBar from '@/components/SearchBar';
import isAuthenticated from '../../utils/Auth/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function page() {
	
	useLayoutEffect(() => {
		const isAuth = isAuthenticated();
		if (!isAuth) {
			redirect('/login');
		}
	}, []);

	return (
		<div className='flex flex-col mx-3'>
			<SearchBar resultCount={20} />
		</div>
	);
}
