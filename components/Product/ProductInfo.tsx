'use client';
import * as React from 'react';

export default function ProductInfo(props: {
	product: {
		title: string;
		price: number;
		cc: string;
		description: string;
		availableForSale: boolean;
	};
	url: string;
}) {
	React.useEffect(() => {
		if (!sessionStorage.getItem('checkoutURL')) {
			console.log(
				"Didn't find a checkout URL in session storage, adding it to storage now. "
			);
			sessionStorage.setItem('checkoutURL', props.url);
		} else {
			console.log('Found a checkout URL already in storage.');
		}
		console.log(sessionStorage.getItem('checkoutURL'));
	}, []);

	const addToCart = () => {};

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
						<button
							className='bg-black text-white px-4 py-1 float-right my-10'
							onClick={() => {
								addToCart();
							}}
						>
							add to cart
						</button>
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
