import useProducts from '@/hooks/useProducts';
import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';

export default function ItemPanel(props: {
	type: string;
	numItems: number | undefined;
}) {
	const { data, isLoading, error } = useProducts(props.type);

	if (isLoading || !data) {
		return <h1>Loading</h1>;
	}
	const slice = data.slice(0, props.numItems);

  const exclude = process.env.NEXT_PUBLIC_EXCLUDE_TAG;
  if (!exclude) {
    throw Error("Exclude tag not found in .env. Please set it!!");
  
    
  }

	const items = slice.map((product: Product) => {
		if (product.tags && product.tags.includes(process.env.NEXT_PUBLIC_EXCLUDE_TAG!)) {
			return;
		}

		console.log(product.images);

		return (
			<div
				key={product.id}
				className='text-sm relative border-2 border-solid border-black p-2'
			>
				<Link href={`/products/${product.handle}`} className='relative'>
					{product.images[0] && (
						<div className='relative w-24 h-24 bg-gray-500'>
							<Image
								src={product.images[0].url}
								alt={product.images[0].altText || 'alt text'}
								quality={100}
								fill
								className='object-cover'
							/>
						</div>
					)}
					<p>{product.title}</p>
					<p>{product.variants[0].price.amount} usd</p>
				</Link>
			</div>
		);
	});

	return (
		<div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`}>
			{items}
		</div>
	);
}
