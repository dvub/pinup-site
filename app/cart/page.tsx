'use client';
import Navbar from '@/components/navbar/navbar';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { getCheckout, navigate } from './action';
import { createCheckout } from '@/actions/checkout';
import { localStorageKeywords } from '@/lib/constants';
import { revalidatePath } from 'next/cache';
import ClearCheckoutButton from '@/components/cart/ClearButton';
import ProceedToCheckout from '@/components/cart/ProceedButton';
import formatCost from '@/lib/formatCost';
// TODO: fix
/*
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cart - Pinup',
	description: '...',
};*/

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

	// TODO: fix code smell (function does 2 things and is poorly named)
	const updateLocalStorage = async () => {
		const newCheckout = await createCheckout();
		localStorage.setItem(localStorageKeywords.checkoutUrl, newCheckout.url);
		localStorage.setItem(localStorageKeywords.checkoutId, newCheckout.id);
		return newCheckout;
	};

	const updateCheckoutDetails = async () => {
		const url = localStorage.getItem(localStorageKeywords.checkoutUrl);
		if (!url) {
			const newCheckout = await updateLocalStorage();
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

	const EmptyCart = () => {
		return (
			<div>
				<p className='text-2xl mt-10'>Your cart is empty.</p>
				<p className='text-lg my-2'>
					Check out our vintage section and grab something!
				</p>
			</div>
		);
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
					<div className='my-2'>
						<p>
							Take a moment to review the products in your cart.
							When you&apos;re ready, clicking &quot;proceed to
							checkout&quot; will redirect you to a checkout page.
						</p>
						<div className='my-10'>{items}</div>
						<hr />
						<div className='text-right my-5'>
							<h1 className='text-xl'>
								Subtotal:{' '}
								{formatCost(
									checkout?.subtotal.amt!,
									checkout?.subtotal.cc!
								)}
							</h1>
							<p className='text-sm my-2'>
								Taxes, shipping, and other costs will be applied
								at checkout.
							</p>
						</div>
						{/* buttons go here */}
						<div className='flex float-right gap-3'>
							<ClearCheckoutButton setCheckout={setCheckout} />
							<ProceedToCheckout checkoutUrl={checkoutUrl} />
						</div>
					</div>
				)}
				{!checkout || (items && items.length === 0 && <EmptyCart />)}
			</div>
		</div>
	);
}
