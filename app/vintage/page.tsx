import ComingSoon from '@/components/ComingSoon';
import ItemPanel from '@/components/ItemPanel';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';
import { getVintageTag } from '@/lib/variables';

export const dynamic = 'force-dynamic';
export default function Page() {
	const tag = getVintageTag();
	return (
		<main>
			<Navbar />
			<div className='my-2'>
				<h1>vintage</h1>
				<ItemPanel type={tag} numItems={10000} />
			</div>
		</main>
	);
}
