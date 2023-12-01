import { client } from '@/lib/shopify';
import Client from 'shopify-buy';
export async function GET(request: Request) {
	const data = await client.product.fetchAll();

	return Response.json(data);
}
