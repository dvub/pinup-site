'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';
import { cormorantGaramond, roboto } from '@/lib/fontLoader';

import Link from 'next/link';
import { Image as ShopifyImage } from 'shopify-buy';
import fennvilleFront from '../public/home/fennville-front.jpg';
import multipleShirts from '../public/home/multiple-shirts.jpg';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';

export default function Home() {
	const { width, breakpoints } = useWidth();
	const { data: products, error, isLoading } = useProducts();

	let frontPageImages: ShopifyImage[] | undefined;
	React.useEffect(() => {
		if (!isLoading) {
			products!.forEach((x) => {
				if (
					x.tags &&
					x.tags.includes('display') &&
					x.tags.includes('production')
				) {
					frontPageImages = x.images;
					console.log('success');
				}
			});
		}
	}, [isLoading, products]);

	const ImageEl = () =>
		frontPageImages ? (
			<div>
				<div
					className={`${
						width > breakpoints.medium ? 'w-[50%]' : 'w-full'
					} relative h-[50em]`}
				>
					<Image
						src={multipleShirts}
						alt='...'
						quality={100}
						priority
						fill
						className='object-cover'
						placeholder='blur'
						blurDataURL='/pic1'
					/>
				</div>
				{width > breakpoints.medium && (
					<div className='relative w-[50%] h-[50rem]'>
						<Image
							src={multipleShirts}
							alt='...'
							quality={100}
							priority
							fill
							className='object-cover'
							placeholder='blur'
							blurDataURL='/pic1'
						/>
					</div>
				)}
			</div>
		) : (
			<p>loading...</p>
		);

	return (
		<main>
			<Navbar />
			{/* important section */}
			<div className='w-full'>
				<Link
					href='/production'
					className={'flex relative justify-center items-center'}
				>
					<h1
						className={`text-2xl flex absolute  p-2 z-30 text-center `}
					>
						production <br /> shop now
					</h1>
					{/* image display, checks the width to determine 1 or 2 images */}
					<ImageEl></ImageEl>
				</Link>
			</div>
			{/*	<ItemPanel type={'production'} /> */}
			<Footer />
		</main>
	);
}
