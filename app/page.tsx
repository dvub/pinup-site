import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ItemPanel from '@/components/ItemPanel';
import { Section } from '@/components/home/Section';
import { getVintageTag } from '@/lib/variables';
import { Image } from 'shopify-buy';
import { getDisplayImages } from '@/lib/shopify';
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
// add metadata exports like title, desc, etc.
// -> improve accessibility
// only 20 products showing on vintage page :( - easy fix DONE
// fix issues on cart page
// fix perms w/ sean - reinstall app maybe
// finalize front page

// REFACToR AND CLEAN CODE - WIP
// improve documentation - WIP
// improve logging

// TAKE A BREAK!

// force dynamic feels wrong
// mayube figure out a way to cache here?
export const dynamic = 'force-dynamic';
export default async function Page() {
	const vintageTag = getVintageTag();
	// TODO: remove ()!
	const images = (await getDisplayImages(vintageTag))!;
	// TODO: fix
	const error = undefined;
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<div className='w-full h-full'>
				<div className='h-screen'>
					<Section
						images={images}
						error={error}
						wide={true}
						title='vintage'
						href='/vintage'
					/>
				</div>
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
				<div className='w-full h-screen flex justify-center items-center bg-gray-400'>
					<h1 className='text-white/50 text-xl text-center'>
						production & reworked coming soon <br /> stay tuned :)
					</h1>
				</div>
			</div>
			<Footer />
		</div>
	);
}
