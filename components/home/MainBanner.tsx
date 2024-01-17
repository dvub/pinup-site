'use client';
import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import Image from 'next/image';
export default function MainBanner(props: { src: string; alt: string }) {
	const { width, breakpoints } = useWidth();
	return (
		<div
			className={clsx(
				'w-full relative',
				width >= breakpoints.medium ? ' h-[125vh]' : 'h-screen'
			)}
		>
			<div className='w-full h-full absolute z-30 flex items-center'>
				<h1
					className={clsx(
						'text-center text-3xl',
						width >= breakpoints.medium ? 'w-[33%]' : 'w-full'
					)}
				>
					vintage <br /> shop now
				</h1>
			</div>
			<Image
				src={props.src}
				alt={props.alt}
				layout='fill'
				objectFit='cover'
				priority
				quality={100}
				// objectPosition='100% 50%'
				sizes='100vw'
			/>
		</div>
	);
}
