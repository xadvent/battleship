export function Player(otherBoard) {
	const attacked = [];

	const attack = (coordinates) => {
		otherBoard.receiveAttack(coordinates);
		attacked.push(coordinates);
	};

	return {
		attack,
	};
}

export function Computer(otherBoard) {
	let previousAttacks = [];

	const arraysEqual = (a, b) => {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	};

	const attack = () => {
		let coordinates = [];
		while (
			coordinates.length == 0 ||
			previousAttacks.some((prev) => arraysEqual(prev, coordinates))
		) {
			coordinates = [
				1 + Math.floor(Math.random() * 10),
				1 + Math.floor(Math.random() * 10),
			];
		}

		otherBoard.receiveAttack(coordinates);
		previousAttacks.push(coordinates);
		coordinates = [];
	};

	return {
		attack,
	};
}
