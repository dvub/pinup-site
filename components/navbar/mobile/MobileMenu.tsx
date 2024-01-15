import React from 'react';
import { DropdownButton } from './DropdownButton';
import { DropdownMenu } from './DropdownMenu';
import Instagram from '../Instagram';
import Cart from '../Cart';
import Title from '../Title';

export default function MobileMenu() {
	const [openNav, setOpenNav] = React.useState(false);

	return (
		<div>
			<div className='relative z-50 flex justify-between p-3 items-center text-xl'>
				<div className='flex gap-3 items-center'>
					<DropdownButton setOpenNav={setOpenNav} openNav={openNav} />
					<Title />
				</div>
				<div className='flex gap-3 items-center'>
					<Cart />
					<Instagram />
				</div>
			</div>
			<DropdownMenu openNav={openNav} />
		</div>
	);
}
