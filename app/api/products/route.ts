//import { client } from '@/lib/shopify';
import Client from 'shopify-buy';
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const apiVersion = process.env.SHOPIFY_API_VERSION;
	const domain = process.env.SHOPIFY_DOMAIN;
	const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

	if (apiVersion === undefined)
		throw Error(
			'Error fetching products: API Version not specified. Check your .env file.'
		);
	if (apiVersion.length === 0) {
		console.log(
			'API Version not specified. This may cause (breaking) issues.'
		);
	}
	if (!domain)
		throw Error(
			'Error fetching products: Shopify domain not specified. Check your .env file.'
		);
	if (!token)
		throw Error(
			'Error fetching products: Storefront Token not specified. Check your .env file.'
		);
	const client = Client.buildClient({
		domain: process.env.SHOPIFY_DOMAIN!,
		storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
		apiVersion: process.env.SHOPIFY_API_VERSION!,
	});
	const data = await client.product.fetchAll();

	// Create a new Response with the data and set Cache-Control to disable caching
	const response = new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store, max-age=0',
		},
	});

	console.log(data.length);
	return response;
}
