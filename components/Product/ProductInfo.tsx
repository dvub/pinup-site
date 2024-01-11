'use client';
import { addToCart, getCheckoutUrl } from '@/actions/checkout';
import * as React from 'react';
import CartButton from './CartButton';

export default function ProductInfo(props: {
	product: {
		title: string;
		price: number;
		cc: string;
		description: string;
		availableForSale: boolean;
		variantId: string;
	};
}) {
	// server actions are the fucking SHIT
	// they are really cool
	React.useEffect(() => {
		const checkoutUrl = localStorage.getItem('checkoutUrl');
		const updateCheckoutUrl = async () => {
			if (!checkoutUrl) {
				const newUrl = await getCheckoutUrl();
				localStorage.setItem('checkoutUrl', newUrl.url);
				localStorage.setItem('checkoutId', newUrl.id);
			} else console.log('already have a URL..', checkoutUrl);
		};
		updateCheckoutUrl();
	}, []);

	return (
		<div>
			<h1 className='text-3xl'>{props.product.title}</h1>
			<h1 className='text-2xl'>
				${props.product.price} ({props.product.cc})
			</h1>

			<h1 className='mt-10 text-2xl'>Details</h1>
			<p className='mr-[20%]'>{props.product.description}</p>
			<div className='flex justify-between items-center'>
				<div>
					<p>1/1</p>
				</div>
				<div>
					{props.product.availableForSale && (
						<CartButton
							product={{ variantId: props.product.variantId }}
						/>
					)}
					{!props.product.availableForSale && (
						<div className='bg-gray-500 text-white px-4 py-1 float-right my-10'>
							<p>not available</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
