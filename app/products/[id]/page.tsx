'use client';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import Client, { Product } from 'shopify-buy';
import Bags from '@/public/home/bags.jpg';
import Fenville from '@/public/home/fennville-front.jpg';
import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
export default function Page({ params }: { params: { handle: string } }) {
	const { width, breakpoints } = useWidth();

	const product = {
		id: 'gid://shopify/Product/8854965158178',
		handle: '50s-big-smith-work-jacket',
		availableForSale: true,
		title: '50s Big smith work jacket',
		tags: [],
		description: 'pit: 21 length: 23 light wear',
		variants: [
			{
				id: 'gid://shopify/ProductVariant/47391605915938',
				title: 'M',
				availableForSale: true,
				price: {
					amount: 145.0,
					currencyCode: 'USD',
					type: {
						name: 'MoneyV2',
						kind: 'OBJECT',
						fieldBaseTypes: {
							amount: 'Decimal',
							currencyCode: 'CurrencyCode',
						},
						implementsNode: false,
					},
				},
				type: {
					name: 'ProductVariant',
					kind: 'OBJECT',
					fieldBaseTypes: {
						availableForSale: 'Boolean',
						barcode: 'String',
						compareAtPrice: 'MoneyV2',
						compareAtPriceV2: 'MoneyV2',
						currentlyNotInStock: 'Boolean',
						id: 'ID',
						image: 'Image',
						metafield: 'Metafield',
						metafields: 'Metafield',
						price: 'MoneyV2',
						priceV2: 'MoneyV2',
						product: 'Product',
						quantityAvailable: 'Int',
						requiresShipping: 'Boolean',
						selectedOptions: 'SelectedOption',
						sellingPlanAllocations:
							'SellingPlanAllocationConnection',
						sku: 'String',
						storeAvailability: 'StoreAvailabilityConnection',
						title: 'String',
						unitPrice: 'MoneyV2',
						unitPriceMeasurement: 'UnitPriceMeasurement',
						weight: 'Float',
						weightUnit: 'WeightUnit',
					},
					implementsNode: true,
				},
				hasNextPage: false,
				hasPreviousPage: false,
				variableValues: null,
			},
		],
		featuredImage: {
			id: 'gid://shopify/ProductImage/43572094861602',
			originalSrc:
				'https://cdn.shopify.com/s/files/1/0849/6149/3282/files/IMG_1811.heic?v=1704491243',
			type: {
				name: 'Image',
				kind: 'OBJECT',
				fieldBaseTypes: {
					altText: 'String',
					height: 'Int',
					id: 'ID',
					originalSrc: 'URL',
					src: 'URL',
					transformedSrc: 'URL',
					url: 'URL',
					width: 'Int',
				},
				implementsNode: false,
			},
		},
		images: [
			{
				url: 'https://cdn.shopify.com/s/files/1/0849/6149/3282/files/IMG_1811.heic?v=1704491243',
				altText: null,
				width: 3024,
				height: 3024,
				type: {
					name: 'Image',
					kind: 'OBJECT',
					fieldBaseTypes: {
						altText: 'String',
						height: 'Int',
						id: 'ID',
						originalSrc: 'URL',
						src: 'URL',
						transformedSrc: 'URL',
						url: 'URL',
						width: 'Int',
					},
					implementsNode: false,
				},
				hasNextPage: { value: true },
				hasPreviousPage: false,
				variableValues: null,
			},
			{
				url: 'https://cdn.shopify.com/s/files/1/0849/6149/3282/files/IMG_1813.heic?v=1704491244',
				altText: null,
				width: 3024,
				height: 3024,
				type: {
					name: 'Image',
					kind: 'OBJECT',
					fieldBaseTypes: {
						altText: 'String',
						height: 'Int',
						id: 'ID',
						originalSrc: 'URL',
						src: 'URL',
						transformedSrc: 'URL',
						url: 'URL',
						width: 'Int',
					},
					implementsNode: false,
				},
				hasNextPage: { value: true },
				hasPreviousPage: { value: true },
				variableValues: null,
			},
			{
				url: 'https://cdn.shopify.com/s/files/1/0849/6149/3282/files/IMG_1814.heic?v=1704491243',
				altText: null,
				width: 3024,
				height: 3024,
				type: {
					name: 'Image',
					kind: 'OBJECT',
					fieldBaseTypes: {
						altText: 'String',
						height: 'Int',
						id: 'ID',
						originalSrc: 'URL',
						src: 'URL',
						transformedSrc: 'URL',
						url: 'URL',
						width: 'Int',
					},
					implementsNode: false,
				},
				hasNextPage: false,
				hasPreviousPage: { value: true },
				variableValues: null,
			},
		],
		type: {
			name: 'Product',
			kind: 'OBJECT',
			fieldBaseTypes: {
				availableForSale: 'Boolean',
				collections: 'CollectionConnection',
				compareAtPriceRange: 'ProductPriceRange',
				createdAt: 'DateTime',
				description: 'String',
				descriptionHtml: 'HTML',
				featuredImage: 'Image',
				handle: 'String',
				id: 'ID',
				images: 'ImageConnection',
				isGiftCard: 'Boolean',
				media: 'MediaConnection',
				metafield: 'Metafield',
				metafields: 'Metafield',
				onlineStoreUrl: 'URL',
				options: 'ProductOption',
				priceRange: 'ProductPriceRange',
				productType: 'String',
				publishedAt: 'DateTime',
				requiresSellingPlan: 'Boolean',
				sellingPlanGroups: 'SellingPlanGroupConnection',
				seo: 'SEO',
				tags: 'String',
				title: 'String',
				totalInventory: 'Int',
				trackingParameters: 'String',
				updatedAt: 'DateTime',
				variantBySelectedOptions: 'ProductVariant',
				variants: 'ProductVariantConnection',
				vendor: 'String',
			},
			implementsNode: true,
		},
		hasNextPage: false,
		hasPreviousPage: false,
		variableValues: null,
	};

	const addToCart = () => {};

	return (
		<div>
			<Navbar />
			<div
				className={clsx(
					'mx-10 my-10 gap-5',
					width > breakpoints.medium && 'flex'
				)}
			>
				<div
					className={clsx(
						'left flex justify-center',
						width > breakpoints.medium ? 'w-[50%]' : 'w-full'
					)}
				>
					{product.images && (
						<Image
							src={product.images[0].url}
							alt={product.images[0].altText || 'alt text'}
							width={800}
							height={10}
						/>
					)}
				</div>
				<div
					className={clsx(
						'right',
						width > breakpoints.medium ? 'w-[50%]' : 'w-full my-5'
					)}
				>
					<h1 className='text-3xl'>{product.title}</h1>
					<h1 className='text-2xl'>
						{product.variants[0].price.amount}
						{product.variants[0].price.currencyCode}
					</h1>

					<h1 className='mt-10 text-2xl'>Details</h1>
					<p className='mr-[20%]'>{product.description}</p>
					<div>
						<button
							className='bg-black text-white px-4 py-1 float-right my-10'
							onClick={() => {
								addToCart();
							}}
						>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
