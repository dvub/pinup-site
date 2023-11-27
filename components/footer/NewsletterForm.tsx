import React from 'react';

export default function NewsletterForm() {
	const [email, setEmail] = React.useState('');
	return (
		<div>
			<div className='flex justify-between border-2 border-black'>
				<p className='p-2'>Newsletter</p>
				<button className='px-2 py-1 bg-black text-white font-bold'>
					Submit
				</button>
			</div>

			<div className='my-1'>
				{/* newsletter submission form */}
				<form>
					<input
						type='text'
						placeholder='Email...'
						className='w-full border-black border-2 p-2'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</form>
			</div>
		</div>
	);
}
