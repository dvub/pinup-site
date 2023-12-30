'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';
import { cormorantGaramond, roboto } from '@/lib/fontLoader';

import Link from 'next/link';
import { Product, Image as ShopifyImage } from 'shopify-buy';
import fennvilleFront from '../public/home/fennville-front.jpg';
import multipleShirts from '../public/home/multiple-shirts.jpg';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';

export default function Home() {
	const { width, breakpoints } = useWidth();
	const { data: products, error, isLoading } = useProducts();

	let [displayImages, setDisplayImages] = React.useState<
		ShopifyImage[] | undefined
	>(undefined);
	React.useEffect(() => {
		if (isLoading) {
			return;
		}
		products!.map((product: Product) => {
			if (
				product.tags.includes('display') &&
				product.tags.includes('production')
			) {
				setDisplayImages(product.images);
			}
		});
	}, [isLoading, products]);

	const ImageEl = () => (
		<div>
			<div
				className={`${
					width > breakpoints.medium ? 'w-[50%]' : 'w-full'
				} h-[50em]`}
			>
				<Image
					src={multipleShirts}
					alt='...'
					quality={100}
					priority
					fill
					className='object-cover'
				/>
			</div>
			{width > breakpoints.medium && (
				<div className='w-[50%] h-[50rem]'>
					<Image
						src={displayImages![1].src}
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
	return (
		<main>
			<Navbar />

			{/* important section */}
			<div className='w-full'>
				<Link
					href='/production'
					className={'flex relative justify-center items-center'}
				>
					{displayImages && <ImageEl />}
					<h1
						className={`text-2xl flex absolute  p-2 z-30 text-center `}
					>
						production <br /> shop now
					</h1>
					{/* image display, checks the width to determine 1 or 2 images */}
				</Link>
			</div>
			{/*	<ItemPanel type={'production'} /> */}
			<Footer />
		</main>
	);
}
