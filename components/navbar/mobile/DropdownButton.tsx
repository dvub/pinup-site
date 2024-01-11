import { Bars3Icon } from '@heroicons/react/24/solid';

export const DropdownButton = (props: {
	setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
	openNav: boolean;
}) => {
	return (
		<button
			onClick={() => {
				props.setOpenNav(!props.openNav);
			}}
		>
			<Bars3Icon
				className={`
${
	props.openNav ? 'rotate-90' : 'rotate-0'
}  w-6 h-6 text-black transition-width transition-height ease-in-out transition-transform duration-500`}
			/>
		</button>
	);
};
