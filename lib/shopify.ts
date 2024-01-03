// @ts-ignore
import Client from 'shopify-buy/index.unoptimized.umd';
export default function generateClient() {
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
	return Client.buildClient({
		domain: process.env.SHOPIFY_DOMAIN!,
		storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
		apiVersion: process.env.SHOPIFY_API_VERSION!,
	});
}
