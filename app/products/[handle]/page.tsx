import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import Client, { Product } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import axios from 'axios';
import useSWR from 'swr';
import { Loading } from '@/components/Loading';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { generateClient } from '@/lib/shopify';
import ProductInfo from '@/components/Product/ProductInfo';
import ProductDisplay from '@/components/Product/ProductDisplay';

export default async function Page({ params }: { params: { handle: string } }) {
	const client: Client = generateClient();
	const product = await client.product.fetchByHandle(params.handle);

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
