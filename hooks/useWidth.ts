'use client';
import * as React from 'react';

// the code for this function was largely adapted from here:
// https://stackoverflow.com/questions/62954765/how-to-do-conditional-rendering-according-to-screen-width-in-react
// so thanks!! :)

export default function useWidth() {
	// here
	const [state, setState] = React.useState({
		width: 0,
		breakpoints: {
			medium: 1100, // the width of the side-by-side picture on its own
			small: 800,
		},
	});
	React.useEffect(() => {
		// Set the initial width
		setState((prevState) => ({
			...prevState,
			width: window.innerWidth,
		}));

		const handleResizeWindow = () => {
			// Update the width on window resize
			setState((prevState) => ({
				...prevState,
				width: window.innerWidth,
			}));
		};

		// Subscribe to window resize event on component mount
		window.addEventListener('resize', handleResizeWindow);

		// Unsubscribe on component unmount
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []); // Empty dependency array ensures that the effect runs only once on mount

	return state;
}
