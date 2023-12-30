//import { client } from '@/lib/shopify';
// @ts-ignore
import Client from 'shopify-buy/index.unoptimized.umd';
//import Client from 'shopify-buy';
export async function GET(request: Request) {
	// supposedly required
	const headers = request.headers;
	if (!headers) {
		console.log('erm...');
		return;
	}
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

	// this is some of the most sketch shit i have ever done.
	const productsQuery = client.graphQLClient.query((root: any) => {
		root.addConnection(
			'products',
			{ args: { first: 10 } },
			(product: any) => {
				product.add('id');
				product.add('tags');
			}
		);
	});
	const tags = await client.graphQLClient.send(productsQuery);

	tags.model.products.forEach((x: any) => {
		data.map((d: any) => {
			// set the tags of the product
			if (d.id === x.id) {
				d.tags = x.tags;
			}
			return d;
		});
	});

	// Create a new Response with the data and set Cache-Control to disable caching
	const response = new Response(JSON.stringify(data));
	// .model.products
	return response;
}
