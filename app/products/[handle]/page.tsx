import Navbar from '@/components/navbar/navbar';
import Client from 'shopify-buy';
import clsx from 'clsx';
import React from 'react';
import { generateClient } from '@/lib/shopify';
import ProductInfo from '@/components/Product/ProductInfo';
import ProductDisplay from '@/components/Product/ProductDisplay';

export const dynamic = 'force-dynamic';
export default async function Page({ params }: { params: { handle: string } }) {
	const client: Client = generateClient();
	const product = await client.product.fetchByHandle(params.handle);

	if (!product) {
		return (
			<div className='flex w-screen h-screen overflow-hidden justify-center items-center text-center'>
				<div>
					<h1 className='text-2xl my-2'>Error: No such product :(</h1>
					<p>Try again with something different. </p>
				</div>
			</div>
		);
	}

	const info = {
		title: product.title,
		price: product.variants[0].price.amount,
		cc: product.variants[0].price.currencyCode,
		availableForSale: product.availableForSale,
		description: product.description,
		variantId: product.variants[0].id,
	};
	const images = product.images.map((i) => {
		return {
			src: i.src || i.url, // BE CAREFUL ABOUT THIS
			alt: i.altText,
		};
	});

	return (
		<div>
			<Navbar />
			<div className={clsx('mx-10 my-10 gap-5', 'lg:flex')}>
				<div
					className={clsx(
						'left flex justify-center ',
						'lg:w-50% md:w-full'
					)}
				>
					<ProductDisplay images={images} />
				</div>
				<div className={clsx('right', 'lg:w-50% md:w-full')}>
					<ProductInfo product={info} />
				</div>
			</div>
		</div>
	);
}
