import { cormorantGaramond } from '@/app/layout';
import Link from 'next/link';

export default function ImageLink(props: {
	href: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className='relative'>
			<Link href={props.href}>
				<div
					className={`${cormorantGaramond.className} absolute top-10 left-10 p-2 text-2xl text-black bg-white`}
				>
					<h1>{props.title}</h1>
				</div>
				{props.children}
			</Link>
		</div>
	);
}
