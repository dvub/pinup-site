import React, { useEffect } from 'react';
import useWidth from '../hooks/useWidth';
import Socials from './socials';
import { Transition } from '@headlessui/react';
import SlideWrapper from '../slideWrapper';
import FadeWrapper from '../fadeWrapper';
import NewsletterForm from './NewsletterForm';
import MobileMenu from './MobileMenu';
import { cormorantGaramond } from '@/lib/fontLoader';

export default function Footer() {
	const [status, setStatus] = React.useState(true);
	return (
		<div
			className={`${cormorantGaramond.className} bg-white text-sm lg:text-xl md:text-md fixed bottom-0 w-full h-auto z-50`}
		>
			<Transition show={status}>
				<SlideWrapper translate='translate-y-32'>
					{/* wrapper div to animate the background in addition to the content, otherwise looks shit */}
					<div className='bg-white fixed bottom-0 left-0 w-full h-auto px-5 py-2'>
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
			{/* small menu for mobile views - contains text, button to expand menu (above) */}
			<MobileMenu status={status} setStatus={setStatus} />
		</div>
	);
}
