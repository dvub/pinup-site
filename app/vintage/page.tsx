import ItemPanel from '@/components/ItemPanel';
import Navbar from '@/components/navbar/navbar';
import { getVintageTag } from '@/lib/variables';

export const dynamic = 'force-dynamic';
export default function Page() {
	const tag = getVintageTag();
	return (
		<main>
			<Navbar />
			<div className=''>
				<h1 className='m-2 text-xl'>showing: all vintage products</h1>
				<ItemPanel type={tag} numItems={10000} />
			</div>
		</main>
	);
}
