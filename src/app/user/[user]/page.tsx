'use client';
import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ConnectionBtn } from '../../../components/Button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import isAuthenticated, {
	getLoggedUserId,
	getLoggedUsername,
} from '../../../utils/Auth/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { showToast } from 'react-next-toast';
import { UserDocument } from '@/lib/model/user';

import Spinner from '@/components/Spinner';

export default function page() {
	useLayoutEffect(() => {
		const isAuth = isAuthenticated();
		if (!isAuth) {
			redirect('/login');
		}
	}, []);

	const route = usePathname();
	const userName = route.replace('/user/', '').toLowerCase();

	const [data, setData] = useState<UserDocument | null>(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`/api/user/${userName}`, {
			method: 'OPTIONS',
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
			<div className=' flex w-full h-[90vh] items-center justify-center'>
				<Spinner size={60} />
			</div>
		);

	if (!data)
		return (
			<div className=' flex w-full h-[90vh] items-center justify-center'>
				<p className='text-2xl'>
					<span className='font-bold text-4xl'> 404 </span>
					<span> User not found</span>
				</p>
			</div>
		);

	return (
		<main>
			<Image
				src={
					data.coverPictureLink !== '' ? data.coverPictureLink : '/bg-test.png'
				}
				alt={`${userName}'s cover picture`}
				width={100}
				height={100}
				className='w-full h-48'
			/>
			<div className='-mt-10 mx-10 flex items-center'>
				<Image
					src={
						data.profilePictureLink !== ''
							? data.profilePictureLink
							: '/user-solid.svg'
					}
					alt={`${userName}'s profile picture`}
					height={100}
					width={100}
					className='w-32 h-auto rounded-full aspect-square bg-cover'
				/>
				<div className='ml-auto'>
					{getLoggedUsername() == userName ? (
						<Link href={`/user/${userName}/edit`}>
							<button className=' rounded-full px-3 py-0 text-[0.9rem] text-gray-500 border-1 border-gray-500 h-6 my-auto'>
								Edit Profile
							</button>
						</Link>
					) : (
						<div className='flex'>
							<ConnectionBtn username={userName} />
							<div>
								<Link href={`/inbox/${userName}`}>
									<div className='ml-2 border-1 border-black p-1 rounded-full '>
										<Image
											src={'/envelope-solid.svg'}
											alt='envelope icon'
											width={18}
											height={18}
										></Image>
									</div>
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className='mx-7 mt-2'>
				<div className='flex items-center'>
					<h2 className='text-xl font-bold'>
						<span>
							{data.firstName} {data.lastName}
						</span>
					</h2>
					<svg
						width='20'
						height='20'
						viewBox='0 0 31 31'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='ml-2'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M20.1494 3.03027C20.4847 3.15526 20.8138 3.29328 21.1358 3.44372C21.6148 3.29592 22.1237 3.21634 22.6512 3.21634C25.4858 3.21634 27.7837 5.51421 27.7837 8.34879C27.7837 8.85927 27.7092 9.35234 27.5704 9.81773C27.754 10.2011 27.9198 10.5946 28.067 10.9971C29.7641 11.8344 30.9316 13.5822 30.9316 15.6026C30.9316 17.6231 29.7641 19.3708 28.067 20.2081C27.9882 20.4238 27.904 20.6368 27.8146 20.8471C28.0593 21.4459 28.1943 22.1012 28.1943 22.7881C28.1943 25.6227 25.8964 27.9205 23.0618 27.9205C22.4754 27.9205 21.9119 27.8222 21.387 27.6411C20.9474 27.8577 20.4941 28.051 20.029 28.2193C19.176 29.8709 17.4528 31 15.4658 31C13.4788 31 11.7555 29.8709 10.9026 28.2193C10.7639 28.1691 10.6262 28.1167 10.4896 28.0621C9.87391 28.3234 9.19667 28.468 8.48565 28.468C5.65108 28.468 3.3532 26.1701 3.3532 23.3356C3.3532 22.8092 3.43244 22.3013 3.57963 21.8233C3.30731 21.304 3.06802 20.7647 2.86455 20.2081C1.16744 19.3708 0 17.6231 0 15.6026C0 13.5822 1.16745 11.8344 2.86457 10.9971C3.04645 10.4997 3.25694 10.0159 3.49406 9.54801C3.40197 9.16329 3.3532 8.76174 3.3532 8.34879C3.3532 5.51421 5.65108 3.21634 8.48565 3.21634C8.96733 3.21634 9.43351 3.28269 9.87556 3.40676C10.1721 3.2706 10.4745 3.14494 10.7822 3.03026C11.5853 1.2439 13.3803 0 15.4658 0C17.5513 0 19.3463 1.2439 20.1494 3.03027Z'
							fill='#1A8CD8'
						/>
						<g clip-path='url(#clip0_15_3)'>
							<path
								d='M22.7065 10.4372C23.1348 10.8696 23.1348 11.572 22.7065 12.0045L13.9337 20.8616C13.5053 21.2941 12.8096 21.2941 12.3813 20.8616L7.99489 16.433C7.56653 16.0005 7.56653 15.2982 7.99489 14.8657C8.42325 14.4332 9.1189 14.4332 9.54726 14.8657L13.1592 18.5089L21.1575 10.4372C21.5859 10.0047 22.2815 10.0047 22.7099 10.4372H22.7065Z'
								fill='white'
							/>
						</g>
						<defs>
							<clipPath id='clip0_15_3'>
								<rect
									width='15.3524'
									height='17.7143'
									fill='white'
									transform='translate(7.67619 6.7905)'
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<h3 className='text-sm text-gray-500'>@{userName}</h3>
				<p className='text-sm'>{data.username}</p>
			</div>
		</main>
	);
}
