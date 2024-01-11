'use client';
import { getCheckoutUrl } from '@/actions/checkout';
import Navbar from '@/components/navbar/navbar';
import * as React from 'react';
export default function Cart() {
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
		<div className='w-full'>
			<Navbar />
			<div className='m-2'>
				<h1>Cart</h1>
				<div className='float-right'>
					<button className='bg-black text-white px-4 py-1'>
						Proceed to checkout
					</button>
					<p clasName='text-sm'>
						Note: this button will redirect you. (don&apos; freak
						out)
					</p>
				</div>
			</div>
		</div>
	);
}
