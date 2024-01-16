import ComingSoon from '@/components/ComingSoon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Coming Soon - Reworked - Pinup',
	description:
		'This page is under construction. Stay updated on our social media and come back later.',
};

export default function Page() {
	return (
		<div>
			<ComingSoon pageName='Reworked' />
		</div>
	);
}
