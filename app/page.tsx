'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';
import { cormorantGaramond } from '@/lib/fontLoader';

import useWidth from '@/components/hooks/useWidth';
import Link from 'next/link';

import fennvilleFront from '../public/home/fennville-front.jpg';
import multipleShirts from '../public/home/multiple-shirts.jpg';
import bags from '../public/home/bags.jpg';

export default function Home() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
			<div className='h-full w-full overflow-hidden'>
				<Link href='/' className={'flex relative'}>
					<h1
						className={`${cormorantGaramond.className} text-2xl flex absolute top-10 left-10 bg-white p-2 z-30`}
					>
						production.
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
				<div
					className={`${cormorantGaramond.className} flex gap-5 justify-center m-3`}
				>
					<Link href='/'>
						<Image src={bags} alt='...' quality={100} />

						<p>Item 1</p>
						<p>$00.00</p>
					</Link>
					<div>
						<Image src={bags} alt='...' quality={100} />
						<p>Item 2</p>
						<p>$00.00</p>
					</div>
					<div>
						<Image src={bags} alt='...' quality={100} />
						<p>Item 3</p>
						<p>$00.00</p>
					</div>
					<div>
						<Image src={bags} alt='...' quality={100} />
						<p>Item 4</p>
						<p>$00.00</p>
					</div>
				</div>
			</div>
			<div className='h-36'></div>
			<Footer />
		</main>
	);
}
