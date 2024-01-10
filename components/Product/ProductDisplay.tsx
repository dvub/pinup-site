'use client';
import Image from 'next/image';
export default function ProductDisplay(props: {
	images: { src: string | undefined; alt: string | undefined }[];
}) {
	/*
	const nextImage = () => {
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
*/
	return (
		<div>
			<div className='relative bg-gray-500'>
				{props.images[0].src && (
					<div>
						<Image
							src={props.images[0].src}
							alt={props.images[0].alt || 'alt'}
							width={800}
							height={800}
						/>
						{/*
						<button onClick={() => nextImage()}>
							<ArrowRightIcon className='w-6 h-6 absolute right-0' />
						</button>
						<button onClick={() => lastImage()}>
							<ArrowLeftIcon className='w-6 h-6 absolute left-0' />
                </button>*/}
					</div>
				)}
			</div>
		</div>
	);
}
