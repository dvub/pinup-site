import { client } from '@/lib/shopify';

export const dynamic = 'auto';
export async function GET(request: Request) {
	const data = await client.product.fetchAll();
	return Response.json(data);
}
