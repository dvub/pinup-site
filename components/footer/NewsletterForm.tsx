import React from 'react';

export default function NewsletterForm() {
	const [email, setEmail] = React.useState('');
	return (
		<div>
			{/* newsletter submission form */}
			<form className=''>
				<div className='flex justify-between my-1 border-2 border-black'>
					<p className='p-2 '>newsletter</p>
					<button
						className='px-2 py-1 bg-black text-white font-bold'
						type='submit'
					>
						submit
					</button>
				</div>

				<input
					type='text'
					placeholder='email...'
					className='w-full border-black border-2 p-2'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
			</form>
		</div>
	);
}
