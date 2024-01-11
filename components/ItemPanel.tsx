// panel of mini-display for a determined number of items
import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';
import { getProducts } from '@/lib/shopify';
import { getExcludeTag } from '@/lib/variables';

// THIS IS A SERVER COMPONENT
export default async function ItemPanel(props: {
	type: string;
	numItems: number | undefined;
}) {
	// we can do data fetching on the server!! this is very very cool.
	const products = await getProducts(props.type);
	// we can also use certain environment variables! that's cool right?
	const excludeTag = getExcludeTag();

	const items = products.slice(0, props.numItems).map((product: Product) => {
		if (product.tags && product.tags.includes(excludeTag)) {
			return;
		}
		const isAvailable = product.availableForSale
			? 'available'
			: 'not available';

		return (
			<Link
				href={`/products/${product.handle}`}
				className='relative w-full h-full text-sm border-[1px] border-solid border-gray-500'
				key={product.id}
			>
				{/* gray translucent overlay to indicate that an item is not available for sale */}
				{!product.availableForSale && (
					<div className='absolute z-30 w-full h-full bg-gray-200/40' />
				)}

				{/* this div defines the boundaries of the image, and also provides a background color in case the image fails to load for some reason. */}
				<div className='relative w-full h-96 bg-gray-500'>
					{product.images[0] && (
						<Image
							// TODO: fix using images[0]
							// and fix this || jank shit FFS
							// JFC
							src={product.images[0].url || product.images[0].src} // for some reason, need to use .src property?
							alt={product.images[0].altText || 'alt text'}
							fill
							// DO NOT SET QUALITY HERE! since many are rendered, best to let quality be automatically determined
							className='object-cover'
						/>
					)}
				</div>
				{/* TEXT!! */}
				<div className='m-2'>
					<p>{product.title}</p>
					<div className='flex justify-between'>
						{/* TODO: fix using variants[0] */}
						<p>
							${product.variants[0].price.amount} (
							{product.variants[0].price.currencyCode})
						</p>
						<p className='bg-black text-white px-4 py-1'>
							{isAvailable}
						</p>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<div
			className={`grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2`}
		>
			{items}
		</div>
	);
}
