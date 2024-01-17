'use server';
import { generateClient } from '@/lib/shopify';
import { revalidatePath } from 'next/cache';

export async function addToCart(
	id: string,
	quantity: number,
	variantId: string
) {
	//revalidatePath('/vintage');
	//revalidatePath('/cart');
	const client = generateClient();
	const lineItem = { quantity: quantity, variantId: variantId };
	await client.checkout.addLineItems(id, [lineItem]);
	revalidatePath('/cart');
	console.log('');
}
