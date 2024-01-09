import generateClient from '@/lib/shopify';
import { NextRequest } from 'next/server';
import { Product } from 'shopify-buy';
import Client from 'shopify-buy';
export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	const queryBy = 'handle';
	const value = params.get(queryBy);

	if (!value) {
		const errorResponse = new Response(
			JSON.stringify({ error: 'Handle value is missing. Try again (:' }),
			{
				status: 400,
			}
		);
		return errorResponse;
	}

	const client: Client = generateClient();

	const data = await client.product.fetchByHandle(value);

	return new Response(JSON.stringify(data));
}
