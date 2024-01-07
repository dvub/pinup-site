import generateClient from '@/lib/shopify';
import { Product } from 'shopify-buy';
export async function GET(request: Request) {
	const url = request.url;
	if (!request.url) {
		return;
	}

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
				product.add('tags');

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
	const res = data.model.products;

	// extract values from tags. TODO:  fix ??
	const products = res.map((product: Product) => {
		const tags = product.tags.map((tag: any) => tag.value.toLowerCase());
		return { ...product, tags };
	});
	return new Response(JSON.stringify(products));
}
/*

			'products',
			{
				args: {
					first: 100,
					query: 'tag:display',
				},
			},
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
					{ args: { first: 100 } },
					(images: any) => {
						images.add('url');
						images.add('altText');
						images.add('width');
						images.add('height');
					}
				);
			}
		);

		*/