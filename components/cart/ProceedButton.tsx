import { navigate } from '@/app/cart/action';
import { localStorageKeywords } from '@/lib/constants';
import { Button } from '../ui/button';

export default function ProceedToCheckout(props: { checkoutUrl: string }) {
	const handleClick = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		localStorage.removeItem(localStorageKeywords.checkoutId);
		localStorage.removeItem(localStorageKeywords.checkoutUrl);
		// TODO: make this better
		await navigate(props.checkoutUrl);
	};
	return (
		<Button
			onClick={async (e) => await handleClick(e)}
			aria-label='proceed to checkout'
		>
			proceed to checkout
		</Button>
	);
}
