'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { LogoutBtn } from '../components/Button';
import { getLoggedUserId, getLoggedUsername } from '@/utils/Auth/auth';
import { usePathname } from 'next/navigation';
import { UserDocument } from '@/lib/model/user';

export default function NavBar() {
	const [NotificationsCount, setNotificationsCount] = useState(1);
	const [MessageCount, setMessageCount] = useState(5);

	const [menuActiveClass, setmenuActiveClass] = useState('-left-80');

	const route = usePathname();

	const handlehamburgertoggel = () => {
		if (menuActiveClass === '-left-80') {
			setmenuActiveClass('left-0');
		} else {
			setmenuActiveClass('-left-80');
		}
	};

	const [userData, setuserData] = useState<UserDocument | null>(null);
	useEffect(() => {
		fetch(`/api/user/${getLoggedUserId()}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((userData) => {
				setuserData(userData.findUser);
			});
	}, []);

	// alert(route)

	return (
		<nav className='flex sm:flex z-10 '>
			<div
				className={`h-[94dvh] sm:h-[100dvh] w-auto bg-white sm:flex sm:flex-col absolute sm:static sm:border-0 border-r-2 px-2 pr-12 sm:px-0 border-gray-200 top-0 sm:left-0 duration-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:shadow-none ${menuActiveClass}`}
			>
				<div className='flex items-center justify-center h-min'>
					<svg
						onClick={handlehamburgertoggel}
						width='45'
						height='45'
						viewBox='0 0 78 78'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='theme-blue-fill'
					>
						<path d='M69.9821 23.113C70.0317 23.8058 70.0317 24.4988 70.0317 25.1917C70.0317 46.3248 53.9467 70.6752 24.5482 70.6752C15.4911 70.6752 7.07743 68.0519 0 63.4988C1.28685 63.6472 2.52403 63.6967 3.86039 63.6967C11.3336 63.6967 18.2132 61.1727 23.7068 56.8669C16.6789 56.7183 10.7893 52.1156 8.76007 45.7805C9.75 45.9289 10.7398 46.0279 11.7792 46.0279C13.2144 46.0279 14.6498 45.8299 15.986 45.4836C8.6612 43.9987 3.16738 37.5648 3.16738 29.7945V29.5966C5.29547 30.7844 7.77029 31.5268 10.3932 31.6256C6.08735 28.755 3.2664 23.8553 3.2664 18.3122C3.2664 15.3427 4.05813 12.6206 5.444 10.245C13.3133 19.9454 25.142 26.2804 38.4059 26.9734C38.1585 25.7855 38.0099 24.5484 38.0099 23.311C38.0099 14.5013 45.1369 7.32498 53.996 7.32498C58.5987 7.32498 62.756 9.25518 65.6761 12.3732C69.289 11.6803 72.7534 10.344 75.8221 8.51281C74.6341 12.2248 72.1101 15.3428 68.7942 17.3224C72.0112 16.9761 75.1292 16.0851 77.9997 14.8479C75.8224 18.0152 73.1002 20.8362 69.9821 23.113Z' />
					</svg>

					<h2 className='theme-blue-fill text-2xl flex sm:hidden xl:flex font-semibold ml-3'>
						Tweetify
					</h2>
				</div>
				<div className='flex flex-col w-full h-full overflow-y-auto'>
					<ul className='sm:mx-2 flex fixed bottom-0 left-0 w-[100vw] justify-around bg-white sm:flex-col sm:static sm:w-auto items-center xl:items-start h-[7dvh] sm:h-auto border-t-2 border-gray-200 sm:border-0'>
						<Link href={'/home'} className='w-full'>
							<li className='flex items-center mt-1 justify-center xl:justify-start hover:bg-gray-100 p-3 rounded-full   '>
								<svg
									width='30'
									height='25'
									viewBox='0 0 74 66'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_2_17)'>
										<path
											d='M73.9743 32.9355C73.9743 35.2559 72.0472 37.0734 69.8632 37.0734H65.7521L65.842 57.7242C65.842 58.0723 65.8163 58.4203 65.7778 58.7684V60.8438C65.7778 63.6926 63.4781 66 60.6389 66H58.5833C58.442 66 58.3007 66 58.1594 65.9871C57.9795 66 57.7997 66 57.6198 66H53.4444H50.3611C47.5219 66 45.2222 63.6926 45.2222 60.8438V57.75V49.5C45.2222 47.2184 43.3851 45.375 41.1111 45.375H32.8889C30.6149 45.375 28.7778 47.2184 28.7778 49.5V57.75V60.8438C28.7778 63.6926 26.4781 66 23.6389 66H20.5556H16.4573C16.2646 66 16.0719 65.9871 15.8792 65.9742C15.725 65.9871 15.5708 66 15.4167 66H13.3611C10.5219 66 8.22222 63.6926 8.22222 60.8438V46.4062C8.22222 46.2902 8.22222 46.1613 8.23507 46.0453V37.0734H4.11111C1.79861 37.0734 0 35.2687 0 32.9355C0 31.7754 0.385417 30.7441 1.28472 29.8418L34.225 1.03125C35.1243 0.128906 36.1521 0 37.0514 0C37.9507 0 38.9785 0.257812 39.7493 0.902344L72.5611 29.8418C73.5889 30.7441 74.1028 31.7754 73.9743 32.9355Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_2_17'>
											<rect width='74' height='66' fill='white' />
										</clipPath>
									</defs>
								</svg>
								<h2 className='theme-blue-fill text-xl hidden xl:flex font-semibold ml-4'>
									Home
								</h2>
							</li>
						</Link>
						<Link href={'/search'} className='w-full'>
							<li className='flex items-center mt-1 justify-center xl:justify-start hover:bg-gray-100 p-3 rounded-full  '>
								<svg
									width='25'
									height='25'
									viewBox='0 0 62 62'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_3_19)'>
										<path
											d='M50.375 25.1875C50.375 30.7457 48.5707 35.8801 45.5312 40.0457L60.8617 55.3883C62.3754 56.902 62.3754 59.3602 60.8617 60.8738C59.348 62.3875 56.8898 62.3875 55.3762 60.8738L40.0457 45.5312C35.8801 48.5828 30.7457 50.375 25.1875 50.375C11.2738 50.375 0 39.1012 0 25.1875C0 11.2738 11.2738 0 25.1875 0C39.1012 0 50.375 11.2738 50.375 25.1875ZM25.1875 42.625C27.4774 42.625 29.7449 42.174 31.8605 41.2976C33.9762 40.4213 35.8984 39.1369 37.5177 37.5177C39.1369 35.8985 40.4213 33.9762 41.2976 31.8605C42.174 29.7449 42.625 27.4774 42.625 25.1875C42.625 22.8976 42.174 20.6301 41.2976 18.5145C40.4213 16.3988 39.1369 14.4765 37.5177 12.8573C35.8984 11.2381 33.9762 9.95367 31.8605 9.07735C29.7449 8.20103 27.4774 7.75 25.1875 7.75C22.8976 7.75 20.6301 8.20103 18.5145 9.07735C16.3988 9.95367 14.4765 11.2381 12.8573 12.8573C11.2381 14.4765 9.95367 16.3988 9.07735 18.5145C8.20103 20.6301 7.75 22.8976 7.75 25.1875C7.75 27.4774 8.20103 29.7449 9.07735 31.8605C9.95367 33.9762 11.2381 35.8985 12.8573 37.5177C14.4765 39.1369 16.3988 40.4213 18.5145 41.2976C20.6301 42.174 22.8976 42.625 25.1875 42.625Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_3_19'>
											<rect width='62' height='62' fill='white' />
										</clipPath>
									</defs>
								</svg>

								<h2 className='theme-blue-fill text-xl hidden xl:flex font-semibold ml-4'>
									Explore
								</h2>
							</li>
						</Link>
						<Link href={'/notifications'} className='w-full'>
							<li className='flex items-center mt-1 justify-center xl:justify-start hover:bg-gray-100 p-3 rounded-full '>
								<div className='relative'>
									<svg
										width='25'
										height='25'
										viewBox='0 0 62 68'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='z-0'
									>
										<g clip-path='url(#clip0_3_21)'>
											<path
												d='M31 0C28.5505 0 26.5715 1.89922 26.5715 4.25V6.8C16.4688 8.76562 8.85718 17.3453 8.85718 27.625V30.1219C8.85718 36.3641 6.46298 42.3937 2.14513 47.0687L1.12102 48.1711C-0.0414813 49.4195 -0.318267 51.2125 0.387536 52.7398C1.09334 54.2672 2.68486 55.25 4.42861 55.25H57.5715C59.3152 55.25 60.8929 54.2672 61.6125 52.7398C62.3322 51.2125 62.0416 49.4195 60.8791 48.1711L59.855 47.0687C55.5371 42.3937 53.1429 36.3773 53.1429 30.1219V27.625C53.1429 17.3453 45.5313 8.76562 35.4286 6.8V4.25C35.4286 1.89922 33.4496 0 31 0ZM37.2692 65.5164C38.93 63.9227 39.8572 61.7578 39.8572 59.5H31H22.1429C22.1429 61.7578 23.0701 63.9227 24.7308 65.5164C26.3916 67.1102 28.6474 68 31 68C33.3527 68 35.6085 67.1102 37.2692 65.5164Z'
												fill='black'
											/>
										</g>
										<defs>
											<clipPath id='clip0_3_21'>
												<rect width='62' height='68' fill='white' />
											</clipPath>
										</defs>
									</svg>
									{NotificationsCount > 0 && (
										<div className='rounded-full h-5 w-5 absolute bg-red-500 top-0 -mt-1 left-4 text-white text-center text-sm'>
											{NotificationsCount}
										</div>
									)}
								</div>

								<h2 className='theme-blue-fill text-xl hidden xl:flex font-semibold ml-4'>
									Notifications
								</h2>
							</li>
						</Link>
						<Link href={'/inbox'} className='w-full'>
							<li className='flex items-center mt-1 justify-center xl:justify-start hover:bg-gray-100 p-3 rounded-full'>
								<div className='relative'>
									<svg
										width='25'
										height='25'
										viewBox='0 0 62 62'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M5.8125 7.75C2.60352 7.75 0 10.3535 0 13.5625C0 15.391 0.859766 17.1105 2.325 18.2125L28.675 37.975C30.0555 39.0043 31.9445 39.0043 33.325 37.975L59.675 18.2125C61.1402 17.1105 62 15.391 62 13.5625C62 10.3535 59.3965 7.75 56.1875 7.75H5.8125ZM0 21.3125V46.5C0 50.7746 3.47539 54.25 7.75 54.25H54.25C58.5246 54.25 62 50.7746 62 46.5V21.3125L35.65 41.075C32.8891 43.1457 29.1109 43.1457 26.35 41.075L0 21.3125Z'
											fill='black'
										/>
									</svg>
									{MessageCount > 0 && (
										<div className='rounded-full h-5 w-5 absolute bg-red-500 top-0 -mt-1 left-4 text-white text-center text-sm'>
											{MessageCount}
										</div>
									)}
								</div>

								<h2 className='theme-blue-fill text-xl hidden xl:flex font-semibold ml-4'>
									Messages
								</h2>
							</li>
						</Link>
					</ul>
					<ul className='flex flex-col items-center xl:items-start justify-center  mx-2'>
						<Link href={'/'} className='w-full'>
							<li className='flex items-center justify-center xl:justify-start mt-1 hover:bg-gray-100 p-3 rounded-full border-b-2 sm:border-none border-gray-200'>
								<svg
									width='25'
									height='25'
									viewBox='0 0 52 60'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g clip-path='url(#clip0_3_42)'>
										<path
											d='M18.4902 0.632812C19.3955 -0.222657 20.8 -0.210938 21.7054 0.644531C24.9089 3.67969 27.9152 6.94922 30.7241 10.4883C32.0009 8.80078 33.4518 6.96094 35.0187 5.46094C35.9357 4.59375 37.3518 4.59375 38.2687 5.47266C42.2848 9.33984 45.6857 14.4492 48.0768 19.3008C50.433 24.082 52 28.9688 52 32.4141C52 47.3672 40.4161 60 26 60C11.4214 60 0 47.3555 0 32.4023C0 27.9023 2.06607 22.4062 5.26964 16.9688C8.50804 11.4492 13.0813 5.69531 18.4902 0.632812ZM26.1973 48.75C29.1339 48.75 31.7339 47.9297 34.183 46.2891C39.0696 42.8438 40.3812 35.9531 37.4446 30.5391C36.9223 29.4844 35.5875 29.4141 34.833 30.3047L31.908 33.7383C31.142 34.6289 29.7607 34.6055 29.0411 33.6797C27.1259 31.2188 23.7018 26.8242 21.7518 24.3281C21.0205 23.3906 19.6277 23.3789 18.8848 24.3164C14.9616 29.2969 12.9884 32.4375 12.9884 35.9648C13 43.9922 18.8732 48.75 26.1973 48.75Z'
											fill='black'
										/>
									</g>
									<defs>
										<clipPath id='clip0_3_42'>
											<rect width='52' height='60' fill='white' />
										</clipPath>
									</defs>
								</svg>

								<h2 className='theme-blue-fill text-xl flex sm:hidden xl:flex font-semibold ml-4'>
									Trending
								</h2>
							</li>
						</Link>
					</ul>
					<button className='theme-bg-blue text-white rounded-full px-4 py-2 mt-4 mx-2 xl:mx-auto font-semibold xl:flex items-center justify-center aspect-square xl:aspect-auto xl:w-[85%] sm:static fixed bottom-20 right-2 opacity-60 sm:opacity-100 hover:opacity-100 active:opacity-100 '>
						<svg
							width='37'
							height='37'
							viewBox='0 0 57 56'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M7.78409 10.9659V18.75H10.9659V10.9659H18.75V7.78409H10.9659V0H7.78409V7.78409H0V10.9659H7.78409ZM7.33594 51.8359L33.2852 25.8969H33.275C33.6711 25.2672 33.6 24.4344 33.0516 23.8859C32.4219 23.2563 31.3859 23.2563 30.7563 23.8859L14.0492 40.5828C13.4602 41.1719 12.4547 40.9992 12.2414 40.1969C10.7586 34.7023 10.8195 25.5008 18.9547 17.3656C28.207 8.11328 44.7617 4.71094 53.2727 4.02031C54.2781 3.93906 55.2633 4.325 55.9742 5.03594C56.6852 5.74687 57.0711 6.73203 56.9898 7.7375C56.5734 12.7445 55.2227 20.5547 52.2672 28.0094C52.0844 28.4664 51.6984 28.8117 51.2313 28.9539L43.0148 31.4219C42.6289 31.5437 42.3547 31.8992 42.3547 32.3156C42.3547 32.8336 42.7711 33.25 43.2891 33.25H47.2094C48.4281 33.25 49.2102 34.5398 48.5805 35.5859C48.1742 36.2664 47.7477 36.9266 47.3008 37.5766C47.0977 37.8813 46.793 38.0945 46.4477 38.1961L36.525 41.1719C36.1391 41.2938 35.8648 41.6492 35.8648 42.0656C35.8648 42.5836 36.2812 43 36.7992 43H38.4344C39.9172 43 40.5672 44.757 39.3281 45.5797C32.4219 50.1602 25.343 49.9875 20.793 48.7484C19.9297 48.5148 19.1273 48.1492 18.3758 47.682L10.7789 55.2789C9.83438 56.2336 8.29062 56.2234 7.33594 55.2789C6.38125 54.3344 6.38125 52.7906 7.33594 51.8359Z'
								fill='white'
							/>
						</svg>
						<div className='hidden xl:flex ml-2 text-xl'>Tweet</div>
					</button>
					<Link
						href={`/user/${userData?.username}`}
						className='flex justify-center items-center  hover:bg-gray-100 border-1 py-3 px-5 rounded-full mx-2 aspect-auto sm:aspect-square xl:aspect-auto mt-auto'
					>
						<img
							src={
								userData == null
									? '/user-solid.svg'
									: userData.profilePictureLink
							}
							alt={`${userData?.username}'s profile picture`}
							className='rounded-full w-12 h-auto aspect-square'
							onClick={handlehamburgertoggel}
						></img>

						<div className='ml-3 flex sm:hidden xl:flex flex-col '>
							<p className=' font-bold text-[12px]'>
								{userData?.firstName} {userData?.lastName}
							</p>
							<p className='text-[12px]'>@{userData?.username}</p>
						</div>
					</Link>
					{/* Log Out Button */}
					<LogoutBtn className='mb-16 sm:mb-2' />
				</div>
				<button
					className='absolute top-[50%] -right-6 rounded-full flex sm:hidden bg-white p-3 aspect-square'
					onClick={handlehamburgertoggel}
				>
					<svg
						width='44'
						height='38'
						viewBox='0 0 44 38'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.8078 20.917C10.7336 19.8567 10.7336 18.1348 11.8078 17.0746L25.5578 3.50313C26.632 2.44286 28.3765 2.44286 29.4508 3.50313C30.525 4.5634 30.525 6.28528 29.4508 7.34554L17.643 19L29.4422 30.6545C30.5164 31.7147 30.5164 33.4366 29.4422 34.4969C28.368 35.5571 26.6234 35.5572 25.5492 34.4969L11.7992 20.9255L11.8078 20.917Z'
							fill='black'
						/>
					</svg>
				</button>
			</div>
			<div className='flex sm:hidden py-3 px-4 items-center'>
				<img
					src={
						userData == null ? '/user-solid.svg' : userData.profilePictureLink
					}
					alt={`${userData?.username}'s profile picture`}
					className='rounded-full w-10 h-auto aspect-square'
					onClick={handlehamburgertoggel}
				></img>
				<h3 className='ml-3 font-medium'>
					{userData?.username && route.startsWith('/user')
						? route.toLowerCase().endsWith(userData?.username)
							? 'Profile'
							: route.replace('/user/', '@')
						: route.substring(1)[0].toUpperCase() + route.substring(2)}
				</h3>
			</div>
		</nav>
	);
}
