import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Image as ShopifyImage } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export const Section = (props: {
	title: string;
	wide: boolean;
	images: ShopifyImage[];
	error: any;
}) => {
	const { width, breakpoints } = useWidth();
	const { images, error, title, wide } = props;

	const ErrorBackground = () => {
		return (
			<div>
				<div className='w-full h-[50rem] bg-gray-200'></div>
			</div>
		);
	};

	const Background = () => {
		return (
			<div className='flex'>
				<div
					className={`${
						width > breakpoints.medium ? 'w-[50%]' : 'w-full'
					} relative h-[50em]`}
				>
					<Image
						src={images![0].url}
						alt='...'
						quality={100}
						fill
						className='object-cover'
					/>
				</div>
				{wide && width > breakpoints.medium && (
					<div className='relative w-[50%] h-[50rem]'>
						<Image
							src={images![1].url}
							alt='...'
							quality={100}
							priority
							fill
							className='object-cover'
						/>
					</div>
				)}
			</div>
		);
	};

	const Overlay = () => {
		return (
			<>
				{/* OVERLAY DIV */}
				{error && (
					<ExclamationTriangleIcon className='w-5 h-5 absolute m-5 text-red-500' />
				)}
				<div className='z-50 absolute h-full w-full flex justify-center items-center'>
					<h1 className={`text-2xl text-center`}>
						{title} <br /> shop now
					</h1>
				</div>
			</>
		);
	};
	return (
		<Link href='/production' className='w-full relative'>
			<div>
				{<Overlay />}
				{
					/* may be a redunant condition */ !error && images && (
						<Background />
					)
				}
				{error && <ErrorBackground />}
			</div>
			{/* <ItemPanel type={'production'} /> */}
		</Link>
	);
};
