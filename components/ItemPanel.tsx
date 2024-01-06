import useProducts from '@/hooks/useProducts';
import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';

export default function ItemPanel(props: { type: string }) {
	const { data, isLoading, error } = useProducts(props.type);

	if (isLoading) {
		return <h1>Loading</h1>;
	}
	console.log(data);

	const items = data!.map((product: Product) => {
		return (
			<div key={product.id} className=''>
				<Link href={`/products/${product.handle}`} className='relative'>
					<div className='bg-gray-600 w-24 h-24'></div>
					{product.images[0] && (
						<Image
							src={product.images[0].url}
							alt='...'
							quality={100}
							className='object-cover'
							fill
						/>
					)}
					<p>{product.title}</p>
					<p>{product.variants[0].price.amount} usd</p>
				</Link>
			</div>
		);
	});

	return <div className={`w-full flex  m-5 gap-5`}>{items}</div>;
}
