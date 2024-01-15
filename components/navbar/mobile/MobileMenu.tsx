'use client';
import { Title } from '../navbar';
import React from 'react';
import useWidth from '@/hooks/useWidth';
import { DropdownButton } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';
import Instagram from '../Instagram';
import Cart from '../Cart';

export default function MobileMenu() {
	const { width, breakpoints } = useWidth();
	const [openNav, setOpenNav] = React.useState(false);

	return (
		<div>
			<div className='relative z-50 flex justify-between p-3 items-center text-xl'>
				<div className='flex gap-3 items-center'>
					<DropdownButton setOpenNav={setOpenNav} openNav={openNav} />
					<Title />
				</div>
				{/* cart button/information and dropdown button go here, on the right side in their own flex */}
				<div className='flex gap-3 items-center'>
					<Cart />
					<Instagram />
				</div>
			</div>
			<DropdownMenu openNav={openNav} />
		</div>
	);
}
