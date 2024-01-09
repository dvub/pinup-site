import generateClient from '@/lib/shopify';
import { NextRequest } from 'next/server';
import { Product } from 'shopify-buy';
import Client from 'shopify-buy';
export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams;
	const queryBy = 'tag';
	const value = params.get(queryBy);

  if (!value) {
    return new Response(JSON.stringify({error: "Couldn\'t find tag in params."}), {
      status: 400
    })
  }

	let query = `${queryBy}:${value}`;
	const client: Client = generateClient();
	
  const products = await client.product.fetchQuery({ query: query});

  console.log(products);
	return new Response(JSON.stringify(products));
}
