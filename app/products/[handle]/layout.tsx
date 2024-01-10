import { hedvig } from '@/lib/fontLoader';
import '../../globals.css';

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
