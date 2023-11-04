import { Player, Computer } from "./classes/users";
import GameBoard from "./classes/Gameboard";

// Making Boards
const playerBoard = new GameBoard()
const computerBoard = new GameBoard()

// Assigning Opponents
const player = Player(computerBoard)
const computer = Computer(playerBoard)

// Placing Ships
playerBoard.placeShip([1,1], 1)
computerBoard.placeShip([5,5], 1)

export default () => {
    while (!playerBoard.allSunk() || !computerBoard.allSunk()) {

    }
}