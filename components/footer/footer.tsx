import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import Link from 'next/link';

export default function Footer() {
	const { width, breakpoints } = useWidth();
	return (
		<div
			className={`w-full m-5 text-md z-50 ${
				width > breakpoints.medium && 'flex gap-5'
			}`}
		>
			<div>
				<div>
					<div className='border-2 border-black flex w-min'>
						<p className='text-white bg-black px-3 py-1'>contact</p>
						<p className='px-3 py-1'>pinuprags@gmail.com</p>
					</div>
					<div className='border-2 border-black flex gap-3 my-3 w-min'>
						<p className='text-white bg-black px-3 py-1'>
							bugs/feedback
						</p>
						<p className='px-3 py-1 '>dvubdevs@gmail.com</p>
					</div>
				</div>
			</div>
			<div>
				<Link
					href='https://www.instagram.com/pinup.rags/'
					rel='noopener noreferrer'
					target='_blank'
				>
					<p className='bg-black text-white px-3 py-1 w-min'>
						instagram
					</p>
				</Link>
			</div>
		</div>
	);
}
