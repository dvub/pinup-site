import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { getDisplayImages } from '@/lib/shopify';
import ItemPanel from '@/components/ItemPanel';
import { Section } from '@/components/home/Section';

// TODO: fix mobile navbar animation :(

export default async function Page() {
	const a = await getDisplayImages();
	const images = a.map((x) => x.images.map((i) => i.url)).flat();
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
				<ItemPanel type={'v'} numItems={5} />
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
					<h1 className='text-white/50 text-3xl text-center'>
						production & reworked coming soon <br /> stay tuned :)
					</h1>
				</div>
			</div>
			<Footer />
		</div>
	);
}
