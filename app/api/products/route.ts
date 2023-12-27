//import { client } from '@/lib/shopify';
import Client from 'shopify-buy';
export async function GET(request: Request) {
	const apiVersion = process.env.SHOPIFY_API_VERSION;
	const domain = process.env.SHOPIFY_DOMAIN;
	const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

	if (!apiVersion)
		throw Error(
			'Error fetching products: API Version not specified. Check your .env file.'
		);
	if (!domain)
		throw Error(
			'Error fetching products: Shopify domain not specified. Check your .env file.'
		);
	if (!token)
		throw Error(
			'Error fetching products: Storefront Token not specified. Check your .env file.'
		);

	const client = Client.buildClient({
		// these are the 2 environment variables you need to have set
		storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
		domain: process.env.SHOPIFY_DOMAIN!,
		apiVersion: process.env.SHOPIFY_API_VERSION!,
	});

	const data = await client.product.fetchAll();
	return new Response(JSON.stringify(data));
}
