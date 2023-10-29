'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
export default function page() {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	function togglePasswordVisibility() {
		setIsPasswordVisible(!isPasswordVisible);
	}

	const [pageNo, setPageNo] = useState(1);

	function verifyDetails() {
		setPageNo(2);
	}

    function UpdateDetails(){
        
    }

	const input2 = useRef(null);
	const input3 = useRef(null);
	const input4 = useRef(null);

	const handleInput = (e: any, nextInput: any) => {
		if (e.target.value.length >= 1 && nextInput && nextInput.current) {
			nextInput.current.focus();
		}
	};

	return (
		<div className='flex flex-col md:flex-row items-center justify-center w-full h-full'>
			<Link className=' md:flex-1 ' href={'/'}>
				<img
					src={'/twitter.svg'}
					alt='logo'
					className=' min-h-[40px] min-w-[40px] h-auto w-auto md:m-32 mx-4'
				></img>
			</Link>
			<div className='flex-1 flex items-center justify-center my-32 md:my-0'>
				<div className='flex flex-col sm:border-1 sm:border-gray-400 sm:rounded-2xl sm:p-8 sm:shadow-xl'>
					<h1 className='text-4xl font-bold'>Happening now</h1>
					<h2 className='text-2xl font-bold'>Join Tweetify today.</h2>
					{pageNo === 1 && (
						<div className='flex flex-col items-stretch justify-center mt-8 duration-150'>
							<p className='first-letter:capitalize font-semibold mt-4'>
								Enter Your Details
							</p>
							<input
								type='text'
								className='rounded-full m-2'
								placeholder='Email / Username'
							/>
							<div className='flex'>
								<input
									type={isPasswordVisible === true ? 'password' : 'text'}
									className='rounded-full m-2'
									placeholder='Password'
								/>
								<div
									className='flex flex-row items-center justify-center'
									onClick={togglePasswordVisibility}
								>
									<input type='checkbox' className='m-2' />
								</div>
							</div>
							<input
								type={isPasswordVisible === true ? 'password' : 'text'}
								className='rounded-full m-2'
								placeholder=' Confirm Password'
							/>
							<button
								className=' bg-blue-500 text-white rounded-full px-4 py-2 m-2 w-auto flex items-center justify-center'
								onClick={verifyDetails}
							>
								Create account
							</button>
							<Link
								href={'/login'}
								className='bg-white text-blue-500 rounded-full px-4 py-2 m-2 border-blue-500 border-1 w-auto flex items-center justify-center'
							>
								Log in
							</Link>
							<button></button>
						</div>
					)}
					{pageNo === 2 && (
						<div className='flex flex-col mt-3'>
							<p className='first-letter:capitalize font-semibold mt-4'>
								Enter the OTP sent to your email
							</p>
							<div className='flex'>
								<input
									type='text'
									maxLength={1}
									className='w-12 h-12 m-2 text-2xl text-center border rounded focus:outline-none focus:border-blue-500'
									onChange={(e) => handleInput(e, input2)}
								/>
								<input
									type='text'
									maxLength={1}
									className='w-12 h-12 m-2 text-2xl text-center border rounded focus:outline-none focus:border-blue-500'
									ref={input2}
									onChange={(e) => handleInput(e, input3)}
								/>
								<input
									type='text'
									maxLength={1}
									className='w-12 h-12 m-2 text-2xl text-center border rounded focus:outline-none focus:border-blue-500'
									ref={input3}
									onChange={(e) => handleInput(e, input4)}
								/>
								<input
									type='text'
									maxLength={1}
									className='w-12 h-12 m-2 text-2xl text-center border rounded focus:outline-none focus:border-blue-500'
									ref={input4}
								/>
							</div>
							<button
								className=' bg-blue-500 text-white rounded-full px-4 py-2 m-2 w-auto flex items-center justify-center'
								onClick={verifyDetails}
							>
								Verify
							</button>
						</div>
					)}
					{pageNo === 3 && (
						<div className='flex flex-col mt-3'>
							<p className=''>Enter Your Birthday</p>
							<input type='date' name='' id='' />
							<p className='mt-1'>Enter Bio for your profile</p>
							<textarea name='' id='' cols={20} rows={5}></textarea>
							<button
								className=' bg-blue-500 text-white rounded-full px-4 py-2 m-2 w-auto flex items-center justify-center'
								onClick={verifyDetails}
							>
								Done
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
