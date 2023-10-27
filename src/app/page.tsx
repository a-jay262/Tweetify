import Link from 'next/link';
export default function page() {
	return (
		<div className='flex flex-col md:flex-row items-center justify-center w-full h-full'>
			<Link className=' md:flex-1 ' href={'/'}>
				<img
					src={'/twitter.svg'}
					alt='logo'
					className=' min-h-[40px] min-w-[40px] h-auto w-auto md:m-32 mx-4 my-4'
				></img>
			</Link>
			<div className='flex-1 flex items-center justify-center my-32 md:my-0'>
				<div className='flex flex-col sm:border-1 sm:border-gray-400 sm:rounded-2xl sm:p-8 sm:shadow-xl'>
					<h1 className='text-4xl font-bold'>Happening now</h1>
					<h2 className='text-2xl font-bold'>Join Tweetify today.</h2>

					<div className='flex flex-col items-stretch justify-center mt-8'>
						<Link
							href={'/signup'}
							className=' bg-blue-500 text-white rounded-full px-4 py-2 m-2 w-auto flex items-center justify-center'
						>
							Create account
						</Link>
						<p className='first-letter:capitalize font-semibold mt-4'>
							Already Have a account?
						</p>
						<Link
							href={'/login'}
							className='bg-white text-blue-500 rounded-full px-4 py-2 m-2 border-blue-500 border-1 w-auto flex items-center justify-center'
						>
							Log in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
