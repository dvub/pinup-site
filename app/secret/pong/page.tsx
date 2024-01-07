'use client';
import * as React from 'react';
const Paddle = (props: { left: number; top: number }) => (
	<div
		style={{
			position: 'absolute',
			width: '10px',
			height: '60px',
			backgroundColor: 'white',
			left: `${props.left}px`,
			top: `${props.top}px`,
		}}
	/>
);

const Ball = (props: { left: number; top: number }) => (
	<div
		style={{
			position: 'absolute',
			width: '10px',
			height: '10px',
			backgroundColor: 'white',
			borderRadius: '50%',
			left: `${props.left}px`,
			top: `${props.top}px`,
		}}
	/>
);

export default function Page() {
	const [score, setScore] = React.useState(0);
	const [paddleY, setPaddleY] = React.useState(150);
	const [ballCoordinates, setBallCoordinates] = React.useState({
		x: 200,
		y: 150,
	});
	const [ballSpeed, setBallSpeed] = React.useState({ x: 0.5, y: -0.5 });

	const handlePointer = (event: React.PointerEvent) => {
		setPaddleY(event.clientY - 30);
	};

	const checkCollision = () => {
		// Ball collisions with walls
		if (ballCoordinates.x >= 390) {
			console.log('Hit right edge');
			setBallCoordinates((prevState) => ({
				...prevState,
				x: prevState.x - 10,
			}));
			setBallSpeed((prevState) => ({
				...prevState,
				x: -ballSpeed.x,
			}));
		}

		if (ballCoordinates.y <= 0) {
			console.log('Hit top');
			setBallCoordinates((prevState) => ({
				...prevState,
				y: prevState.y + 10,
			}));
			setBallSpeed((prevState) => ({
				...prevState,
				y: -ballSpeed.y,
			}));
		}
		if (ballCoordinates.y >= 290) {
			console.log('Hit bottom');
			setBallCoordinates((prevState) => ({
				...prevState,
				y: prevState.y - 10,
			}));
			setBallSpeed((prevState) => ({
				...prevState,
				y: -ballSpeed.y,
			}));
		}

		// Ball collisions with paddle
		const paddleTop = paddleY;
		const paddleBottom = paddleY + 60;
		const paddleLeft = 10;
		const paddleRight = 20;

		if (
			ballCoordinates.x <= paddleRight &&
			ballCoordinates.y >= paddleTop &&
			ballCoordinates.y <= paddleBottom &&
			ballCoordinates.x >= paddleLeft
		) {
			setBallSpeed((prevState) => ({
				...prevState,
				x: -ballSpeed.x,
			}));
			setBallCoordinates((prevState) => ({
				...prevState,
				x: prevState.x + 10,
			}));
			setScore((prevScore) => prevScore + 1);
		}
	};

	const updateGame = (
		coords: { x: number; y: number },
		speed: { x: number; y: number }
	) => {
		// Update ball position
		setBallCoordinates((prevState) => ({
			y: prevState.y + ballSpeed.y,
			x: prevState.x + ballSpeed.x,
		}));

		// Use requestAnimationFrame for smoother animations
		requestAnimationFrame(updateGame);
	};

	React.useEffect(() => {
		checkCollision();
	}, [ballCoordinates]);

	// Initial call to start the animation loop
	React.useEffect(() => {
		updateGame();
	}, []);

	return (
		<div>
			<p>{score}</p>
			<div
				tabIndex={0}
				onPointerMove={(e) => {
					handlePointer(e);
				}}
				style={{
					position: 'relative',
					width: '400px',
					height: '300px',
					margin: 'auto',
					backgroundColor: 'black',
				}}
			>
				<Paddle left={10} top={paddleY} />
				<Ball left={ballCoordinates.x} top={ballCoordinates.y} />
			</div>
		</div>
	);
}
