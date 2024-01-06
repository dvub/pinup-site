'use client';

import * as React from 'react';
import { Image as ShopifyImage } from 'shopify-buy';

import useDisplayProducts from '@/hooks/useDisplayProducts';

import Navbar from '@/components/navbar/navbar';
import { Section } from '@/components/home/Section';
import ItemPanel from '@/components/ItemPanel';
import { Loading } from '@/components/home/Loading';
import clsx from 'clsx';
import useWidth from '@/hooks/useWidth';

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
		for (const product of products || []) {
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

	if (!images.production && !error) {
		return <Loading />;
	}

	return (
		<>
			<main>
				<Navbar />
				<div>
					{/* if all goes well */}

					{images.production && (
						<div className='h-[100vh]'>
							<Section
								images={images.production}
								error={error}
								wide={true}
								title='production'
								href='/production'
							/>
						</div>
					)}
					<ItemPanel type={'Production'} />
					<div
						className={clsx(
							width > breakpoints.medium && 'flex',
							'h-[50rem]'
						)}
					>
						{images.vintage && (
							<Section
								images={images.vintage}
								error={error}
								wide={false}
								title='vintage'
								href='/vintage'
							/>
						)}

						{images.reworked && (
							<Section
								images={images.reworked}
								error={error}
								wide={false}
								title='reworked'
								href='/reworked'
							/>
						)}
					</div>
					<div className='text-xl m-5 w-full text-center'>
						<p>contact: EMAIL@DOMAIN.COM</p>
						<p className=''>
							site feedback/bugs: dvubdevs@gmail.com
						</p>
					</div>
				</div>

				{/* <Footer />*/}
			</main>
		</>
	);
}
