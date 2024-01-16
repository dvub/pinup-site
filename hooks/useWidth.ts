'use client';
import * as React from 'react';
// the code for this function was largely adapted from here:
// https://stackoverflow.com/questions/62954765/how-to-do-conditional-rendering-according-to-screen-width-in-react
// so thanks!! :)
export default function useWidth() {
	const [state, setState] = React.useState({
		width: 0,
		breakpoints: {
			medium: 1100,
			small: 800,
		},
	});
	React.useLayoutEffect(() => {
		setState((prevState) => ({
			...prevState,
			width: window.innerWidth,
		}));

		const handleResizeWindow = () => {
			setState((prevState) => ({
				...prevState,
				width: window.innerWidth,
			}));
		};
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);
	return state;
}
