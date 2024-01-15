import Navbar from '@/components/navbar/navbar';

export default function About() {
	return (
		<div className='w-screen h-screen overflow-hidden'>
			<Navbar />
			<div className='mx-[10vw] my-10'>
				<h1 className='text-3xl my-2'>About</h1>
				<hr />
				<div className='text-sm lg:max-w-[50%] '>
					<p className='my-2'>
						Pinup Rags was founded by Nate Forchelli and began with
						selling thoughtfully curated vintage clothing locally
						and online. Nate was eventually joined by designer Sean
						Hayes in order to venture into producing ethically made
						garments inspired by the very same vintage pieces they
						shared a love for. <br />
						Created through an admiration for the garments of the
						past, pinup is a modern homage to classic Americana and
						Japanese artisanship. Classic clothing for the
						contemporary palette.
						<br /> We strive to use the most sustainable,
						long-lasting materials and construction methods
						available to us and embrace the most forward-thinking
						developments in textiles, manufacturing, packaging, and
						fulfillment. <br />
						Pinup is currently based in Los Angeles, California.
					</p>
				</div>
			</div>
		</div>
	);
}
