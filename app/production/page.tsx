import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Coming Soon - Production - Pinup',
	description:
		'This page is under construction. Stay updated on our social media and come back later.',
};

export default function Custom() {
	return (
		<main>
			<ComingSoon pageName='Production' />
		</main>
	);
}
