import NavbarItem from './navbarItem';
import Link from 'next/link';
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import useWidth from '../../hooks/useWidth';
import { Transition } from '@headlessui/react';
import SlideWrapper from '../slideWrapper';
import FadeWrapper from '../fadeWrapper';

function Title() {
	return <Link href='/'>pinup</Link>;
}

export default function Navbar() {
	// ... ermmm
	const { width, breakpoints } = useWidth();

	const [openNav, setOpenNav] = React.useState(false);
	const [clicked, setClicked] = React.useState(false);
	const [hover, setHover] = React.useState(false);
	React.useEffect(() => {
		if (width > breakpoints.medium) {
			setOpenNav(true);
		}
		if (width <= breakpoints.medium) {
			setOpenNav(false);
		}
	}, [width, breakpoints]);

	return (
		<nav
			className={` bg-white w-full lg:text-xl md:text-lg text-sm z-50 sticky top-0`}
			style={{ transition: 'height 2s' }}
		>
			{width >= breakpoints.medium && (
				<nav className={'flex items-center nowrap p-3 justify-between'}>
					<div className='flex gap-10'>
						<Title />
						<ul className='flex gap-5'>
							<NavbarItem text='production' link='/production' />
							<NavbarItem text='vintage' link='/vintage' />
							<NavbarItem text='reworked' link='/reworked' />
							<NavbarItem text='about' link='about' />
						</ul>
					</div>
					<button className='flex gap-2'>
						<ShoppingBagIcon className='w-6 h-6' /> <p>0</p>
					</button>
				</nav>
			)}

			{width < breakpoints.medium && (
				<div>
					<div className='relative z-50 flex justify-between p-5'>
						<Title />
						<button
							onClick={() => {
								setOpenNav(!openNav);
							}}
							onPointerDown={() => {
								setClicked(true);
							}}
							onPointerUp={() => {
								setClicked(false);
							}}
							onPointerOver={() => {
								setHover(true);
							}}
							onPointerLeave={() => {
								setHover(false);
								if (clicked) setClicked(false);
							}}
						>
							<Bars3Icon
								className={`
                ${
					openNav ? 'rotate-90' : 'rotate-0'
				}  w-9 h-9 text-black transition-width transition-height ease-in-out transition-transform duration-500`}
							/>
						</button>
					</div>

					<Transition show={openNav}>
						<SlideWrapper translate={'-translate-y-32'}>
							<div className='bg-white fixed top-0 left-0 w-full h-auto px-10 z-0'>
								<FadeWrapper>
									<nav className='my-2'>
										<div>
											<ul className="list-['→']">
												<NavbarItem
													text='production'
													link='/production'
												/>
												<NavbarItem
													text='vintage'
													link='/vintage'
												/>
												<NavbarItem
													text='reworked'
													link='/reworked'
												/>
												<NavbarItem
													text='about'
													link='/about'
												/>
											</ul>
										</div>
									</nav>
								</FadeWrapper>
							</div>
						</SlideWrapper>
					</Transition>
				</div>
			)}
		</nav>
	);
}
