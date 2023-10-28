'use client';
import isAuthenticated, { getLoggedUserId } from '../../utils/Auth/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect, useState, useEffect } from 'react';
import Notification from '@/components/Notification';
import { NotificationDocument } from '@/lib/model/notification';
import Spinner from '@/components/Spinner';

export default function Home() {
	useLayoutEffect(() => {
		const isAuth = isAuthenticated();
		if (!isAuth) {
			redirect('/login');
		}
	}, []);

	const [data, setData] = useState<[NotificationDocument] | null>(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`/api/user/notification?user_Id=6561c7219c9ef1451ccebc40`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data.notifications);
				console.log(data.notifications);
				setLoading(false);
			});
	}, []);

	if (isLoading)
		return (
			<div className=' flex w-full h-20 items-center justify-center'>
				<Spinner size={60} />
			</div>
		);

	if (!data)
		return (
			<div className=' flex w-full h-20 items-center justify-center'>
				<p className='text-2xl'>
					<span className='font-bold text-4xl'> 404 </span>
					<span> User not found</span>
				</p>
			</div>
		);

	return (
		<main className='h-[100dvh] no-scrollbar overflow-x-auto'>
			<h2 className='font-bold text-2xl px-3 py-4 pb-2 border-b-2 hidden sm:flex '>
				Notifications
			</h2>
			{data.map((notification) => (
				<Notification
					key={notification._id}
					type={notification.type}
					userId={notification.userId}
					LinkedId={
						notification.type === 'message'
							? notification.chatId
							: notification.TweetId
					}
				/>
			))}
		</main>
	);
}
