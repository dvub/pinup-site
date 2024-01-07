'use client';
import ItemPanel from '@/components/ItemPanel';
import Navbar from '../../components/navbar/navbar';

import useWidth from '../../hooks/useWidth';

export default function Custom() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
			<div className='m-2'>
				<h1 className='text-6xl'>Production</h1>
				<p>Some stuff about production pieces...</p>
				<ItemPanel type='production' />
			</div>
		</main>
	);
}
