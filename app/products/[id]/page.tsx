'use client';
import Navbar from '@/components/navbar/navbar';

export default function Page({ params }: { params: { id: string } }) {
	return (
		<div>
			<Navbar />
			<h1>{params.id} Hello Wold! </h1>
		</div>
	);
}
