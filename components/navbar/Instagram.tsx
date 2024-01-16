import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function Instagram() {
	return (
		<Button variant='outline' size='icon' aria-label='instagram'>
			<Link
				href='https://www.instagram.com/pinup.rags/'
				rel='noopener noreferrer'
				target='_blank'
				aria-label='instagram'
			>
				<InstagramLogoIcon className='' />
			</Link>
		</Button>
	);
}
