import Client, { Product } from 'shopify-buy';
import { getDisplayTag, getExcludeTag, getVintageTag } from './variables';
import { Image } from 'shopify-buy';
import { getImageObject } from './utils';
// export const dynamic = 'force-dynamic';
export function generateClient() {
	const apiVersion = process.env.SHOPIFY_API_VERSION;
	const domain = process.env.SHOPIFY_DOMAIN;
	const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

	if (!apiVersion || !domain || !token)
		throw Error(
			'Error fetching products: Client info was not specified (either API ver., domain, or token). Check your .env file!'
		);

	// console.log('successfully built a new client');

	return Client.buildClient({
		domain: domain,
		storefrontAccessToken: token,
		apiVersion: apiVersion,
	});
}

export async function getProducts(type: string, first: number) {
	const exclude = getExcludeTag();

	const client = generateClient();
	try {
		const products = await client.product.fetchQuery({
			first: first,
			query: `tag:${type} NOT tag:${exclude}`,
		});
		// console.log(
		//	`successully fetched ${products.length} products with tags \"${type}\" (excluding \"${exclude}\")`
		// );
		return products;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
export async function getDisplayImages(type: string) {
	const displayTag = getDisplayTag();
	const vintageTag = getVintageTag();

	const client = generateClient();

	try {
		const data = await client.product.fetchQuery({
			query: `tag:${displayTag} AND tag:${vintageTag}`,
		});

		const res = data.flatMap((product) => {
			return product.images;
		});

		const images = res!.map((image) => {
			return getImageObject(image);
		});
		// console.log('successfully fetched banner products');
		return images;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

export async function getProduct(handle: string) {
	const client: Client = generateClient();
	try {
		const product = await client.product.fetchByHandle(handle);
		// TODO: clean this uyp
		const info = {
			title: product.title,
			price: product.variants[0].price.amount,
			cc: product.variants[0].price.currencyCode,
			availableForSale: product.availableForSale,
			description: product.description,
			variantId: product.variants[0].id,
		};

		const images = product.images.map((image) => {
			return getImageObject(image);
		});

		return { productInfo: info, images: images };
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
