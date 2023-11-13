import { Player, Computer } from "./classes/users";
import GameBoard from "./classes/Gameboard";
import { findSquare, getCoordinatesFromClassList } from "./path-finding/coordinates";

export default () => {
    const playerBoard = new GameBoard();
    const computerBoard = new GameBoard();

    // Assigning Opponents with the 'new' keyword
    const player = Player(computerBoard);
    const computer = Computer(playerBoard);

    // Assuming placeShip needs only the starting coordinate and length
    playerBoard.placeShip([1, 1], [1, 2]);
    computerBoard.placeShip([1, 1], [1, 2]);

    let turn = 'player';

    document.querySelectorAll('.opponent-square').forEach(square => {
        square.addEventListener('click', makeTurn);
    });

    function makeTurn(event) {
        if (turn !== 'player') return;

        const coordinate = getCoordinatesFromClassList(event.target.classList);
        player.attack(coordinate);

        // Unbinding click event to prevent multiple moves in a single turn
        document.querySelectorAll('.opponent-square').forEach(square => {
            square.removeEventListener('click', makeTurn);
        });

        updateBoardDisplay(computerBoard); // 'coordinates' changed to 'coordinate'
        turn = 'computer';

        setTimeout(computerTurn, 500); // Timeout set for 50ms
    }

    function computerTurn() {
        computer.attack();

        updateBoardDisplay(playerBoard);

        // Rebinding click events for the player's next turn
        document.querySelectorAll('.opponent-square').forEach(square => {
            square.addEventListener('click', makeTurn);
        });
        turn = 'player'; // Ensure consistent use of case
    }

    function updateBoardDisplay(board) {
        for (let ship of board.main) {
            for (let i = 0; i < ship.hits.length; i++) {
                if(ship.hits[i]) {
                    let square = findSquare(ship.coordinates[i], 'opponent')
                    square.classList.add('hit')
                }
            }
        }
        if(board.allSunk()) return alert('winner')
    }
}

// Ensure this function is actually used or remove it
function getHits(main) {
    let hits = []

    main.forEach(ship => {
        const hitIndex = ship.hits
        const coordinates = ship.coordinates

        for (let i = 0; i < ship.hits.length; i++) {
            if (hitIndex[i] == true) {
                let square = findSquare(coordinates[i])
                hits.push(square)
            }
        }
    })
    hits.forEach(hit => hit.classList.add('hit'))
    return hits
}

