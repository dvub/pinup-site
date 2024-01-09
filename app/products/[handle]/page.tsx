'use client';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import Client, { Product } from 'shopify-buy';
import useWidth from '@/hooks/useWidth';
import clsx from 'clsx';
import axios from 'axios';
import useSWR from 'swr';
import { Loading } from '@/components/Loading';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
export default function Page({ params }: { params: { handle: string } }) {
	const { width, breakpoints } = useWidth();

	const fetcher = (args: any) =>
		axios
			.get(args, { params: { handle: params.handle } })
			.then((res) => res.data);
	const {
		data: product,
		isLoading,
		error,
	} = useSWR<Product, boolean, any>('/api/product', fetcher);

	const [image, setImage] = React.useState({ src: '', index: 0 });

	React.useEffect(() => {
		if (!product) {
			return;
		}
		setImage({ src: product.images[0].src, index: 0 });
	}, [product]);

	const addToCart = () => {};

	const nextImage = () => {
		if (!product) {
			return;
		}
		const nextIndex = image.index + 1;
		if (nextIndex >= product.images.length) {
			return;
		}
		setImage({
			src: product.images[nextIndex].src,
			index: nextIndex,
		});
	};
	const lastImage = () => {
		if (!product) {
			return;
		}
		const nextIndex = image.index - 1;
		if (nextIndex < 0) {
			return;
		}
		setImage({
			src: product.images[nextIndex].src,
			index: nextIndex,
		});
	};

	if (isLoading || !product) {
		return <Loading />;
	}
	if (error) {
		console.log(error);
	}

	return (
		<div>
			<Navbar />
			<div
				className={clsx(
					'mx-10 my-10 gap-5',
					width > breakpoints.medium && 'flex'
				)}
			>
				<div
					className={clsx(
						'left flex justify-center ',
						width > breakpoints.medium ? 'w-[50%]' : 'w-full'
					)}
				>
					{product.images && (
						<div className='relative'>
							<Image
								src={image.src}
								alt={product.images[0].altText || 'alt text'}
								width={800}
								height={800}
							/>
							<button onClick={() => nextImage()}>
								<ArrowRightIcon className='w-6 h-6 absolute right-0' />
							</button>
							<button onClick={() => lastImage()}>
								<ArrowLeftIcon className='w-6 h-6 absolute left-0' />
							</button>
						</div>
					)}
				</div>
				<div
					className={clsx(
						'right',
						width > breakpoints.medium ? 'w-[50%]' : 'w-full my-5'
					)}
				>
					<h1 className='text-3xl'>{product.title}</h1>
					<h1 className='text-2xl'>
						{product.variants[0].price.amount}
						{product.variants[0].price.currencyCode}
					</h1>

					<h1 className='mt-10 text-2xl'>Details</h1>
					<p className='mr-[20%]'>{product.description}</p>
					<div className='flex justify-between items-center'>
						<div>
							<p>1/1</p>
						</div>
						<div>
							{product.availableForSale && (
								<button
									className='bg-black text-white px-4 py-1 float-right my-10'
									onClick={() => {
										addToCart();
									}}
								>
									add to cart
								</button>
							)}
							{!product.availableForSale && (
								<div className='bg-gray-500 text-white px-4 py-1 float-right my-10'>
									<p>not available</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
