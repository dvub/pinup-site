'use client';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import React from 'react';
export default function ProductDisplay(props: {
	images: { src: string | undefined; alt: string | undefined }[];
}) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	const content = props.images.map((image, index) => {
		return (
			<CarouselItem key={index}>
				<Image
					src={image.src!}
					alt={image.alt || 'alt'}
					width={1000}
					height={1000}
					sizes='1000px'
				/>
			</CarouselItem>
		);
	});

	return (
		<div className='relative w-full'>
			{props.images.length > 0 && (
				<div>
					<Carousel setApi={setApi}>
						<CarouselContent>{content}</CarouselContent>
						<div className='w-full flex justify-between'>
							<CarouselPrevious />
							<p className='text-black/50'>
								[ showing image {current} of {count} ]
							</p>
							<CarouselNext />
						</div>
					</Carousel>
				</div>
			)}

			{props.images.length === 0 && (
				<div className='w-full h-full flex justify-center items-center'>
					<p className='text-black/50'>Images not available. </p>
				</div>
			)}
		</div>
	);
}
/* 
<div>
<Image
	{...handlers}
	key={current.src}
	src={current.src!}
	alt={current.alt || 'alt'}
	width={800}
	height={800}
/>
<div className='w-full flex justify-between my-5'>
	<button onClick={() => lastImage()}>
		<ArrowLeftIcon className='w-6 h-6' />
	</button>
	<div>
		<p className='text-black/50'>swipe for more</p>
	</div>
	<button onClick={() => nextImage()}>
		<ArrowRightIcon className='w-6 h-6' />
	</button>
</div>
</div>
*/
