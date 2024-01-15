'use client';
import NavbarItem from './navbarItem';
import Link from 'next/link';
import * as React from 'react';
import useWidth from '../../hooks/useWidth';
import MobileMenu from './mobile/MobileMenu';
import Instagram from './Instagram';
import Cart from './Cart';

export const Title = () => {
	return (
		<Link href='/' className=''>
			pinup
		</Link>
	);
};

const MainView = () => {
	return (
		<nav className={'flex items-center nowrap p-3 justify-between text-md'}>
			<div className='flex gap-5 items-center'>
				<Title />
				<ul className='flex gap-5'>
					<NavbarItem text='vintage' link='/vintage' />
					<NavbarItem text='production' link='/production' />
					<NavbarItem text='reworked' link='/reworked' />
					<NavbarItem text='about' link='/about' />
				</ul>
			</div>
			<div className='flex gap-5 items-center'>
				<Cart />
				<Instagram />
			</div>
		</nav>
	);
};
export default function Navbar() {
	const { width, breakpoints } = useWidth();

	return (
		<div
			className={`w-full z-50 top-0 bg-white border-b-gray-400 border-b-[1px] border-b-solid`}
			style={{ transition: 'height 2s' }}
		>
			{width >= breakpoints.medium && <MainView />}
			{width < breakpoints.medium && <MobileMenu />}
		</div>
	);
}
