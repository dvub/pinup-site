import Client from 'shopify-buy';
export const client = Client.buildClient({
	storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
	domain: process.env.SHOPIFY_DOMAIN!,
	// TODO: specify
	apiVersion: '',
});
