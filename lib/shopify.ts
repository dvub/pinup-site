import { Product } from 'shopify-buy';
// @ts-ignore
import Client from 'shopify-buy/index.unoptimized.umd';
export function generateClient() {
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

	return Client.buildClient({
		domain: process.env.SHOPIFY_DOMAIN!,
		storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
		apiVersion: process.env.SHOPIFY_API_VERSION!,
	});
}
export async function getDisplayImages() {
	const client = generateClient();
	/*
	const tagsArray = ['display']; // Add your desired tags to this array
	const tagsQuery = tagsArray.map((tag) => `tag:${tag}`).join(' OR ');
	*/
	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/image.ts
	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/product.ts
	const productsQuery = client.graphQLClient.query((root: any) => {
		root.addConnection(
			'products',
			{
				args: {
					first: 100,
					query: 'tag:display',
				},
			},
			(product: any) => {
				product.add('title');
				/*
				product.add('featuredImage', (featuredImage: any) => {
					featuredImage.add('id');
					featuredImage.add('originalSrc');
				});
				*/
				product.addConnection(
					'images',
					{ args: { first: 10 } },
					(images: any) => {
						images.add('url');
						images.add('altText');
						images.add('width');
						images.add('height');
					}
				);
			}
		);
	});
	const data = await client.graphQLClient.send(productsQuery);
	const res: Product[] = data.model.products;

	return res;
}
