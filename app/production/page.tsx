'use client';
import Navbar from '../../components/navbar';
import { comfortaa } from '../layout';

import useWidth from '../../components/hooks/useWidth';

export default function Custom() {
	const { width, breakpoints } = useWidth();
	return (
		<main>
			<Navbar />
		</main>
	);
}