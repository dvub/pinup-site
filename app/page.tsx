'use client';
import './globals.css';
import Navbar from '../components/navbar/navbar';
import * as React from 'react';

import Footer from '../components/footer/footer';
import Image from 'next/image';

import Link from 'next/link';
import { Image as ShopifyImage } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import useProducts from '@/hooks/useProducts';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { Section } from '@/components/home/Section';
import { Loading } from '@/components/home/Loading';

// TODO: FIX IMAGE HEIGHTS

// font is broken on redirect
// footer is broken lol

export default function Home() {
	const { data: products, error, isLoading } = useProducts();

	// state for the images
	let [images, setImages] = React.useState<{
		production: ShopifyImage[] | undefined;
		vintage: ShopifyImage[] | undefined;
		reworked: ShopifyImage[] | undefined;
	}>({
		production: undefined,
		vintage: undefined,
		reworked: undefined,
	});

	React.useEffect(() => {
		if (isLoading || error) {
			return;
		}

		for (const product of products || []) {
			if (product.tags && product.tags.includes('display')) {
				for (const tag of Object.keys(images)) {
					if (product.tags.includes(tag)) {
						setImages((prevState) => ({
							...prevState,
							[tag]: product.images,
						}));
					}
				}
			}
		}
		// 90% sure the dependency has to be missing or else it will break. double check that though.
	}, [isLoading, products, error]);

	return (
		<main>
			<Navbar />
			<div>
				{/* LOADING */}
				{!images.production && !error && <Loading />}

				{/* if all goes well */}

				{images.production && (
					<Section
						images={images.production}
						error={error}
						wide={true}
						title='production'
					/>
				)}
				<div className='flex'>
					{images.vintage && (
						<Section
							images={images.vintage}
							error={error}
							wide={false}
							title='vintage'
						/>
					)}

					{images.reworked && (
						<Section
							images={images.reworked}
							error={error}
							wide={false}
							title='reworked'
						/>
					)}
				</div>
			</div>

			{/* <Footer />*/}
		</main>
	);
}
