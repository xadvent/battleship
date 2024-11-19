export function getCoordinatesFromClassList(lst) {
	let [row, column] = [lst[0].substring(1), lst[1].substring(1)];
	return [parseInt(row, 10), parseInt(column, 10)];
}

export function findSquare(arr, user) {
	const [x, y] = [arr[0], arr[1]];
	let result = document.querySelector(`#${user}>.r${x}.c${y}`);
	return result || null;
}
