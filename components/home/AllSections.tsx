import clsx from 'clsx';
import error from 'next/error';
import ItemPanel from '../ItemPanel';
import { Section } from './Section';
import useWidth from '@/hooks/useWidth';
import { Image, Product } from 'shopify-buy';
import React from 'react';
import { getDisplayImages } from '@/lib/shopify';
export default async function AllSections() {
	const images = await getDisplayImages();

	return (
		<div className='w-full h-full'>
			<div className='h-screen'>
				<Section
					images={images}
					error={error}
					wide={true}
					title='vintage'
					href='/vintage'
				/>
			</div>

			<ItemPanel type={'v'} numItems={4} />
			<div className='flex w-full'>
				<div className='h-[50vh]'>
					<Section
						images={undefined}
						error={error}
						wide={false}
						title='production'
						href='/production'
					/>
				</div>

				<div className='h-[50vh]'>
					<Section
						images={undefined}
						error={error}
						wide={false}
						title='reworked'
						href='/reworked'
					/>
				</div>
			</div>
		</div>
	);
}
