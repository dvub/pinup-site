// rigorously commenting this, especially about the environment variables and throwing errors.
// when i come back to this hopefully the comments will help
// PLEASE HELP ME!
import Client from 'shopify-buy';
import { getExcludeTag } from './variables';
// creates a new client from variables provided from env variables.
// IMPORTANT!! this will throw an error if the environment variable(s) isnt/arent set.
export function generateClient() {
	const apiVersion = process.env.SHOPIFY_API_VERSION;
	const domain = process.env.SHOPIFY_DOMAIN;
	const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
	if (!apiVersion || !domain || !token)
		throw Error(
			'Error fetching products: Client info was not specified (either API ver., domain, or token). Check your .env file!'
		);

	return Client.buildClient({
		domain: domain,
		storefrontAccessToken: token,
		apiVersion: apiVersion,
	});
}

// gets products with a given tag
// THIS FUNCTION DOES NOT PULL PRODUCTS WITH THE EXCLUDE TAG!!!
export async function getProducts(type: string) {
	// important here!!
	const exclude = getExcludeTag();

	const client: Client = generateClient();
	// actually fetch the data
	// here, we're going to ask to NOT get products with the exclude tag
	const products = await client.product.fetchQuery({
		query: `tag:${type} NOT tag:${exclude}`,
	});
	return products;
}

// get a list of products that have the tag provided from environment variables.
// IMPORTANT!! this will throw an error if the environment variable(s) isnt/arent set.

export async function getDisplayImages() {
	// OLD CODE!
	// this is old code that i was using for making custom graphQL queries, using the unoptimized client.
	// TODO: remove
	/*
	const tagsArray = ['display']; // Add your desired tags to this array
	const tagsQuery = tagsArray.map((tag) => `tag:${tag}`).join(' OR ');
	*/
	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/image.ts
	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/product.ts

	// CAREFUL HERE!
	/*
	const productsQuery = client.graphQLClient.query((root: any) => {
		root.addConnection(
			'products',
			{
				args: {
					first: 100,
					query: `tag:${displayTag}`,
				},
			},
			(product: any) => {
				// may not be necessary
				product.add('title');

				product.add('featuredImage', (featuredImage: any) => {
					featuredImage.add('id');
					featuredImage.add('originalSrc');
				});

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
	});*/
	// ... make query, etc. got rid of that shit

	const displayTag = process.env.DISPLAY_TAG;
	if (!displayTag) {
		throw Error('Display tag not set. Check your .env');
	}

	const client = generateClient();

	const data = await client.product.fetchQuery({
		query: `tag:${displayTag}`,
	});
	return data;
}
