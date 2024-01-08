import { hedvig } from '@/lib/fontLoader';
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Home | PINUP',
	description: '..',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={hedvig.className}>
			<body>{children}</body>
		</html>
	);
}
