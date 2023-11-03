export function getCoordinatesFromClassList(lst) {
        let [row, column] = [lst[0].substring(1), lst[1].substring(1)];
        return [parseInt(row, 10), parseInt(column, 10)];
}

export function findSquare(arr, user) {
        user = user || false
        const [x, y] = [arr[0], arr[1]];
        let result;
        if (user) {
                result = document.querySelector(`#${user}>.r${x}.c${y}`);
        } else {
                result = document.querySelector(`.r${x}.c${y}`);
        }
        return result || null;
}

export function addPlayerListeners() {
        const allOpponentSquares = document.querySelectorAll('.opponent-square');
        allOpponentSquares.forEach(square => {
                square.addEventListener('click', makeTurn);
        })
}

export function verifySquare(coordinateClasses) {
        let squareStates = ['hit', 'empty', 'killed']
        for (let x of coordinateClasses) {
                if (squareStates.includes(x)) return null
        }
        return true
}

// Placeholder function
function makeTurn(event) {
        const coordinate = getCoordinatesFromClassList(event.target.classList);

        if (!verifySquare(event.target.classList)) return null
}