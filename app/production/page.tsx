'use client';
import ItemPanel from '@/components/ItemPanel';
import Navbar from '../../components/navbar/navbar';

import useWidth from '../../hooks/useWidth';

export default function Custom() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
			<h1 className='w-full text-6xl text-center'>Production</h1>
			<p>Some stuff about production pieces...</p>
			<ItemPanel type='production' />
		</main>
	);
}
