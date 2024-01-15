'use client';
import { getCheckoutUrl, getCheckout } from '@/actions/checkout';
import { navigate } from '@/actions/navigate';
import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { Checkout, CheckoutLineItem } from 'shopify-buy';
export default function Cart() {
	const [checkoutUrl, setCheckoutUrl] = React.useState('');
	const [checkout, setCheckout] = React.useState<{
		items: {
			title: string;
			quantity: number;
			price: number | undefined;
			cc: string | undefined;
			id: string;
		}[];
		subtotal: { amt: number; cc: string };
	}>();
	React.useEffect(() => {
		const updateCheckoutUrl = async () => {
			const url = localStorage.getItem('checkoutUrl');
			if (!url) {
				const newUrl = await getCheckoutUrl();
				localStorage.setItem('checkoutUrl', newUrl.url);
				localStorage.setItem('checkoutId', newUrl.id);
				setCheckoutUrl(localStorage.getItem('checkoutUrl')!);
			} else {
				console.log('already have a URL..');
				setCheckoutUrl(localStorage.getItem('checkoutUrl')!);
			}
			const serverCheckout = await getCheckout(
				localStorage.getItem('checkoutId')!
			);
			setCheckout(serverCheckout);
			console.log(serverCheckout);
		};

		updateCheckoutUrl();
	}, []);

	const handleClick = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		localStorage.clear();
		await navigate(checkoutUrl);
	};

	const items = checkout?.items.map((item) => {
		return (
			<div key={item.id} className='border-t-2 border-gray-200'>
				<div className='m-5'>
					<h1 className='text-3xl'>{item.title}</h1>
					<div className='flex justify-between my-2 text-xl'>
						<h1>qty. {item.quantity}</h1>

						<h1 className='text-right'>
							x {item.price} {item.cc}
						</h1>
					</div>
					{item.quantity > 1 && (
						<p className='text-sm'>
							Note: items are currently only 1/1. This item count
							will be reduced to 1 at checkout.
						</p>
					)}
				</div>
			</div>
		);
	});

	return (
		<div className='w-full'>
			<Navbar />
			<div className='mx-[10vw] my-10'>
				<h1 className='text-4xl'>Cart</h1>

				{/* HELP!! ! !!!!   */}

				{items && items.length > 0 && (
					<div>
						<div className='my-10'>{items}</div>
						<hr />
						<div className='text-right my-5'>
							<h1 className='text-xl'>
								Subtotal: {checkout?.subtotal.amt}{' '}
								{checkout?.subtotal.cc}
							</h1>
							<p className='text-sm my-2'>
								Taxes, shipping, and other costs will be applied
								at checkout.
							</p>
						</div>

						<div className='float-right'>
							<Button onClick={async (e) => await handleClick(e)}>
								Proceed to checkout
							</Button>
						</div>
					</div>
				)}
				{items && items.length === 0 && (
					<p className='text-2xl my-10'>Your cart is empty.</p>
				)}
			</div>
		</div>
	);
}
