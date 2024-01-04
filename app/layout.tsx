import { hedvig } from '@/lib/fontLoader';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'pinup rags | home',
	description: '..',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={hedvig.className}>{children}</body>
		</html>
	);
}
