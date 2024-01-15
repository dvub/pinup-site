import FadeWrapper from '@/components/fadeWrapper';
import SlideWrapper from '@/components/slideWrapper';
import { Transition } from '@headlessui/react';
import NavbarItem from '../navbarItem';
import clsx from 'clsx';

export const DropdownMenu = (props: { openNav: boolean }) => {
	return (
		<div
			className={clsx(
				'bg-white absolute top-0 left-0 w-full h-auto px-10 z-40 mt-10 pt-5 border-b-gray-400 border-b-[1px] border-b-solid',
				props.openNav ? '' : 'hidden'
			)}
		>
			<nav className='mb-2 z-50'>
				<div>
					<ul className="list-['→']">
						<NavbarItem text='vintage' link='/vintage' />
						<NavbarItem text='production' link='/production' />

						<NavbarItem text='reworked' link='/reworked' />
						<NavbarItem text='about' link='/about' />
					</ul>
				</div>
			</nav>
		</div>
	);
};
