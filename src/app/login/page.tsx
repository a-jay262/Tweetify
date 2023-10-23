'use client';
import Link from 'next/link';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { showToast } from 'react-next-toast';
import { login } from '@/utils/Auth/auth';

export default function page() {
	const router = useRouter();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	function togglePasswordVisibility() {
		setIsPasswordVisible(!isPasswordVisible);
	}

	async function handleLogin() {
		const res = await fetch(`/api/user/${username}/${password}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// Check the status code
		if (res.ok) {
			// Status code is in the range 200-299 (success)
			const data = await res.json();
			if (data.error) {
			} else {
				showToast.success('Log in successful');
				login(data.findUser._id, data.findUser.username)
				router.push('/home');
			}
		} else {
			showToast.error('Please check your credentials');
		}
	}

	return (
		<div className='flex flex-col md:flex-row items-center justify-center w-full h-full'>
			<Link className=' md:flex-1 ' href={'/'}>
				<img
					src={'/twitter.svg'}
					alt='logo'
					className=' min-h-[40px] min-w-[40px] h-auto w-auto md:m-32 mx-4 my-3'
				></img>
			</Link>
			<div className='flex-1 flex items-center justify-center my-32 md:my-0'>
				<div className='flex flex-col sm:border-1 sm:border-gray-400 sm:rounded-2xl sm:p-8 sm:shadow-xl'>
					<h1 className='text-4xl font-bold'>Happening now</h1>
					<h2 className='text-2xl font-bold'>Join Tweetify today.</h2>
					<div className='flex flex-col items-stretch justify-center mt-8'>
						<p className='first-letter:capitalize font-semibold mt-4'>
							Enter Your Details
						</p>
						<input
							type='text'
							className='rounded-full m-2'
							placeholder='Email / Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						<div className='flex'>
							<input
								type={isPasswordVisible === true ? 'password' : 'text'}
								className='rounded-full m-2'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<div
								className='flex flex-row items-center justify-center'
								onClick={togglePasswordVisibility}
							>
								<input type='checkbox' className='m-2' />
							</div>
						</div>
						<button
							className='bg-white text-blue-500 rounded-full px-4 py-2 m-2 border-blue-500 border-1 w-auto flex items-center justify-center'
							type='submit'
							onClick={handleLogin}
						>
							Log in
						</button>
						<Link
							href={'/signup'}
							className=' bg-blue-500 text-white rounded-full px-4 py-2 m-2 w-auto flex items-center justify-center'
						>
							Create account
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
