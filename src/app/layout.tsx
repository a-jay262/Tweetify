'use client';
import './globals.css';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	let path = usePathname();
	if (path === '/login' || path === '/signup' || path === '/') {
		return (
			<html lang='en'>
				<body>{children}</body>
			</html>
		);
	}

	return (
		<html lang='en'>
			<body className='flex justify-center'>
				<main className=' flex flex-col sm:flex-row w-[1200px] justify-center'>
					<NavBar />
					<div className='w-[100vw] sm:w-[450px] md:w-[600px] xl:w-[700px] border-r-2 border-l-2 border-gray-200 flex flex-col '>
						{children}
					</div>
					<div className='hidden xd:flex xd:flex-col xd:w-[300px] xl:w-[350px] px-2'>
						<SearchBar resultCount={3} />
					</div>
				</main>
			</body>
		</html>
	);
}
