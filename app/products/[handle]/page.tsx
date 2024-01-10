import Navbar from '@/components/navbar/navbar';
import Client from 'shopify-buy';
import clsx from 'clsx';
import React from 'react';
import { generateClient } from '@/lib/shopify';
import ProductInfo from '@/components/Product/ProductInfo';
import ProductDisplay from '@/components/Product/ProductDisplay';

export default async function Page({ params }: { params: { handle: string } }) {
	const client: Client = generateClient();
	const product = await client.product.fetchByHandle(params.handle);

	if (!product) {
		return <h1>No such product :(</h1>;
	}

	const info = {
		title: product.title,
		price: product.variants[0].price.amount,
		cc: product.variants[0].price.currencyCode,
		availableForSale: product.availableForSale,
		description: product.description,
	};
	const images = product.images.map((i) => {
		return {
			src: i.src, // BE CAREFUL ABOUT THIS
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
