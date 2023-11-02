export function getCoordinatesFromClassList(lst) {
        let [row, column] = [lst[0].substring(1), lst[1].substring(1)];
        return [parseInt(row, 10), parseInt(column, 10)];
}

export function findSquare(arr) {
        const [x, y] = [arr[0], arr[1]];
        let result = document.querySelector(`.r${x}.c${y}`);
        return result || null;
}

export function addPlayerListeners() {
        const allOpponentSquares = document.querySelectorAll('.opponent-square');
        allOpponentSquares.forEach(square => {
                square.addEventListener('click', makeTurn);
        })
}

function verifySquare(coordinateClasses){
        let squareStates = ['hit', 'empty', 'killed']
        for(let x of coordinateClasses){
                if (squareStates.includes(x)) return null
        }
        return true
}

function makeTurn(event) {
        const coordinate = getCoordinatesFromClassList(event.target.classList);

        // Replace this with error message handling in the future!
        if(!verifySquare(event.target.classList)) return null

        // Will have something like: opponent.register(coordinate)
        // For now, this is just a filler
}