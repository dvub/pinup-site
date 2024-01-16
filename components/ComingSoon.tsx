import Link from 'next/link';

export default function ComingSoon(props: { pageName: string }) {
	return (
		<div className=' flex justify-center items-center w-screen h-screen'>
			<div>
				<h1 className='text-2xl text-right'>{props.pageName}</h1>
				<h1 className='text-4xl'>pinup</h1>
				<p className='py-1'>coming soon...</p>
				<div className='flex w-full justify-center my-5 '>
					<Link
						href={'/'}
						className='bg-black text-white px-2 py-1'
						aria-label='back to home'
					>
						← home
					</Link>
				</div>
			</div>
		</div>
	);
}
