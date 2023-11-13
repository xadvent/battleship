import { Player, Computer } from "./classes/users";
import GameBoard from "./classes/Gameboard";
import { findSquare, getCoordinatesFromClassList } from "./path-finding/coordinates";

export default () => {
    const playerBoard = new GameBoard();
    const computerBoard = new GameBoard();

    const player = Player(computerBoard);
    const computer = Computer(playerBoard);

    // Temporary placements to test
    playerBoard.placeShip([4, 4], [1, 4]);
    computerBoard.placeShip([1, 1], [1, 2]);

    let turn = 'player';

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

        updateBoardDisplay(computerBoard, 'opponent');
        turn = 'computer';


        setTimeout(computerTurn, 300); // Timeout set for 300ms
    }

    function computerTurn() {
        computer.attack();

        updateBoardDisplay(playerBoard, 'player');

        document.querySelectorAll('.opponent-square').forEach(square => {
            square.addEventListener('click', makeTurn);
        });

        turn = 'player';
    }

    function updateBoardDisplay(board, user) {
        for (let ship of board.main) {
            for (let i = 0; i < ship.hits.length; i++) {
                if (ship.hits[i]) {
                    let square = findSquare(ship.coordinates[i], user);
                    square.classList.add('hit');
                }
            }
        }

        if(board.allSunk()) return alert(`${user[0].toUpperCase() + user.substring(1)} has lost! All ships have been sunk.`)

        for (let shot of board.shots) {
            let square = findSquare(shot, user)
            if (!square.classList.contains('hit')) {
                square.classList.add('miss')
            }
        }
    }
}