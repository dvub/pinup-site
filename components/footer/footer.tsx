'use client';
import useWidth from '@/hooks/useWidth';
import Link from 'next/link';

// simplicity is sometimes best
export default function Footer() {
	const { width, breakpoints } = useWidth();
	return (
		<div
			className={`bg-white text-sm w-full p-5 text-md z-50 relative border-t-[1px] border-t-gray-400 ${
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
			<div className=' text-xs absolute bottom-0 left-0 text-black/50'>
				<span>
					<Link href='https://www.dvub.net/'>
						<p>~made by dvub</p>
					</Link>
					<p>inquiries: dvubdevs@gmail.com</p>
				</span>
			</div>
		</div>
	);
}
