import React, { useEffect } from 'react';
import useWidth from '../../hooks/useWidth';
import Socials from './socials';
import { Transition } from '@headlessui/react';
import SlideWrapper from '../slideWrapper';
import FadeWrapper from '../fadeWrapper';
import NewsletterForm from './NewsletterForm';
import MobileMenu from './MobileMenu';

const MainView = (props: { status: boolean }) => {
	return (
		<Transition show={props.status}>
			<SlideWrapper translate='translate-y-32'>
				{/* wrapper div to animate the background in addition to the content, otherwise looks shit */}
				<div className=' w-full h-auto px-5 py-2 bg-blue-500'>
					<FadeWrapper>
						{/* Expanded menu content on small devices - basically uh */}
						<div className='flex w-auto justify-between h-auto'>
							{/* newsletter */}
							<NewsletterForm />
							{/* list of socials, TODO: update to include everything */}
							<Socials />
						</div>
					</FadeWrapper>
				</div>
			</SlideWrapper>
		</Transition>
	);
};

export default function Footer() {
	const [status, setStatus] = React.useState(true);
	const { width, breakpoints } = useWidth();
	return (
		<div className={`footer relative text-md w-full h-auto z-50`}>
			{width > breakpoints.medium && <MainView status={status} />}
			{/* small menu for mobile views - contains text, button to expand menu (above) */}
			{width <= breakpoints.medium && (
				<MobileMenu status={status} setStatus={setStatus} />
			)}
		</div>
	);
}
