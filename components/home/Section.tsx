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

	return (
		<Link
			href={href}
			className='w-full
			h-full relative flex'
			aria-label={`to ${title}`}
		>
			<div className='w-full h-full absolute '>
				<Overlay error={error} title={title} />
			</div>
			{images && images.length > 0 && (
				<Background
					width={width}
					breakpoints={breakpoints}
					wide={wide}
					images={images}
				/>
			)}
			{(error || !images || images.length === 0) && <ErrorBackground />}
		</Link>
	);
};

const ErrorBackground = () => {
	return <div className='NO-IMAGE-BG w-full h-full bg-gray-400' />;
};

const Background = (props: {
	width: any;
	breakpoints: any;
	images: ImageObject[];
	wide: boolean;
}) => {
	const { width, breakpoints, images, wide } = props;
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
					{images[1] && (
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

const Overlay = (props: { error: boolean; title: string }) => {
	const { error, title } = props;
	return (
		<div className='OVERLAY z-10 absolute w-full h-full'>
			{error && <p>error!</p>}

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
