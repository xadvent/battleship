import GameBoard from "../classes/Gameboard";
import Ship from "../classes/Ship";

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
        let shots = [[2, 2], [3, 3], 4, 4]
        shots.forEach(shot => {
            board.receiveAttack(shot)
        })

        expect(board.shots).toStrictEqual(shots)
    })

    test('Ship should be hit twice and sunk', () => {
        board.placeShip([5, 5], 2)
        board.receiveAttack([5, 5])
        board.receiveAttack([5, 5])

        expect(board.coordinates[[5, 5]].isSunk()).toBe(true)
    })

    test('allSunk == false; Ships still alive', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1,1], 0) // Simulating sunk ship
        newBoard.placeShip([4,4], 2)

        expect(newBoard.allSunk()).toBe(false)
    })

    test('allSunk == true; No ships left', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1,1], 0) // Simulating sunk ship
        newBoard.placeShip([4,4], 0)
        newBoard.placeShip([6,4], 0)
        newBoard.placeShip([7,4], 0)

        expect(newBoard.allSunk()).toBe(true)
    })
})