import generateClient from '@/lib/shopify';
import { NextRequest } from 'next/server';
import { Checkout } from 'shopify-buy';

// ROUTE HANDLER:
// creates a checkout and returns the id
export async function GET(request: NextRequest) {
	// dummy variable opts out of caching (lol stupid feature)
	const header = request.headers;
	// gen unoptimized client
	const client = generateClient();

	const checkout: Checkout = await client.checkout.create();
	console.log(checkout.webUrl);
	return Response.json({ checkoutId: checkout.id });
}
