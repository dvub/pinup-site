import { generateClient } from '@/lib/shopify';

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
	console.log('');
}
