'use client';
import { cormorantGaramond } from '@/lib/fontLoader';
import Navbar from '../../components/navbar/navbar';

export default function Shop() {
	return (
		<div>
			<Navbar />
			<div
				className={`${cormorantGaramond.className} pt-24 flex justify-center items-center w-screen h-screen`}
			>
				<h1 className={'text-center text-6xl'}>Coming Soon..</h1>
				<p className='text-lg'>PINUP RAGS.</p>
			</div>
		</div>
	);
}
