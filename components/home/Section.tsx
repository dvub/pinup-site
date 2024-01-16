'use client';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Image as ShopifyImage } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import { Product } from 'shopify-buy';
import { ImageObject } from '@/lib/types';

// TODO: clean this code up
export const Section = (props: {
	title: string;
	wide: boolean;
	images: ImageObject[] | undefined;
	error: boolean;
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
		return <div className='NO-IMAGE-BG w-full h-full bg-gray-400'></div>;
	};

	//
	// BACKGROUND WITH IMAGES
	//
	const Background = () => {
		const isFullSize = width > breakpoints.medium && wide;
		//
		return (
			<div className='BACKGROUND flex w-full h-full'>
				<div
					className={clsx(
						'relative',
						isFullSize ? 'w-[50%]' : 'w-full'
						// !images && 'bg-gray-500'
					)}
				>
					{images && (
						<Image
							src={images[0].src}
							alt={images[0].alt}
							quality={100}
							fill
							className='object-cover'
						/>
					)}
				</div>
				{isFullSize && (
					<div className='relative w-[50%] '>
						{images && (
							<Image
								src={images[1].src}
								alt={images[1].alt}
								quality={100}
								priority
								fill
								className='object-cover'
							/>
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
			<div className='OVERLAY z-10 absolute w-full h-full'>
				{/* if something goes really wrong, red exclamation */}
				{error && <p>error!</p>}
				{/* if something kind of goes wrong, specifically not getting images, just a yellow exclamation }
				{!images && (
					<ExclamationTriangleIcon className='w-5 h-5 absolute m-5 text-yellow-500' />
				)} */}
				{/* we want to maintain functionality so render the text regardless of any issues */}
				<div className='w-full h-full flex justify-center items-center'>
					<div>
						<h1 className=' text-2xl text-center text-white my-2 p-1'>
							{title} <br /> shop now
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
			<div className='w-full h-full absolute '>
				<Overlay />
			</div>
			{images && images.length > 0 && <Background />}
			{(error || !images || images.length === 0) && <ErrorBackground />}
		</Link>
	);
};
