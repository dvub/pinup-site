import Client from 'shopify-buy';
export const client = Client.buildClient({
  // these are the 2 environment variables you need to have set
	storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN!,
	domain: process.env.SHOPIFY_DOMAIN!,
	// TODO: specify
	apiVersion: '',
});
