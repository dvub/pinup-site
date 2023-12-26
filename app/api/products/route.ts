import { client } from '@/lib/shopify';

export async function GET(request: Request) {
	const data = await client.product.fetchAll();

	console.log(data[0].title);
	return new Response(JSON.stringify(data));
}
