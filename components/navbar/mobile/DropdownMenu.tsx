import FadeWrapper from '@/components/fadeWrapper';
import SlideWrapper from '@/components/slideWrapper';
import { Transition } from '@headlessui/react';
import NavbarItem from '../navbarItem';

export const DropdownMenu = (props: { openNav: boolean }) => {
	return (
		<Transition show={props.openNav}>
			<SlideWrapper translate={'-translate-y-16'}>
				<div className='bg-white fixed top-0 left-0 w-full h-auto px-10 z-50 mt-10 pt-5'>
					<FadeWrapper>
						<nav className='mb-2 z-50'>
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
									<NavbarItem text='about' link='/about' />
								</ul>
							</div>
						</nav>
					</FadeWrapper>
				</div>
			</SlideWrapper>
		</Transition>
	);
};
