export const Loading = () => {
	// TODO: make random loading text
	const loadingText = 'threads otw';

	return (
		<div className='w-full h-[50rem] flex justify-center items-center'>
			{/* TODO: match height to the total page height when loaded.  */}
			<div>
				<h1 className='text-2xl text-right'>...loading</h1>
				<h1 className='text-4xl'>pinup rags</h1>
				<p className='py-1'>{loadingText}</p>
			</div>
		</div>
	);
};
