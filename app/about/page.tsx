'use client';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

export default function About() {
	return (
		<div className='w-screen h-screen overflow-hidden'>
			<Navbar />
			<div className='m-2 '>
				<h1 className='text-6xl my-2'>About</h1>
				<div className='text-sm lg:max-w-[50%] '>
					<p className='my-2'>
						PINUP is a clothing company founded by Sean Hayes and
						Nate Forchelli.
					</p>
					<p className='my-2'>
						Created through years of admiration for the garments of
						the past, PINUP is a modern homage to classic Americana
						and Japanese artisanship.
					</p>
					<p className='my-2'>
						We strive to use the most sustainable, long-lasting
						materials and construction methods available to us and
						embrace the most forward-thinking developments in
						textiles, manufacturing, packaging, and fulfillment.
					</p>
					<p className='my-2'>
						Embracing the wear and tear of worn garments the name
						PINUP is an ode to clothing that must be “pinned up”.
						Contemporary clothing with a classic philosophy, a nod
						to the old while looking to the future.
					</p>
					<p className='my-2'>
						PINUP is currently based in Los Angeles, California.
					</p>
				</div>
			</div>
			<div className='absolute bottom-0 w-full'>
				<Footer />
			</div>
		</div>
	);
}
