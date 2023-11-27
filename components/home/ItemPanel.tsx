import { roboto } from '@/lib/fontLoader';
import Link from 'next/link';

import bags from '../../public/home/bags.jpg';
import Image from 'next/image';

export default function ItemPanel() {
	return (
		<div className={`${roboto.className} flex gap-5 justify-center m-3`}>
			<Link href='/'>
				<Image src={bags} alt='...' quality={100} />
				<p>Item 1</p>
				<p>$00.00</p>
			</Link>
			<div>
				<Image src={bags} alt='...' quality={100} />
				<p>Item 2</p>
				<p>$00.00</p>
			</div>
			<div>
				<Image src={bags} alt='...' quality={100} />
				<p>Item 3</p>
				<p>$00.00</p>
			</div>
			<div>
				<Image src={bags} alt='...' quality={100} />
				<p>Item 4</p>
				<p>$00.00</p>
			</div>
		</div>
	);
}
