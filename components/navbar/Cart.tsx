import Link from 'next/link';
import { Button } from '../ui/button';

export default function Cart() {
	return (
		<Button variant='link' className='text-md m-0' aria-label='go to cart'>
			<Link href='/cart'>cart</Link>
		</Button>
	);
}
