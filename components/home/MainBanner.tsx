import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
export default function MainBanner(props: { src: string; alt: string }) {
	return (
		<div className='relative w-screen h-screen'>
			<Link href='/vintage' className=''>
				<div className='w-full h-full absolute z-30 flex items-center justify-center text-md'>
					<div>
						<h1 className=' bg-black text-white text-center px-4 py-1 my-2'>
							vintage
						</h1>
						<h1 className=' bg-black text-white text-center px-4 py-1'>
							shop now
						</h1>
					</div>
				</div>

				<div className='relative w-full h-full'>
					<Image
						src={props.src}
						alt={props.alt}
						className='object-cover object-right'
						//objectPosition='right'
						sizes='100vw'
						quality={100}
						fill
						priority
					/>
				</div>
			</Link>
		</div>
	);
}
