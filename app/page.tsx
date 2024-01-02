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

// TODO: FIX IMAGE HEIGHTS

// font is broken on redirect
// footer is broken lol

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
		console.log(products);
		products!.map((product: any) => {
			if (product.tags[0].value === 'display') {
				setDisplayImages(product.images);
			}
		});
	}, [isLoading, products]);

	const ImageEl = () => {
		console.log(displayImages);
		return (
			<div className='flex'>
				<div
					className={`${
						width > breakpoints.medium ? 'w-[50%]' : 'w-full'
					} relative h-[50em]`}
				>
					<Image
						src={displayImages![0].url}
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
							src={displayImages![1].url}
							alt='...'
							quality={100}
							priority
							fill
							className='object-cover'
						/>
					</div>
				)}{' '}
			</div>
		);
	};

	return (
		<main>
			<Navbar />
			{/* important section */}
			<div>
				<Link href='/production' className='w-full relative'>
					{displayImages && (
						<div>
							{/* OVERLAY DIV */}
							<div className='z-50 absolute h-full w-full flex  justify-center items-center'>
								<h1 className={`text-2xl w-full text-center`}>
									production <br /> shop now
								</h1>
							</div>

							<ImageEl />
						</div>
					)}
					{!displayImages && (
						<div className='w-full h-[50rem] flex justify-center items-center'>
							{/* TODO: match height to the total page height when loaded.  */}
							<div>
								<h1 className='text-2xl'>loading...</h1>
								<h1 className='text-4xl'>pinup rags</h1>
								<p>rags will be there soon</p>
							</div>
						</div>
					)}
				</Link>
			</div>
			{/*	<ItemPanel type={'production'} /> 
			<Footer />*/}
		</main>
	);
}
