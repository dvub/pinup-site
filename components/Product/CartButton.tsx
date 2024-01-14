'use client';
import { addToCart, getCheckoutUrl } from '@/actions/checkout';
import * as React from 'react';
import { Button } from "@/components/ui/button"
import { ReloadIcon } from "@radix-ui/react-icons"
export default function CartButton(props: { product: { variantId: string } }) {
	// button state
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

	const addItemToCart = async (e: any) => {
		e.preventDefault();
		// provide a loading message here to improve UI
    setIsLoading(true);
		await addToCart(
			localStorage.getItem('checkoutId')!,
			1,
			props.product.variantId
		);
    setIsLoading(false);
		// disable the button to prevent spamming or something dumb, idfk
		setButtonDisabled(true);
	};
  if (isLoading) {
    return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Adding to cart...
    </Button>
  )
  }

	return (
		<Button
      
			onClick={async (e) => {
				await addItemToCart(e);
			}}
			disabled={buttonDisabled}
		>
			{buttonText}
		</Button>
	);
}
