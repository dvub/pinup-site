import { hedvig } from '@/lib/fontLoader';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isSiteOpen = process.env.SITE_OPEN!.toLowerCase() === 'true';
	const Closed = () => {
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				<div className='text-center'>
					<h1 className='text-2xl'>pinup</h1>
					<p className='py-1'>
						The site isn&apos;t open right now. <br /> We&apos;ll be
						back soon. Check out our socials to know about the next
						drop.
					</p>
				</div>
			</div>
		);
	};
	return (
		<html lang='en' className={hedvig.className}>
			<body>
				{!isSiteOpen && <Closed />}
				{isSiteOpen && children}
				<Analytics />
			</body>
		</html>
	);
}
