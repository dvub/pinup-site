'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';

import Link from 'next/link';
import { Shop, Image as ShopifyImage } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

// TODO: FIX IMAGE HEIGHTS

// font is broken on redirect
// footer is broken lol
const Loading = () => {
	// TODO: make random loading text
	const loadingText = 'threads otw';

	return (
		<div className='w-full h-[50rem] flex justify-center items-center'>
			{/* TODO: match height to the total page height when loaded.  */}
			<div>
				<h1 className='text-2xl text-right'>...loading</h1>
				<h1 className='text-4xl'>pinup rags</h1>
				<p className='py-1'>{loadingText}</p>
			</div>
		</div>
	);
};

const ShowcaseSection = (props: { images: ShopifyImage[]; error: any }) => {
	const { width, breakpoints } = useWidth();
	const { images, error } = props;

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
						src={images[0].url}
						alt='...'
						quality={100}
						priority
						fill
						className='object-cover'
					/>
				</div>
				{width > breakpoints.medium && (
					<div className='relative w-[50%] h-[50rem]'>
						<Image
							src={images[1].url}
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
						production <br /> shop now
					</h1>
				</div>
			</>
		);
	};
	return (
		<Link href='/production' className='w-full relative'>
			<div>
				<Overlay />
				{!error && <Background />}
				{error && <ErrorBackground />}
			</div>
			{/* <ItemPanel type={'production'} /> */}
		</Link>
	);
};

export default function Home() {
	const { data: products, error, isLoading } = useProducts();

	let [ShowcaseImages, setShowcaseImages] = React.useState<
		ShopifyImage[] | undefined
	>(undefined);

	React.useEffect(() => {
		if (isLoading || error) {
			return;
		}

		for (let product of products!) {
			if (product.tags.includes('display')) {
				setShowcaseImages(product.images);
			}
		}
	}, [isLoading, products, error]);

	return (
		<main>
			<Navbar />
			<div>
				{/* LOADING */}
				{!ShowcaseImages && !error && <Loading />}
				{/* if all goes well */}
				{ShowcaseImages && (
					<ShowcaseSection images={ShowcaseImages} error={error} />
				)}
			</div>

			{/* <Footer />*/}
		</main>
	);
}
