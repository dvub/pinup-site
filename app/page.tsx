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
import ItemPanel from '@/components/home/ItemPanel';
import Client from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';
export default function Home() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
			<div className='w-full'>
				<Link href='/' className={'flex relative'}>
					<h1
						className={`text-2xl flex absolute top-10 left-10 bg-white p-2 z-30`}
					>
						production
					</h1>
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
			<div className='h-36'></div>
			<Footer />
		</main>
	);
}
