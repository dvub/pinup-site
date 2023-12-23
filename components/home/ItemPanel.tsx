import { roboto } from '@/lib/fontLoader';
import Link from 'next/link';

import bags from '../../public/home/bags.jpg';
import Image from 'next/image';
import { Product } from 'shopify-buy';
import useProducts from '@/hooks/useProducts';

export default function ItemPanel(props: { type: string }) {
	const { data: products, isLoading, error } = useProducts();

	if (isLoading) return <div>loading</div>;

	/* 
	
		<div
		className={`${
			width > breakpoints.medium ? 'w-[50%]' : 'w-full'
		} relative h-[50em]`}
	>
		<Image
			src={fennvilleFront}
			alt='...'
			quality={100}
			priority
			fill
			className='object-cover'
		/>
	</div>

	*/
	console.log(products);
	const items = products.map((product: Product) => {
		return (
			<div key={product.id} className='relative h-24 w-24'>
				<Link href='/'>
					<Image
						src={bags}
						alt='...'
						quality={100}
						className='object-cover'
					/>
					<p>{product.title}</p>
					<p>$0</p>
					<p>{product.description}</p>
					{product.variants[0].price.amount}
				</Link>
			</div>
		);
	});

	return <div className={`flex gap-5  m-3`}>{items}</div>;
}
