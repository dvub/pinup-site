import Navbar from '@/components/navbar/navbar';
import Client from 'shopify-buy';
import clsx from 'clsx';
import React from 'react';
import { generateClient, getProduct } from '@/lib/shopify';
import ProductInfo from '@/components/Product/ProductInfo';
import ProductDisplay from '@/components/Product/ProductDisplay';
import { getImageObject } from '@/lib/utils';
import NoProduct from '@/components/Product/NoProductFound';

export const dynamic = 'force-dynamic';
export default async function Page({ params }: { params: { handle: string } }) {
	const product = await getProduct(params.handle);

	if (!product) {
		return <NoProduct />;
	}

	return (
		<div>
			<Navbar />
			<div className={clsx('mx-[10vw] my-10 gap-5', 'lg:flex')}>
				<div className={clsx('left ', 'lg:w-50% md:w-full')}>
					<ProductDisplay images={product.images} />
				</div>
				<div className={clsx('right', 'lg:w-50% md:w-full')}>
					<ProductInfo product={product.productInfo} />
				</div>
			</div>
		</div>
	);
}
