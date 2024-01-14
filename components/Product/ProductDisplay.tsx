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
					width={800}
					height={800}
				/>
			</CarouselItem>
		);
	});

	return (
		<div className='relative w-full m-2 p-2'>
			{props.images.length > 0 && (
				<div>
					<Carousel setApi={setApi}>
						<CarouselContent>{content}</CarouselContent>
						<div>
							<CarouselPrevious />
							<CarouselNext />
						</div>
						<div className='w-full text-black/50'>
							<p>
								showing image {current} of {count}
							</p>
						</div>
					</Carousel>
				</div>
			)}

			{props.images.length === 0 && (
				<div className='w-[800px] h-[800px] bg-gray-500 flex justify-center items-center'>
					<p>Images not available</p>
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
