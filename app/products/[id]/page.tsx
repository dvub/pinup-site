'use client';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import Client from 'shopify-buy';
import Bags from '@/public/home/bags.jpg';
import Fenville from '@/public/home/fennville-front.jpg';
export default function Page({ params }: { params: { handle: string } }) {
	const addToCart = () => {};

	return (
		<div>
			<Navbar />
			<div className='mx-10 flex my-10'>
				<div className='left w-[50%] flex justify-center'>
					<Image src={Bags} alt='' />
				</div>
				<div className='right w-[50%]'>
					<h1 className='text-3xl'>Test Item</h1>
					<h1 className='text-2xl'> 100.0 USD</h1>

					<h1 className='mt-10 text-2xl'>Details</h1>
					<p className='mr-[20%]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Consectetur adipiscing elit duis
						tristique. Sed ullamcorper morbi tincidunt ornare massa.
						Congue nisi vitae suscipit tellus mauris a diam
						maecenas. Id leo in vitae turpis massa. Vestibulum morbi
						blandit cursus risus. Nulla malesuada pellentesque elit
						eget gravida. Pellentesque dignissim enim sit amet. Id
						cursus metus aliquam eleifend mi in nulla posuere
						sollicitudin. Aliquet eget sit amet tellus cras
						adipiscing enim eu turpis. Mattis vulputate enim nulla
						aliquet porttitor lacus. Amet porttitor eget dolor morbi
						non arcu risus quis. Orci dapibus ultrices in iaculis
						nunc sed augue. Facilisi etiam dignissim diam quis enim
						lobortis scelerisque fermentum dui. Faucibus turpis in
						eu mi. Tincidunt ornare massa eget egestas purus viverra
						accumsan. Amet tellus cras adipiscing enim eu turpis
						egestas pretium aenean. Scelerisque eleifend donec
						pretium vulputate sapien nec. Risus nec feugiat in
						fermentum posuere urna nec tincidunt. Dis parturient
						montes nascetur ridiculus mus mauris vitae ultricies.
						Arcu non odio euismod lacinia at. Eu non diam phasellus
						vestibulum lorem sed risus. Et netus et malesuada fames
						ac turpis egestas. Gravida rutrum quisque non tellus.
						Platea dictumst quisque sagittis purus sit amet
						volutpat. Eu nisl nunc mi ipsum faucibus vitae aliquet
						nec ullamcorper. Mauris ultrices eros in cursus. Eget
						nullam non nisi est sit amet facilisis magna etiam.
						Semper quis lectus nulla at. Imperdiet nulla malesuada
						pellentesque elit eget gravida cum sociis.
					</p>
					<div>
						<button
							className='bg-black text-white px-4 py-1 float-right my-10'
							onClick={() => {
								addToCart();
							}}
						>
							add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
