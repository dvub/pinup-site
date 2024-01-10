import { generateClient } from '@/lib/shopify';
import { NextRequest } from 'next/server';
import { Checkout } from 'shopify-buy';
import Client from 'shopify-buy';

// ROUTE HANDLER:
// creates a checkout and returns the id
export async function GET(request: NextRequest) {
	// dummy variable opts out of caching (lol stupid feature)
	const header = request.headers;
	// gen unoptimized client
	const client: Client = generateClient();

	const checkout: Checkout = await client.checkout.create();
	client.checkout.addLineItems('', []);
	return Response.json({ checkoutId: checkout.id });
}
