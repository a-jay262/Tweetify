'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import Spinner from './Spinner';

type propType = {
	resultCount?: number;
};

export default function SearchBar(props:propType) {
	const [SearchText, setSearchText] = useState('');

	const [loading, setLoading] = useState(false);
	const [SearchResults, setSearchResults] = useState([
		{
			username: 'abdulmateenzwl',
			fullName: 'Abdul Mateen',
			imgLink: '/user-solid.svg',
			isVerfied: 'true',
		},
	]);

	const handleTextClear = () => {
		setSearchText('');
		// set focus on the input
	};

	const handleOnTextChange = (e: any) => {
		e.preventDefault();
		setSearchText(e.target.value);

		setLoading(true);
		// fetch the data
		if (SearchText !== '') {
			// load data from server
			setSearchResults([
				{
					username: 'test',
					fullName: 'test test',
					imgLink: '/user-solid.svg',
					isVerfied: 'true',
				},
				{
					username: 'test2',
					imgLink: '/user-solid.svg',
					fullName: 'test test',
					isVerfied: 'false',
				},
				{
					username: 'test3',
					imgLink: '/user-solid.svg',
					fullName: 'test test',
					isVerfied: 'true',
				},
			]);
		} else {
			// load data from cache
			setSearchResults([
				{
					username: 'abdulmateenzwl',
					fullName: 'Abdul Mateen',
					imgLink: '/user-solid.svg',
					isVerfied: 'true',
				},
			]);
		}
		setLoading(false);
	};

	return (
		<div className='group'>
			<div className='w-full rounded-full border-1 border-gray-400 flex px-3 py-2 items-center focus-within:border-blue-400 mt-2 group'>
				<Link href={'/search'}>
					<svg
						width='22'
						height='22'
						viewBox='0 0 47 47'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='fill-gray-400 group-focus-within:fill-blue-400 '
					>
						<g clip-path='url(#clip0_13_1074)'>
							<path d='M38.1875 19.0938C38.1875 23.3072 36.8197 27.1994 34.5156 30.3572L46.1371 41.9879C47.2846 43.1353 47.2846 44.9988 46.1371 46.1463C44.9896 47.2938 43.1262 47.2938 41.9787 46.1463L30.3572 34.5156C27.1994 36.8289 23.3072 38.1875 19.0937 38.1875C8.54629 38.1875 0 29.6412 0 19.0938C0 8.54629 8.54629 0 19.0937 0C29.6412 0 38.1875 8.54629 38.1875 19.0938ZM19.0937 32.3125C20.8297 32.3125 22.5486 31.9706 24.1523 31.3063C25.7561 30.642 27.2133 29.6683 28.4408 28.4408C29.6683 27.2133 30.642 25.7561 31.3063 24.1523C31.9706 22.5486 32.3125 20.8297 32.3125 19.0938C32.3125 17.3578 31.9706 15.6389 31.3063 14.0352C30.642 12.4314 29.6683 10.9742 28.4408 9.74668C27.2133 8.51921 25.7561 7.54552 24.1523 6.88122C22.5486 6.21691 20.8297 5.875 19.0937 5.875C17.3578 5.875 15.6389 6.21691 14.0352 6.88122C12.4314 7.54552 10.9742 8.51921 9.74668 9.74668C8.51921 10.9742 7.54552 12.4314 6.88122 14.0352C6.21691 15.6389 5.875 17.3578 5.875 19.0938C5.875 20.8297 6.21691 22.5486 6.88122 24.1523C7.54552 25.7561 8.51921 27.2133 9.74668 28.4408C10.9742 29.6683 12.4314 30.642 14.0352 31.3063C15.6389 31.9706 17.3578 32.3125 19.0937 32.3125Z' />
						</g>
						<defs>
							<clipPath id='clip0_13_1074'>
								<rect width='47' height='47' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</Link>
				<input
					type='text'
					placeholder='Search'
					className='mx-4 w-full border-none outline-none '
					value={SearchText}
					onChange={handleOnTextChange}
				></input>{' '}
				{SearchText && (
					<svg
						width='24'
						height='24'
						viewBox='0 0 36 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='fill-gray-400 group-focus-within:fill-blue-400 '
						onClick={handleTextClear}
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05888 8.05887 0 18 0C27.9411 0 36 8.05888 36 18ZM23.7286 9.41422C24.5097 8.63316 25.776 8.63316 26.5571 9.41422L26.5858 9.44292C27.3668 10.224 27.3668 11.4903 26.5858 12.2714L20.8571 18L26.5858 23.7286C27.3668 24.5097 27.3668 25.776 26.5858 26.5571L26.557 26.5858C25.776 27.3668 24.5097 27.3668 23.7286 26.5858L18 20.8571L12.2714 26.5858C11.4903 27.3668 10.224 27.3668 9.44296 26.5858L9.41425 26.5571C8.63318 25.776 8.63318 24.5097 9.41425 23.7286L15.1429 18L9.41422 12.2714C8.63315 11.4903 8.63315 10.224 9.41422 9.44293L9.44293 9.41422C10.224 8.63317 11.4903 8.63317 12.2714 9.41422L18 15.1429L23.7286 9.41422Z'
						/>
					</svg>
				)}
			</div>
			<div className='hidden bg-white top-0 mx-2 mt-1 border-1 shadow-md px-2 rounded-xl py-1 group-focus-within:block '>
				{SearchText !== '' ? (
					<div>
						<div className='bg-white top-0 font-semibold'>Search Results</div>
						<div className='mx-2'>
							{loading ? (
								<div className='h-20 flex items-center justify-center'>
									<Spinner />
								</div>
							) : (
								SearchResults.map((result) => {
									return (
										<Link href={'/user/' + result.username}>
											<div className='flex items-center my-2'>
												<Image
													src={result.imgLink}
													alt='user image'
													width={10}
													height={10}
													className='w-10 h-10 rounded-full bg-gray-400'
												/>
												<div className='flex flex-col ml-2 justify-center'>
													<div className='flex items-center'>
														<div className='font-semibold'>
															{result.fullName}
														</div>
														{result.isVerfied && (
															<svg
																width='14'
																height='14'
																viewBox='0 0 31 31'
																fill='none'
																xmlns='http://www.w3.org/2000/svg'
																className='ml-1'
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
														)}
													</div>
													<div className='text-[.8rem] -mt-1'>
														@{result.username}
													</div>
												</div>
											</div>
										</Link>
									);
								})
							)}
						</div>
					</div>
				) : (
					<div>
						<div className='flex'>
							<div className='bg-white top-0 font-semibold'>Recent</div>
						</div>
						<div className='mx-2'>
							{SearchResults.map((result) => {
								return (
									<Link href={'/user/' + result.username}>
										<div className='flex items-center my-2'>
											<Image
												src={result.imgLink}
												alt='user image'
												width={10}
												height={10}
												className='w-10 h-10 rounded-full bg-gray-400'
											/>
											<div className='flex flex-col ml-2 justify-center'>
												<div className='flex items-center'>
													<div className='font-semibold'>{result.fullName}</div>
													{result.isVerfied && (
														<svg
															width='14'
															height='14'
															viewBox='0 0 31 31'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'
															className='ml-1'
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
													)}
												</div>
												<div className='text-[.8rem] -mt-1'>
													@{result.username}
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
