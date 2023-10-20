'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectionBtn } from '../components/Button';
import { Carousel } from 'flowbite-react';

export default function Tweet() { 
	const verified = true;
	const datePosted = new Date();
	const Images = [
		'https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	return (
		<div className='hover:bg-[#F7F7F7]'>
			{/* <Link href={'/'}> */}
			<div className='flex items-center p-2   cursor-pointer '>
				<Image
					src='/user-solid.svg'
					alt='avatar'
					className='rounded-full'
					width={30}
					height={30}
				/>
				<div className='flex flex-col w-full'>
					<div className='flex ml-3'>
						<div className='flex items-center justify-center'>
							<div className='text-sm font-semibold'>Full Name</div>
							{verified && (
								<svg
									width='17'
									height='17'
									viewBox='0 0 31 32'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='ml-2'
								>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M20.1939 3.03697C20.5301 3.16223 20.8598 3.30056 21.1826 3.45134C21.6626 3.30321 22.1727 3.22345 22.7013 3.22345C25.5422 3.22345 27.8451 5.52641 27.8451 8.36726C27.8451 8.87887 27.7704 9.37302 27.6314 9.83943C27.8153 10.2237 27.9816 10.6181 28.1291 11.0215C29.83 11.8606 31 13.6122 31 15.6371C31 17.662 29.83 19.4137 28.1291 20.2528C28.0501 20.4689 27.9657 20.6825 27.8761 20.8932C28.1214 21.4933 28.2566 22.1501 28.2566 22.8385C28.2566 25.6793 25.9537 27.9823 23.1128 27.9823C22.5251 27.9823 21.9604 27.8837 21.4343 27.7022C20.9937 27.9193 20.5395 28.113 20.0733 28.2817C19.2185 29.937 17.4914 31.0686 15.5 31.0686C13.5086 31.0686 11.7815 29.937 10.9267 28.2817C10.7877 28.2314 10.6497 28.1789 10.5128 28.1241C9.89575 28.3861 9.21701 28.531 8.50443 28.531C5.66358 28.531 3.36062 26.228 3.36062 23.3872C3.36062 22.8596 3.44003 22.3507 3.58755 21.8715C3.31463 21.3511 3.07481 20.8106 2.87089 20.2528C1.17002 19.4137 0 17.662 0 15.6371C0 13.6122 1.17003 11.8606 2.87091 11.0215C3.05319 10.5229 3.26415 10.0381 3.50179 9.56914C3.4095 9.18356 3.36062 8.78112 3.36062 8.36726C3.36062 5.52641 5.66358 3.22345 8.50443 3.22345C8.98717 3.22345 9.45438 3.28995 9.8974 3.41429C10.1946 3.27784 10.4977 3.1519 10.8061 3.03697C11.6109 1.24665 13.4098 0 15.5 0C17.5901 0 19.3891 1.24665 20.1939 3.03697Z'
										fill='#1A8CD8'
									/>
									<g clip-path='url(#clip0_7_167)'>
										<path
											d='M22.7566 10.4602C23.1859 10.8937 23.1859 11.5976 22.7566 12.031L13.9644 20.9077C13.5351 21.3412 12.8379 21.3412 12.4086 20.9077L8.01253 16.4694C7.58323 16.0359 7.58323 15.332 8.01253 14.8986C8.44184 14.4652 9.13903 14.4652 9.56834 14.8986L13.1883 18.5499L21.2043 10.4602C21.6336 10.0268 22.3308 10.0268 22.7601 10.4602H22.7566Z'
											fill='white'
										/>
									</g>
									<defs>
										<clipPath id='clip0_7_167'>
											<rect
												width='15.3863'
												height='17.7535'
												fill='white'
												transform='translate(7.69312 6.80551)'
											/>
										</clipPath>
									</defs>
								</svg>
							)}
							<div className='text-xs text-gray-500 ml-3'>@username</div>
							<div className='text-sm ml-3'>
								{datePosted.toLocaleDateString('en-US')}
							</div>
						</div>
						{/* Follow Button */}
						<div className='ml-auto'>
							<ConnectionBtn username='test' />
						</div>
					</div>
					<div className='text-[0.6rem] text-gray-500 w-full overflow-hidden text-ellipsis ml-3 '>
						{}...
					</div>
				</div>
			</div>
			<div className='ml-14 mr-3 '>
				<div className='h-56 sm:h-64 xl:h-80 2xl:h-96 z-0'>
					{Images.length <= 1 ? (
						<img src={Images[0]} alt='image' className='w-full' />
					) : (
						<Carousel className='z-0'>
							{Images.length > 0 &&
								Images.map((image) => (
									<img src={image} alt='image' className='w-full' />
								))}
						</Carousel>
					)}
				</div>
				<div className='flex py-2 justify-between'>
					<div>
						<Link href='/'>
							<Image
								src={'/comment-regular.svg'}
								alt='comment icon'
								width={18}
								height={18}
							></Image>
						</Link>
						<Link href='/'>{/* Comment Count */}</Link>
					</div>
					<div>
						<Link href='/'>
							<Image
								src={'/retweet-solid.svg'}
								alt='comment icon'
								width={18}
								height={18}
							></Image>
						</Link>
						<Link href='/'>{/* Retweet Count */}</Link>
					</div>
					<div>
						<Link href='/'>
							<Image
								src={'/heart-regular.svg'}
								alt='comment icon'
								width={18}
								height={18}
							></Image>
						</Link>
						<Link href='/'>{/* Like Count */}</Link>
					</div>
					<div>
						<Link href='/'>
							<Image
								src={'/arrow-right-from-bracket-solid.svg'}
								alt='comment icon'
								width={18}
								height={18}
								className='-rotate-90'
							></Image>
						</Link>
					</div>
				</div>
			</div>
			{/* </Link> */}
		</div>
	);
}
