'use client';
import './globals.css';
import Navbar from '../components/navbar';
import * as React from 'react';

import Footer from '../components/footer';

import useWidth from '@/components/hooks/useWidth';
import Link from 'next/link';
import { cormorantGaramond } from './layout';

import panelPic from '../../public/home/4panels.png';
import gridPic from '../../public/home/grid pic.png';
import frontPic from '../../public/home/square front.png';
import backPic from '../../public/home/square back.png';

import pic1 from '../public/pic1.jpg';
import pic2 from '../public/pic2.jpg';
import pic3 from '../public/pic3.jpg';

import Image from 'next/image';
export default function Home() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
			<div className='h-full w-full overflow-hidden'>
				<Link
					href='/'
					className={`${
						width > breakpoints.medium ? 'flex' : ''
					} relative w-full`}
				>
					<h1
						className={`${cormorantGaramond.className} text-2xl flex absolute top-10 left-10 bg-white p-2 z-30`}
					>
						production.
					</h1>
					<Image
						src={pic1}
						alt='...'
						quality={100}
						priority
						className={`${
							width > breakpoints.medium ? 'w-[50%]' : 'w-full'
						}`}
					/>
					<Image
						src={pic2}
						alt='...'
						quality={100}
						priority
						className={`${
							width > breakpoints.medium ? 'w-[50%]' : 'hidden'
						}`}
					/>
				</Link>
				<div
					className={`${cormorantGaramond.className} flex gap-5 justify-center m-3`}
				>
					<Link href='/'>
						<Image src={pic3} alt='...' quality={100} />

						<p>Item 1</p>
						<p>$00.00</p>
					</Link>
					<div>
						<Image src={pic3} alt='...' quality={100} />
						<p>Item 2</p>
						<p>$00.00</p>
					</div>
					<div>
						<Image src={pic3} alt='...' quality={100} />
						<p>Item 3</p>
						<p>$00.00</p>
					</div>
					<div>
						<Image src={pic3} alt='...' quality={100} />
						<p>Item 4</p>
						<p>$00.00</p>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
}
