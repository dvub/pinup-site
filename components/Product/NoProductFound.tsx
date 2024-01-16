export default function NoProduct() {
	return (
		<div className='flex w-screen h-screen overflow-hidden justify-center items-center text-center'>
			<div>
				<h1 className='text-2xl my-2'>No such product :(</h1>
				<p>
					Try again with a different product handle or come back
					later.
				</p>
			</div>
		</div>
	);
}
