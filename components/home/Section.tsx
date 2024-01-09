import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Image as ShopifyImage } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

// TODO: make sure 2 images exist at all
export const Section = (props: {
	title: string;
	wide: boolean;
	images: ShopifyImage[] | undefined;
	error: any;
	href: string;
}) => {
	const { width, breakpoints } = useWidth();
	const { images, error, title, wide, href } = props;

	if (error) {
		console.log(error);
	}

	// if there's an error, just render a gray background
	// TODO: fallback/default images
	const ErrorBackground = () => {
		return (
			<div>
				<div className='w-full h-full bg-gray-200'></div>
			</div>
		);
	};

	//
	// BACKGROUND WITH IMAGES
	//
	const Background = () => {
		const defaultAltText = 'alt text';
		const isFullSize = width > breakpoints.medium && wide;

		//
		return (
			<div className='flex w-full h-full'>
				<div
					className={clsx(
						'relative',
						isFullSize ? 'w-[50%]' : 'w-full',
						!images && 'bg-gray-500'
					)}
				>
					{images && (
						<Image
							src={images[0].url}
							alt={images[0].altText || defaultAltText}
							quality={100}
							fill
							className='object-cover'
						/>
					)}
				</div>
				{isFullSize && (
					<div className='relative w-[50%]'>
						{images && (
							<Image
								src={images[1].url}
								alt={images[1].altText || defaultAltText}
								quality={100}
								priority
								fill
								className='object-cover'
							/>
						)}
						{!images && (
							<div className='bg-gray-500 w-full h-full'></div>
						)}
					</div>
				)}
			</div>
		);
	};

	//
	// OVERLAY DIV
	// text, symbols, descriptions, etc. will show up over the background images
	//
	const Overlay = () => {
		return (
			<div>
				{error && (
					<ExclamationTriangleIcon className='w-5 h-5 absolute m-5 text-red-500' />
				)}
				<div className=' z-10 absolute w-full h-full flex justify-center items-center'>
					<div>
						<h1 className=' text-2xl text-center text-white my-2 p-1'>
							{title}
						</h1>
						<h1 className='bg-white w-full text-center text-md text-black my-2 p-2'>
							shop now
						</h1>
					</div>
				</div>
			</div>
		);
	};
	return (
		<Link
			href={href}
			className='w-full
			h-full relative flex'
		>
			<div className='w-full h-full absolute'>
				<Overlay />
			</div>
			{images && <Background />}
			{error && <ErrorBackground />}
		</Link>
	);
};
