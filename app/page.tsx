import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import AllSections from '@/components/home/AllSections';
import { getDisplayImages } from '@/lib/shopify';

// font is broken on redirect

export default function Page() {
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<AllSections />
			<Footer />
		</div>
	);
}
