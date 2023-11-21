import Image from 'next/image';

import panelPic from '../../public/home/4panels.png';
import gridPic from '../../public/home/grid pic.png';
import frontPic from '../../public/home/square front.png';
import backPic from '../../public/home/square back.png';

import useWidth from '../hooks/useWidth';
import Link from 'next/link';
import ScrollIndicator from '../scrollIndicator';
import { cormorantGaramond } from '../../app/layout';
import ImageLink from './ImageLink';
export default function ImageDisplay() {
	const { width, breakpoints } = useWidth();

	return (
		<div>
			{width <= breakpoints.medium && (
				<div>
					<ImageLink
						href='/'
						title='PRODUCTION.'
						desc='Andrew in the Patch Pocket denim for Jack. Made of a 12.5 oz Japanese Selvedge denim. Button fly using imported Japanese donut buttons. Front and back pockets inspired by 1940&#39;s denim.'
					>
						<Image
							src={gridPic}
							alt='left: close-up fit, right: close-up fabric'
							quality={100}
							sizes='1080px'
							priority
						/>
					</ImageLink>
					<ImageLink
						href='/'
						title='VINTAGE'
						desc='Patch pocket denim, front.'
					>
						<Image
							src={frontPic}
							alt='Patch pocket denim, front.'
							quality={100}
							sizes='2048px' // this will download the image in full quality
						/>
					</ImageLink>
					<ImageLink
						href='/'
						title='REWORKED. / RECYCLED.'
						desc='Patch pocket denim, BACK.'
					>
						<Image
							src={backPic}
							alt='Back view'
							quality={100}
							sizes='2048px' // this will download the image in full quality
						/>
					</ImageLink>
				</div>
			)}
			<div className='flex'>
				<div className='w-[50%]'>
					<ImageLink
						href='/'
						title='VINTAGE'
						desc='Patch pocket denim, front.'
					>
						<Image
							src={frontPic}
							alt='Patch pocket denim, front.'
							quality={100}
							sizes='2048px' // this will download the image in full quality
						/>
					</ImageLink>
					<ImageLink
						href='/'
						title='REWORKED. / RECYCLED.'
						desc='Patch pocket denim, BACK.'
					>
						<Image
							src={backPic}
							alt='Back view'
							quality={100}
							sizes='2048px' // this will download the image in full quality
						/>
					</ImageLink>
				</div>
			</div>
		</div>
	);
}
