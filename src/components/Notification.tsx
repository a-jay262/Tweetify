'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { UserDocument } from '@/lib/model/user';
import Spinner from '@/components/Spinner';

type Props = {
	type: string; //'like', 'comment', 'retweet', 'message', 'follow', 'mention', 'reply'
	userId: string;
	LinkedId: string;
};

export default function Notification(props: Props) {
	const [data, setData] = useState<UserDocument | null>(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`/api/user/${props.userId}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data.findUser);
				setLoading(false);
			});
	}, []);

	if (isLoading)
		return (
			<div className=' flex w-full h-20 items-center justify-center'>
				<Spinner size={60} />
			</div>
		);

	if (!data) return null;

	return (
		<Link
			href={
				props.type == 'message'
					? `/inbox/${props.LinkedId}`
					: `/tweet/${props.LinkedId}`
			}
			className='flex flex-1 h-20 border-b-1 mx-3 px-3 items-center'
		>
			<Image
				src={
					data.profilePictureLink !== ''
						? data.profilePictureLink
						: '/user-solid.svg'
				}
				alt={`${data.username}'s profile picture`}
				height={24}
				width={24}
				className='w-12 h-12  rounded-full aspect-square bg-cover'
			/>
			<div className='flex justify-center my-2 ml-6 text-sm'>
				@{data.username}
				{' • '}({data.firstName} {data.lastName}){' '}
				{props.type === 'like' && 'liked your tweet'}
				{props.type === 'comment' && 'commented on your tweet'}
				{props.type === 'retweet' && 'retweeted your tweet'}
				{props.type === 'message' && 'sent you a message'}
				{props.type === 'follow' && 'followed you'}
				{props.type === 'mention' && 'mentioned you in a tweet'}
				{props.type === 'reply' && 'replied to your tweet'}
			</div>
		</Link>
	);
}
