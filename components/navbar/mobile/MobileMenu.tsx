'use client';
import { Cart } from '../navbar';
import { Title } from '../navbar';
import React from 'react';
import useWidth from '@/hooks/useWidth';
import { DropdownButton } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';

export default function MobileMenu() {
	const { width, breakpoints } = useWidth();
	const [openNav, setOpenNav] = React.useState(false);

	return (
		<div>
			<div className='relative z-50 flex justify-between p-3 items-center align-middle text-2xl'>
				<Title />
				{/* cart button/information and dropdown button go here, on the right side in their own flex */}
				<div className='flex gap-3 items-center'>
					<Cart />
					<DropdownButton setOpenNav={setOpenNav} openNav={openNav} />
				</div>
			</div>
			<DropdownMenu openNav={openNav} />
		</div>
	);
}
