'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { showToast } from 'react-next-toast';
import logOut from '../utils/Auth/logOut';

export function LogoutBtn(props: any) {

	const router = useRouter();

	const handleLogout = () => {
		logOut();
		showToast.success('Logged Out Successfully');
		router.push('/login');
	};


	return (
		<button
			className={`bg-red-400 text-white hover:bg-red-700 rounded-full px-4 py-3 mt-2 mx-2 xl:mx-auto font-semibold flex  items-center justify-center aspect-auto sm:aspect-square xl:aspect-auto xl:w-[85%] sm:opacity-100 hover:opacity-100 active:opacity-100 ${props.className}`}
			onClick={handleLogout}
		>
			<svg
				width='30'
				height='30'
				viewBox='0 0 23 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M0.421143 9.48477C-0.140381 10.0463 -0.140381 10.9582 0.421142 11.5197L6.17114 17.2697C6.73267 17.8313 7.64458 17.8313 8.2061 17.2697C8.76763 16.7082 8.76763 15.7963 8.2061 15.2348L4.90884 11.9375L14.3739 11.9375C15.169 11.9375 15.8114 11.2951 15.8114 10.5C15.8114 9.70488 15.169 9.0625 14.3739 9.0625L4.90884 9.0625L8.2061 5.76523C8.76763 5.20371 8.76763 4.2918 8.2061 3.73027C7.64458 3.16875 6.73267 3.16875 6.17114 3.73027L0.421143 9.48027V9.48477ZM15.8114 17.6875C15.0163 17.6875 14.3739 18.3299 14.3739 19.125C14.3739 19.9201 15.0163 20.5625 15.8114 20.5625H18.6864C21.0672 20.5625 22.9989 18.6309 22.9989 16.25V4.75C22.9989 2.36914 21.0672 0.4375 18.6864 0.4375L15.8114 0.4375C15.0163 0.4375 14.3739 1.07988 14.3739 1.875C14.3739 2.67012 15.0163 3.3125 15.8114 3.3125L18.6864 3.3125C19.4815 3.3125 20.1239 3.95488 20.1239 4.75V16.25C20.1239 17.0451 19.4815 17.6875 18.6864 17.6875H15.8114Z'
					fill='white'
				/>
			</svg>

			<div className='flex sm:hidden xl:flex ml-2 text-xl'>LogOut</div>
		</button>
	);
}

type ConProps = {
	username: string;
};

export function ConnectionBtn(props: ConProps) {
	const [connected, setConnection] = useState(false);
	// Check Connection
	// if connected then set connected to true
	// else set connected to false

	return connected ? <UnFollowBtn username={props.username} /> : <FollowBtn username={props.username} />;
}

export function FollowBtn(props: any) {
	const handleCreateConnection = () => {
		// Create Connection
	};

	return (
		<button
			className='theme-bg-blue rounded-full px-3 py-0 text-[0.9rem] text-white h-6 my-auto'
			onClick={handleCreateConnection}
		>
			Follow
		</button>
	);
}

export function UnFollowBtn(props: any) {
	const handleRemoveConnection = () => {
		// Remove Connection
	};

	return (
		<button
			className='theme-bg-blue rounded-full px-3 py-0 text-[0.9rem] text-white h-6 my-auto'
			onClick={handleRemoveConnection}
		>
			UnFollow
		</button>
	);
}
