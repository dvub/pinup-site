'use server';

import { generateClient } from '@/lib/shopify';
import { revalidatePath } from 'next/cache';

export async function getCheckoutUrl() {
	// TODO: FIX THIS
	revalidatePath('/');
	// console.log('The server action is running!');
	const client = generateClient();
	const checkout = await client.checkout.create();
	return { url: checkout.webUrl, id: checkout.id };
}

export async function addToCart(
	id: string,
	quantity: number,
	variantId: string
) {
	revalidatePath('/');
	const client = generateClient();
	const lineItem = { quantity: quantity, variantId: variantId };
	await client.checkout.addLineItems(id, [lineItem]);
	console.log('');
}

export async function getCheckout(id: string) {
	revalidatePath('/');
	const client = generateClient();
	const checkout = await client.checkout.fetch(id);
	const items = checkout.lineItems.map((item) => {
		return {
			title: item.title,
			quantity: item.quantity,
			price: item.variant?.price.amount,
			cc: item.variant?.price.currencyCode,
			id: item.id,
		};
	});

	return {
		items: items,
		subtotal: {
			amt: checkout.subtotalPrice.amount,
			cc: checkout.subtotalPrice.currencyCode,
		},
	};
}
