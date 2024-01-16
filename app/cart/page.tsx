'use client';
import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { getCheckout, navigate } from './action';
import { createCheckout } from '@/actions/checkout';
import { localStorageKeywords } from '@/lib/constants';

export const dynamic = 'force-dynamic';
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

	const createNewCheckout = async () => {
		const newCheckout = await createCheckout();
		localStorage.setItem(localStorageKeywords.checkoutUrl, newCheckout.url);
		localStorage.setItem(localStorageKeywords.checkoutId, newCheckout.id);
		return newCheckout;
	};

	const updateCheckoutDetails = async () => {
		const url = localStorage.getItem(localStorageKeywords.checkoutUrl);
		if (!url) {
			const newCheckout = await createNewCheckout();
			setCheckoutUrl(newCheckout.url);
		} else {
			setCheckoutUrl(url);
		}

		const serverCheckout = await getCheckout(
			localStorage.getItem(localStorageKeywords.checkoutId)!
		);

		setCheckout(serverCheckout);
	};

	React.useEffect(() => {
		updateCheckoutDetails();
	}, []);

	const handleClick = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		// TODO: fix these 2 lines LMAO
		localStorage.clear();
		await navigate(checkoutUrl);
	};

	// some shittily thrown together code here
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
