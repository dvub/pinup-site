'use server';

import { redirect } from 'next/navigation';
import { generateClient } from '@/lib/shopify';
import { revalidatePath } from 'next/cache';

export async function navigate(url: string) {
	redirect(url);
}

export async function getCheckout(id: string) {
	//revalidatePath('/');
	const client = generateClient();
	const checkout = await client.checkout.fetch(id);

	if (!checkout) {
		return undefined;
	}

	const items = checkout.lineItems.map((item) => {
		return {
			title: item.title,
			quantity: item.quantity,
			price: item.variant?.price.amount,
			cc: item.variant?.price.currencyCode,
			id: item.id,
		};
	});
	revalidatePath('/cart');
	revalidatePath('/');
	return {
		items: items,
		subtotal: {
			amt: checkout.subtotalPrice.amount,
			cc: checkout.subtotalPrice.currencyCode,
		},
	};
}
