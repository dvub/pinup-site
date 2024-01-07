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

	const [ballSpeed, setBallSpeed] = React.useState({ x: 3, y: -3 });

	const handleKeyDown = (e) => {
		e.preventDefault(); // Prevent default key event behavior

		if (e.key === 'ArrowUp' && paddleY > 0) {
			setPaddleY(paddleY - 10);
		} else if (e.key === 'ArrowDown' && paddleY < 290) {
			setPaddleY(paddleY + 10);
		}
	};

	React.useEffect(() => {
		const updateGame = () => {
			// Update ball position
			setBallCoordinates((prevState) => ({
				y: ballCoordinates.y + ballSpeed.y,
				x: ballCoordinates.x + ballSpeed.x,
			}));

			// Ball collisions with walls
			if (ballCoordinates.x >= 390) {
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
				console.log('hit top!');
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
				console.log('hit bottom');
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
				setScore(score + 1);
			}
		};

		const gameLoop = setInterval(updateGame, 16);

		return () => {
			clearInterval(gameLoop);
		};
	}, [ballCoordinates, ballSpeed, paddleY]);

	return (
		<div>
			<p>{score}</p>
			<div
				tabIndex={0}
				onKeyDown={handleKeyDown}
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
