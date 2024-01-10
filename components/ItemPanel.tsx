// panel of mini-display for a determined number of items
import Link from 'next/link';
import { Product } from 'shopify-buy';
import Image from 'next/image';
import { generateClient } from '@/lib/shopify';
import Client from 'shopify-buy';

// THIS IS A SERVER COMPONENT
export default async function ItemPanel(props: {
	type: string;
	numItems: number | undefined;
}) {
	// we can do data fetching on the server!! this is very very cool.
	// TODO: don't generate the client every single time.

	// we can also use certain environment variables! that's cool right?
	const excludeTag = process.env.NEXT_PUBLIC_EXCLUDE_TAG;
	if (!excludeTag) {
		throw Error('Exclude tag not found in .env. Please set it!!');
	}

	const client: Client = generateClient();
	// actually fetch the data
	const products = await client.product.fetchQuery({
		query: `tag:${props.type}`,
	});

	if (!products) {
		return <p>oh no</p>;
	}
	const items = products.map((product: Product) => {
		if (
			(product.tags &&
				product.tags.includes(process.env.NEXT_PUBLIC_EXCLUDE_TAG!)) ||
			!product.availableForSale
		) {
			return;
		}

		return (
			<div
				key={product.id}
				className='text-sm relative border-[1px] border-solid border-gray-500'
			>
				<Link href={`/products/${product.handle}`} className='relative'>
					{/* this div defines the boundaries of the image, and also provides a background color in case the image fails to load for some reason. */}
					<div className='relative w-full h-96 bg-gray-500'>
						{product.images[0] && (
							<Image
								// TODO: fix using images[0]
								src={product.images[0].src} // for some reason, need to use .src property?
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
							<p>{product.variants[0].price.amount} usd</p>
						</div>
					</div>
				</Link>
			</div>
		);
	});

	return (
		<div className={`grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3`}>
			{items}
		</div>
	);
}
