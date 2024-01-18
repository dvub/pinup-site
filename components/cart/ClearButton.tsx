import { localStorageKeywords } from '@/lib/constants';
import { Button } from '../ui/button';

export default function ClearCheckoutButton(props: { setCheckout: any }) {
	const handleClearCheckout = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		localStorage.removeItem(localStorageKeywords.checkoutId);
		localStorage.removeItem(localStorageKeywords.checkoutUrl);
		props.setCheckout(undefined);
	};
	return (
		<Button
			variant='secondary'
			onClick={async (e) => {
				await handleClearCheckout(e);
			}}
		>
			clear checkout
		</Button>
	);
}
