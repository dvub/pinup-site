'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';
import { cormorantGaramond, roboto } from '@/lib/fontLoader';

import Link from 'next/link';

import fennvilleFront from '../public/home/fennville-front.jpg';
import multipleShirts from '../public/home/multiple-shirts.jpg';
import ItemPanel from '@/components/footer/home/ItemPanel';
import Client, { Media, Product } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';
export default function Home() {
	const { width, breakpoints } = useWidth();
	const { data, error, isLoading } = useProducts();

	let d: Product[] = data;
	let image: Media[];
	d.map((p) => {
		if (p.productType === 'display') {
			image = p.media;
		}
	});

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
					<div
						className={`${
							width > breakpoints.medium ? 'w-[50%]' : 'w-full'
						} relative h-[50em]`}
					>
						<Image
							src={fennvilleFront}
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
				</Link>
			</div>
			<ItemPanel type={'production'} />
			<Footer />
		</main>
	);
}
