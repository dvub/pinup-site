'use server';
// TODO: IMPLEMENT SERVER ACTION ERROR HANDLING

import { generateClient } from '@/lib/shopify';
import { revalidatePath } from 'next/cache';

export async function createCheckout() {
	// TODO: FIX THIS
	//revalidatePath('/vintage');
	revalidatePath('/cart');
	// console.log('The server action is running!');
	const client = generateClient();
	const checkout = await client.checkout.create();
	return { url: checkout.webUrl, id: checkout.id };
}
