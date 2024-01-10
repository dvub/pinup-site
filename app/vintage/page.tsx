import ComingSoon from '@/components/ComingSoon';
import ItemPanel from '@/components/ItemPanel';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';

export default function Page() {
	return (
		<main>
			<Navbar />
			<div className='m-2'>
				<h1 className='text-6xl my-2'>Vintage</h1>
				{/* <p>...</p> */}
				<ItemPanel type='v' numItems={10000} />
			</div>
		</main>
	);
}
