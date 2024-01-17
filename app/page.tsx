import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ItemPanel from '@/components/ItemPanel';
import { Section } from '@/components/home/Section';
import { getVintageTag } from '@/lib/variables';
import Image from 'next/image';
import { getDisplayImages } from '@/lib/shopify';
import type { Metadata } from 'next';
import MainBanner from '@/components/home/MainBanner';

export const metadata: Metadata = {
	title: 'Home - Pinup',
	description:
		'Created through an admiration for the garments of the past, pinup is a modern homage to classic Americana and Japanese artisanship. Classic clothing for the contemporary palette.',
};

// TODO: fix mobile navbar animation :(

// TODO:
// finish product page (image navigation) - DONE
// improve product-not-found page thing - DONE
// create 404 page - DONE
// create checkout - DONE
// error handling for server actions
// improve item page - DONE
// final polish - IN PROGRESS
// testing - IN PROGRESS
// available text on itempanel moves when text wraps - DONE
// cart icon to text - DONE
// add shadcn for image carousel - DONE

// round corners of sharp stuff i guess - IN PROGRESS
// fix caching issues to maximize performance
// add metadata exports like title, desc, etc. - DONE
// -> improve accessibility - WIP - NEED TO LABEL BUTTONS - ALMOST DONE
// only 20 products showing on vintage page :( - easy fix DONE
// fix issues on cart page
// fix perms w/ sean - reinstall app maybe
// finalize front page
// fix clear cart page - add finalization

// add notifications (toasts, etc. with shadcn )
// REFACToR AND CLEAN CODE - WIP
// improve documentation - WIP
// improve logging - WIP

// TAKE A BREAK!

// force dynamic feels wrong
// mayube figure out a way to cache here?
export const dynamic = 'force-dynamic';
export default async function Page() {
	const vintageTag = getVintageTag();
	// TODO: remove ()!
	const images = await getDisplayImages(vintageTag);
	const error = images === undefined;

	// TODO: fix
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<div className='w-full '>
				<MainBanner src={images![0].src} alt={images![0].alt} />
				<ItemPanel type={vintageTag} numItems={5} />
				{/*
				<div className='SMALL-SECTIONS w-full lg:flex xl:flex'>
					<div className='h-[50vh] w-full'>
						<Section
							images={undefined}
							error={error}
							wide={false}
							title='production'
							href='/production'
						/>
					</div>

					<div className='h-[50vh] w-full'>
						<Section
							images={undefined}
							error={error}
							wide={false}
							title='reworked'
							href='/reworked'
						/>
					</div>
				</div>
				*/}
				<div className='w-full h-screen flex justify-center items-center bg-gray-200'>
					<h1 className='text-black text-xl text-center'>
						production & reworked coming soon <br /> stay tuned :)
					</h1>
				</div>
			</div>
			<Footer />
		</div>
	);
}
