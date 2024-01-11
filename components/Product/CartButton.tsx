'use client';
import { addToCart, getCheckoutUrl } from '@/actions/checkout';
import * as React from 'react';
export default function CartButton(props: { product: { variantId: string } }) {
	// button state
	const [buttonText, setButtonText] = React.useState('add to cart');
	const [buttonDisabled, setButtonDisabled] = React.useState(false);

	const addItemToCart = async (e: any) => {
		e.preventDefault();
		// provide a loading message here to improve UI
		setButtonText('adding...');
		await addToCart(
			localStorage.getItem('checkoutId')!,
			1,
			props.product.variantId
		);
		// disable the button to prevent spamming or something dumb, idfk
		setButtonDisabled(true);
		setButtonText('added to cart');
	};
	return (
		<button
			className='bg-black text-white px-4 py-1 float-right my-10'
			onClick={async (e) => {
				await addItemToCart(e);
			}}
			disabled={buttonDisabled}
		>
			{buttonText}
		</button>
	);
}
