import Image from 'next/image';

import panelPic from '../../public/home/4panels.png';
import gridPic from '../../public/home/grid pic.png';
import frontPic from '../../public/home/square front.png';
import backPic from '../../public/home/square back.png';

import useWidth from './hooks/useWidth';
import Link from 'next/link';
import ScrollIndicator from './scrollIndicator';
import { cormorantGaramond } from '../layout';
export default function ImageDisplay() {
	const { width, breakpoints } = useWidth();

	return (
		<div>
			{width <= breakpoints.medium && (
				<div className='static'>
					<ScrollIndicator />
					<div className='relative'>
						<Link
							className={`${cormorantGaramond.className} sticky p-2 text-2xl text-black bg-white`}
							href=''
						>
							VINTAGE
						</Link>
						<Image
							src={gridPic}
							alt='close-up fit, close-up fabric'
							quality={'100'}
							sizes='1080px'
						/>
					</div>
					<div className='relative'>
						<Link
							className={`${cormorantGaramond.className} absolute top-10 left-10 p-2 text-2xl text-black bg-white`}
							href=''
						>
							SHOP
						</Link>
						<Image
							src={frontPic}
							alt='Front view'
							quality={'100'}
							sizes='2048px' // this will download the image in full quality
						/>
					</div>
					<Image
						src={backPic}
						alt='Back view'
						quality={'100'}
						sizes='2048px' // this will download the image in full quality
					/>
				</div>
			)}
		</div>
	);
}
