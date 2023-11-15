import { Player, Computer } from "./classes/users";
import GameBoard from "./classes/Gameboard";
import { getCoordinatesFromClassList } from "./path-finding/coordinates";
import Song from './sounds/epic.mp3'

const epic = new Audio(Song)
window.addEventListener('click', song)
function song() {
    epic.play();
    epic.volume = '0.5';
}

epic.addEventListener('ended', () => {
    epic.currentTime = 0;
    epic.play();
}, false)

export default () => {
    const displayTurn = document.querySelector('#turn')

    const playerBoard = new GameBoard('player');
    const computerBoard = new GameBoard('opponent');

    const player = Player(computerBoard);
    const computer = Computer(playerBoard);

    playerBoard.placeShip([4, 4], [2, 4]);
    playerBoard.placeShip([7, 6], [7, 7])
    computerBoard.placeShip([1, 1], [1, 2]);
    computerBoard.placeShip([5, 3], [3, 3])

    let turn = 'player';
    displayTurn.textContent = 'Whenever you\'re ready click a square.'

    document.querySelectorAll('.opponent-square').forEach(square => square.addEventListener('click', makeTurn))

    function makeTurn(event) {
        if (turn !== 'player') return;
        const coordinate = getCoordinatesFromClassList(event.target.classList);
        player.attack(coordinate);
        
        document.querySelectorAll('.opponent-square').forEach(square => square.removeEventListener('click', makeTurn));

        let check = computerBoard.displayHits();
        if (check.status) {
            displayTurn.textContent = check.message();
            return
        } else {
            turn = 'computer';
            displayTurn.textContent = "Opponent's Turn.";
            setTimeout(computerTurn, 1500);

            const addDots = setInterval(() => {
                displayTurn.textContent += '.'
            }, 550);
            setTimeout(() => {
                clearInterval(addDots);
            }, 1500);
        }
    }

    function computerTurn() {
        computer.attack();
        let check = playerBoard.displayHits();
        if (check.status){
            displayTurn.textContent = check.message()
            return
        } else {
        document.querySelectorAll('.opponent-square').forEach(square => square.addEventListener('click', makeTurn));
        turn = 'player';
        displayTurn.textContent = 'Your turn!';
        }
    }
}
