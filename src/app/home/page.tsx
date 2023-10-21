'use client'
import { SmUserCard } from '../../components/UserCard';
import Tweet from '../../components/Tweet';
import isAuthenticated from '../../utils/Auth/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
	useLayoutEffect(() => {
		const isAuth = isAuthenticated();
		if (!isAuth) {
			redirect('/login');
		}
	}, []);

	return (
		<main className='h-[100dvh] no-scrollbar overflow-x-auto'>
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
			<SmUserCard />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
		</main>
	);
}
