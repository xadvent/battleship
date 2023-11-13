import { Player, Computer } from "./classes/users";
import GameBoard from "./classes/Gameboard";
import { getCoordinatesFromClassList } from "./path-finding/coordinates";

export default () => {
    const displayTurn = document.querySelector('#turn')

    const playerBoard = new GameBoard('player');
    const computerBoard = new GameBoard('opponent');

    const player = Player(computerBoard);
    const computer = Computer(playerBoard);

    playerBoard.placeShip([4, 4], [1, 4]);
    computerBoard.placeShip([1, 1], [1, 2]);

    let turn = 'player';
    displayTurn.textContent = 'Whenever you\'re ready click a square.'

    document.querySelectorAll('.opponent-square').forEach(square => {
        square.addEventListener('click', makeTurn);
    });

    function makeTurn(event) {
        if (turn !== 'player') return;

        const coordinate = getCoordinatesFromClassList(event.target.classList);
        player.attack(coordinate);

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.removeEventListener('click', makeTurn);
        });

        computerBoard.displayHits()
        turn = 'computer';
        displayTurn.textContent = "Opponent's Turn..."

        setTimeout(computerTurn, 1000); 
    }

    function computerTurn() {
        computer.attack();
        playerBoard.displayHits()

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.addEventListener('click', makeTurn);
        });

        turn = 'player';
        displayTurn.textContent = 'Your turn!' 
    }
}