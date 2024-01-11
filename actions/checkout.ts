'use server';

import { generateClient } from '@/lib/shopify';

export async function getCheckoutUrl() {
	// console.log('The server action is running!');

	const client = generateClient();
	const checkout = await client.checkout.create();
	console.log('cool worked');
	return { url: checkout.webUrl, id: checkout.id };
}

export async function addToCart(
	url: string,
	quantity: number,
	variantId: string
) {
	const client = generateClient();
	const lineItem = { quantity: quantity, variantId: variantId };
	await client.checkout.addLineItems(url, [lineItem]);
	console.log('');
}
