import { useState, useEffect } from 'react';

export const Loading = () => {
	// a silly amount of time and effort went into this component in particular
	// i love it.

	const loadingTextOptions = [
		'',
		'pieces otw...',
		'threads otw...',
		"hopefully this doesn't take long...",
		'be right back...',
		'be back in a second!',
		'loading content...',
		'almost there...',
	];

	const rareTextOptions = [
		'dvub says hi!',
		'this text is rare!',
		'is this working?',
		'you found a hidden message!',
		'rare text = rare clothes?',
		'rare text = rare pieces?',
	];
	const [loadingText, setLoadingText] = useState('. . .');

	useEffect(() => {
		const rareChance = 0.1;
		const isRare = Math.random() <= rareChance;
		const array = isRare ? rareTextOptions : loadingTextOptions;

		const index = Math.floor(Math.random() * array.length);
		setLoadingText(array[index]);
	}, []); // Empty dependency array ensures the effect runs only once on mount

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div>
				<h1 className='text-2xl text-right'>...loading</h1>
				<h1 className='text-4xl'>pinup rags</h1>
				<p className='py-1'>{loadingText}</p>
			</div>
		</div>
	);
};
