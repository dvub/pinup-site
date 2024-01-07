import React from 'react';
import useWidth from '../../hooks/useWidth';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';

const ExpandButton = (props: {
	status: boolean;
	setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [clicked, setClicked] = React.useState(false);
	const [hover, setHover] = React.useState(false);
	const { status, setStatus } = props;
	return (
		<button
			className={`
      ${clicked ? 'w-9 h-9 duration-[25ms]' : 'w-10 h-10'} 
      ${
			hover && !clicked ? 'w-11 h-11 duration-100' : ''
		} text-black transition-width transition-height ease-in-out`}
			onClick={() => {
				setStatus(!status);
			}}
			onPointerDown={() => {
				setClicked(true);
			}}
			onPointerUp={() => {
				setClicked(false);
			}}
			onPointerOver={() => {
				setHover(true);
			}}
			onPointerLeave={() => {
				if (clicked) setClicked(false);
				setHover(false);
			}}
		>
			{!status && <PlusCircleIcon />}
			{status && <MinusCircleIcon />}
		</button>
	);
};

export default function MobileMenu(props: {
	status: boolean;
	setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { status, setStatus } = props;
	const { width, breakpoints } = useWidth();

	// default states for different views
	React.useEffect(() => {
		if (width > breakpoints.medium) {
			setStatus(true);
		}
		if (width <= breakpoints.medium) {
			setStatus(false);
		}
	}, [width, breakpoints, setStatus]);

	return (
		<div className='flex w-full justify-between items-center py-2 px-10 z-10 h-16 bg-white'>
			<p
				className={`${
					!status ? 'opacity-100' : 'opacity-0'
				} transition-opacity duration-100 ease-in-out`}
			>
				newsletter
			</p>
			<ExpandButton status={status} setStatus={setStatus} />
			{/* info text, nothing special */}
			<p
				className={`${
					!status ? 'opacity-100' : 'opacity-0'
				} transition-opacity duration-100 ease-in-out`}
			>
				socials
			</p>
		</div>
	);
}
