'use client';
import './globals.css';

import { usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	let path = usePathname();

	return (
		<html lang='en'>
			<body className='flex justify-center'>{children}</body>
		</html>
	);
}
