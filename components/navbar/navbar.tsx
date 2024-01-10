'use client';
import NavbarItem from './navbarItem';
import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import useWidth from '../../hooks/useWidth';
import MobileMenu from './mobile/MobileMenu';
/*
export const Title = () => {
	return (
		<Link href='/' className='flex items-center'>
			<div className=' w-5 h-5 bg-black rounded-full z-10 flex justify-center items-center'>
				<p className='text-white'>p</p>
			</div>
			<p>inup</p>
		</Link>
	);
};*/

export const Title = () => {
	return (
		<Link href='/' className=''>
			pinup
		</Link>
	);
};

export const Cart = () => {
	return (
		<Link href='/cart' className='flex'>
			<ShoppingBagIcon className='w-6 h-6' /> <p>0</p>
		</Link>
	);
};

const MainView = () => {
	return (
		<nav className={'flex items-center nowrap p-3 justify-between'}>
			<div className='flex gap-5'>
				<Title />
				<ul className='flex gap-5'>
					<NavbarItem text='vintage' link='/vintage' />
					<NavbarItem text='production' link='/production' />
					<NavbarItem text='reworked' link='/reworked' />
					<NavbarItem text='about' link='about' />
				</ul>
			</div>
			<Cart />
		</nav>
	);
};

export default function Navbar() {
	const { width, breakpoints } = useWidth();

	return (
		<nav
			className={`w-full text-md z-30 sticky top-0 bg-white border-b-gray-400 border-b-[1px] border-b-solid`}
			style={{ transition: 'height 2s' }}
		>
			{/* conditional rendering based on view */}
			{width >= breakpoints.medium && <MainView />}
			{width < breakpoints.medium && <MobileMenu />}
		</nav>
	);
}
