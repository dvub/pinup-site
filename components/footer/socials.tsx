import Link from 'next/link';

export default function Socials() {
	return (
		<div className='p-5'>
			<Link
				href='https://www.instagram.com/byseanhayes/'
				rel='noopener noreferrer'
				target='_blank'
			>
				<p>instagram</p>
			</Link>
		</div>
	);
}
