'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
export default function ProductDisplay(props: {
	images: { src: string | undefined; alt: string | undefined }[];
}) {
	const [index, setIndex] = React.useState(0);
	const [current, setCurrent] = React.useState(props.images[index]);
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
			<div className='relative '>
				{props.images.length > 0 && (
					<div>
						<Image
							src={current.src!}
							alt={current.alt || 'alt'}
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
				{props.images.length === 0 && (
					<div className='w-[800px] h-[800px] bg-gray-500 flex justify-center items-center'>
						<p>Images not available</p>
					</div>
				)}
			</div>
		</div>
	);
}
