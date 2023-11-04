import GameBoard from "../classes/Gameboard";
import Ship from "../classes/Ship";
import { Player, Computer } from "../classes/users";

describe("Ship Class", () => {
    const ship = new Ship(3)

    test('Ship.hit should add one to itself', () => {
        ship.hit()
        expect(ship.damage).toBe(1)
    })

    test('Ship.hit should be 2', () => {
        ship.hit()
        expect(ship.damage).toBe(2)
    })

    test('Ship should be sunk', () => {
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
})

describe('Gameboard.js', () => {
    const board = new GameBoard()

    test('Ship should be placed into coordinates', () => {
        board.placeShip([1, 1], 3)
        const ship = new Ship(3)
        expect(board.coordinates[[1, 1]]).toStrictEqual(ship)
    })


    test('Ship should be hit', () => {
        board.receiveAttack([1, 1])
        const ship = new Ship(3)
        ship.hit() // ship.damage == 2

        expect(board.coordinates[[1, 1]]).toStrictEqual(ship)
    })

    test('Missed shots should be recorded', () => {
        const newBoard = new GameBoard()
        let shots = [[2, 2], [3, 3], [4, 4]]
        shots.forEach(shot => {
            newBoard.receiveAttack(shot)
        })

        expect(newBoard.shots).toStrictEqual(shots)
    })

    test('Ship should be hit twice and sunk', () => {
        board.placeShip([5, 5], 2)
        board.receiveAttack([5, 5])
        board.receiveAttack([5, 5])

        expect(board.coordinates[[5, 5]].isSunk()).toBe(true)
    })

    test('allSunk == false: Ships still alive', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1, 1], 0) // Simulating sunk ship
        newBoard.placeShip([4, 4], 1)

        expect(newBoard.allSunk()).toBe(false)
    })

    test('allSunk == true: No ships left', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1, 1], 0) // Simulating sunk ship
        newBoard.placeShip([4, 4], 0)
        newBoard.placeShip([6, 4], 0)
        newBoard.placeShip([7, 4], 0)

        expect(newBoard.allSunk()).toBe(true)
    })
})

describe('Player', () => {
    const board = new GameBoard()
    board.placeShip([1, 1], 1)
    board.placeShip([1, 2], 1)
    const player = Player(board)

    test('player should attack board', () => {
        player.attack([1, 2])
        player.attack([1, 1])
        expect(board.allSunk()).toBe(true)
    })

})

describe('Computer', () => {
    const board = new GameBoard()
    const computer = Computer(board)
    board.placeShip([1, 1], 1)
    board.placeShip([1, 2], 1)

    test('Computer should make random move', () => {
        computer.attack()
        computer.attack()

        expect(board.shots).toHaveLength(2)
    })
})