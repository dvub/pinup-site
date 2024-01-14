'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';
export default function ProductDisplay(props: {
	images: { src: string | undefined; alt: string | undefined }[];
}) {
	const [index, setIndex] = React.useState(0);
	const [current, setCurrent] = React.useState(props.images[index]);

	const handlers = useSwipeable({
		onSwipedLeft: (e) => {
			e.event.preventDefault();
			lastImage();
		},
		onSwipedRight: (e) => {
			e.event.preventDefault();
			nextImage();
		},
	});

	const nextImage = () => {
		const nextIndex = index + 1;
		if (nextIndex >= props.images.length) {
			return;
		}
		setIndex(nextIndex);
		setCurrent(props.images[nextIndex]);
	};
	const lastImage = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			return;
		}
		setIndex(nextIndex);
		setCurrent(props.images[nextIndex]);
	};

	return (
		<div>
			<div className='relative w-full'>
				{props.images.length > 0 && (
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
				)}
				{props.images.length === 0 && (
					<div className='w-[800px] h-[800px] bg-gray-500 flex justify-center items-center'>
						<p>Images not available</p>
					</div>
				)}
			</div>
		</div>
	);
}
