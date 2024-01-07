import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	return Response.json({
		data: 'pong!',
		note: 'this is a secret! if you found it, good job! ~dvub',
		hint: "if you found this secret, here's another! try visiting the /secret page. :)",
	});
}
