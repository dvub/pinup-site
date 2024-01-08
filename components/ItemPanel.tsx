import useProducts from '@/hooks/useProducts';
import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';

export default function ItemPanel(props: { type: string }) {
	const { data, isLoading, error } = useProducts(props.type);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	const items = data!.map((product: Product) => {
		if (product.tags.includes(process.env.NEXT_PUBLIC_EXCLUDE_TAG!)) {
			return;
		}

		console.log(product.images);

		return (
			<div key={product.id} className='text-sm relative'>
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

	return <div className={`w-full flex  m-5 gap-5`}>{items}</div>;
}
