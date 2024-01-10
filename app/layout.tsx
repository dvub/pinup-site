import { hedvig } from '@/lib/fontLoader';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={hedvig.className}>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
