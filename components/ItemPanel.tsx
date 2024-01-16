import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';
import { getProducts } from '@/lib/shopify';
import { getExcludeTag } from '@/lib/variables';
import { Badge } from '@/components/ui/badge';

export default async function ItemPanel(props: {
	type: string;
	numItems: number;
}) {
	const products = await getProducts(props.type, props.numItems);
	// fix !
	const items = products!.map((product: Product) => {
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
				<div className='relative w-full  bg-gray-500 h-72'>
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
							// major insane optimization
							sizes='(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 20vw'
						/>
					)}
					{product.images.length === 0 && (
						<div className='w-full h-full z-10 flex justify-center items-center'>
							<p className='text-white'>no images available</p>
						</div>
					)}
				</div>
				{/* TEXT!! */}
				<div className='m-2'>
					<p className='truncate max-w-full'>{product.title}</p>
					<div className='flex justify-between my-2 items-center'>
						{/* TODO: fix using variants[0] */}
						<p>
							${product.variants[0].price.amount} (
							{product.variants[0].price.currencyCode})
						</p>
						<Badge>{isAvailable}</Badge>
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
