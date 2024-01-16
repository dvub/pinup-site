// TODO: clean up all of this code
'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { addToCart } from '@/app/products/[handle]/action';
import { localStorageKeywords } from '@/lib/constants';
export default function CartButton(props: {
	product: { variantId: string; available: boolean };
}) {
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const addItemToCart = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		await addToCart(
			localStorage.getItem(localStorageKeywords.checkoutId)!,
			1,
			props.product.variantId
		);
		setIsLoading(false);
		setButtonDisabled(true);
	};

	if (props.product.available === false) {
		return (
			<Button disabled aria-label='not available'>
				not available
			</Button>
		);
	}

	if (isLoading) {
		return (
			<Button disabled aria-label='adding to cart'>
				<ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
				adding to cart...
			</Button>
		);
	}

	return (
		<Button
			onClick={async (e) => {
				await addItemToCart(e);
			}}
			disabled={buttonDisabled}
			aria-label='add to cart'
		>
			{!buttonDisabled ? 'add to cart' : 'added!'}
		</Button>
	);
}
