import Link from 'next/link';

export default function NavbarItem(props: { text: string; link: string }) {
	return (
		<li className='flex-initial hover:text-gray-300 duration-200 cursor-pointer active'>
			<Link href={props.link}>{props.text}</Link>
		</li>
	);
}
