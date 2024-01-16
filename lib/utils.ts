import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Image } from 'shopify-buy';
import { ImageObject } from './types';
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getImageObject(image: Image): ImageObject {
	return {
		src: image.src || image.url,
		width: image.width,
		height: image.height,
		alt: image.altText || 'no alt text provided',
		id: image.id,
	};
}
