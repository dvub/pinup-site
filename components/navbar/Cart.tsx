import Link from 'next/link';
import { Button } from '../ui/button';

export default function Cart() {
	return (
		<Button variant='link' className='text-md m-0'>
			<Link href='/cart'>cart</Link>
		</Button>
	);
}
