'use client';

import * as React from 'react';
import { Image as ShopifyImage } from 'shopify-buy';

import useDisplayProducts from '@/hooks/useDisplayProducts';

import Navbar from '@/components/navbar/navbar';
import { Section } from '@/components/home/Section';
import ItemPanel from '@/components/ItemPanel';
import { Loading } from '@/components/Loading';
import clsx from 'clsx';
import useWidth from '@/hooks/useWidth';
import Footer from '@/components/footer/footer';

// TODO: FIX IMAGE HEIGHTS

// font is broken on redirect
// footer is broken lol

export default function Home() {
	const { data: products, error, isLoading } = useDisplayProducts();

	const { width, breakpoints } = useWidth();

	// state for the images
	let [images, setImages] = React.useState<{
		production: ShopifyImage[] | undefined;
		vintage: ShopifyImage[] | undefined;
		reworked: ShopifyImage[] | undefined;
	}>({
		production: undefined,
		vintage: undefined,
		reworked: undefined,
	});

	const displayTag = process.env.NEXT_PUBLIC_DISPLAY_TAG;
	if (!displayTag) {
		throw new Error('ERROR: display tag not set. make sure you set that.');
	}

	React.useEffect(() => {
		if (isLoading || error) {
			return;
		}
		// parse all products and set images in state depending on products that have the matching tag
		for (const product of products!) {
			if (product.tags && product.tags.includes(displayTag)) {
				for (const tag of Object.keys(images)) {
					if (product.tags.includes(tag)) {
						setImages((prevState) => ({
							...prevState,
							[tag]: product.images,
						}));
					}
				}
			}
		}
		// 90% sure the dependency has to be missing or else it will break. double check that though.
	}, [isLoading, products, error]);

	if (isLoading && !error) {
		return <Loading />;
	}

	return (
		<div className='overflow-hidden'>
			<Navbar />
			<div className='w-full h-full'>
				<div className='h-screen'>
					<Section
						images={images.production}
						error={error}
						wide={true}
						title='vintage'
						href='/vintage'
					/>
				</div>

				<ItemPanel type={'v'} numItems={4} />
				<div
					className={clsx(
						width > breakpoints.medium && 'flex w-full',
						''
					)}
				>
					<div className='h-[50vh]'>
						<Section
							images={images.vintage}
							error={error}
							wide={false}
							title='production'
							href='/production'
						/>
					</div>

					<div className='h-[50vh]'>
						<Section
							images={images.reworked}
							error={error}
							wide={false}
							title='reworked'
							href='/reworked'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
