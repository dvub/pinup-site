import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export const DropdownButton = (props: {
	setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
	openNav: boolean;
}) => {
	return (
		<Button
			onClick={() => {
				props.setOpenNav(!props.openNav);
			}}
			variant='outline'
			size='icon'
		>
			<HamburgerMenuIcon
				className={`
${
	props.openNav ? 'rotate-90' : 'rotate-0'
}  text-black transition-width transition-height ease-in-out transition-transform duration-500`}
			/>
		</Button>
	);
};
