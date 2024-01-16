'use client';
import * as React from 'react';
import CartButton from './CartButton';
import { Button } from '../ui/button';
import { createCheckout } from '@/actions/checkout';
import { localStorageKeywords } from '@/lib/constants';

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
	// TODO: fix refactor shared with cart/page.tsx

	React.useEffect(() => {
		const checkoutUrl = localStorage.getItem(
			localStorageKeywords.checkoutUrl
		);
		const updateCheckoutUrl = async () => {
			if (!checkoutUrl) {
				const newUrl = await createCheckout();
				localStorage.setItem(
					localStorageKeywords.checkoutUrl,
					newUrl.url
				);
				localStorage.setItem(
					localStorageKeywords.checkoutId,
					newUrl.id
				);
			}
		};
		updateCheckoutUrl();
	}, []);

	return (
		<div>
			{/* title and cost */}
			<div className='mb-5'>
				<h1 className='text-3xl'>{props.product.title}</h1>
				<h1 className='text-2xl'>
					${props.product.price} ({props.product.cc})
				</h1>
			</div>
			{/* section for description */}
			<hr />
			<div className='my-5'>
				<h1 className='text-2xl'>Details</h1>
				<p className='mr-[20%]'>
					{props.product.description}
					{/*
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Eu ultrices vitae auctor eu augue ut. Sollicitudin
					aliquam ultrices sagittis orci a scelerisque purus. Tellus
					in metus vulputate eu. Nec ullamcorper sit amet risus nullam
					eget felis eget. Massa sapien faucibus et molestie ac
					feugiat sed. Posuere ac ut consequat semper viverra. Quis
					enim lobortis scelerisque fermentum dui faucibus. Id donec
					ultrices tincidunt arcu non. Nunc mi ipsum faucibus vitae
					aliquet nec ullamcorper sit amet. Aliquam etiam erat velit
					scelerisque in. Faucibus et molestie ac feugiat sed lectus.
					Et leo duis ut diam quam nulla. Non arcu risus quis varius
					quam quisque id diam vel. Arcu vitae elementum curabitur
					vitae nunc sed velit dignissim. Nisl pretium fusce id velit
					ut tortor pretium. Urna porttitor rhoncus dolor purus non.
					Nisi scelerisque eu ultrices vitae auctor. Est ultricies
					integer quis auctor elit sed vulputate mi sit. Sollicitudin
					ac orci phasellus egestas. Mauris augue neque gravida in.
					Mattis vulputate enim nulla aliquet. Sit amet nisl suscipit
					adipiscing bibendum. Facilisis magna etiam tempor orci eu
					lobortis elementum nibh tellus. Laoreet suspendisse interdum
					consectetur libero id faucibus.
					*/}
				</p>
			</div>
			<hr />
			{/* section for quantity (todo) and button to add to cart */}
			<div className='flex justify-between items-center my-5'>
				<div>
					<p>This item is 1/1.</p>
				</div>
				<div>
					{props.product.availableForSale && (
						<CartButton
							product={{
								variantId: props.product.variantId,
								available: props.product.availableForSale,
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
