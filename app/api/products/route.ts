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

	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/image.ts
	// https://github.com/vercel/commerce/blob/main/lib/shopify/fragments/product.ts
	const productsQuery = client.graphQLClient.query((root: any) => {
		root.addConnection(
			'products',
			{ args: { first: 10 } },
			(product: any) => {
				product.add('id');
				product.add('handle');
				product.add('availableForSale');
				product.add('title');
				product.add('tags');
				product.add('description');

				product.addConnection(
					'variants',
					{ args: { first: 20 } },
					(variants: any) => {
						variants.add('id');
						variants.add('title');
						variants.add('availableForSale');
						variants.add('price', (price: any) => {
							price.add('amount');
							price.add('currencyCode');
						});
					}
				);

				product.add('featuredImage', (featuredImage: any) => {
					featuredImage.add('id');
					featuredImage.add('originalSrc');
				});

				product.addConnection(
					'images',
					{ args: { first: 5 } },
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

	return new Response(JSON.stringify(data.model.products));
}
