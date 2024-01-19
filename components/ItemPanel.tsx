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
				// border-[1px] border-solid border-gray-500
				className='relative w-full h-full text-sm '
				key={product.id}
			>
				{!product.availableForSale && (
					<div className='absolute z-30 w-full h-full bg-gray-200/40' />
				)}
				<div className='relative w-full '>
					{product.images[0] && (
						<Image
							src={product.images[0].url || product.images[0].src}
							alt={product.images[0].altText || 'alt text'}
							//fill
							className='object-contain'
							width={500}
							height={500}
							// major insane optimization
							sizes='(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 20vw'
							// sizes='500px'
						/>
					)}
					{product.images.length === 0 && (
						<div className='w-full h-full z-10 flex justify-center items-center'>
							<p className='text-white'>no images available</p>
						</div>
					)}
				</div>

				<div className='m-2'>
					<p className='truncate max-w-full'>{product.title}</p>
					<div className='flex justify-between my-2 items-center'>
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
		<div className='grid gap-1 m-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2'>
			{items}
		</div>
	);
}
