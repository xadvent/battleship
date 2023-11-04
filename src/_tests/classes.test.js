import GameBoard from "../classes/Gameboard";
import Ship from "../classes/Ship";
import { Player, Computer } from "../classes/users";

describe("Ship Class", () => {
    const coordinates = [[1, 1], [1, 2], [1, 3]]
    const ship = new Ship(coordinates)

    test('Should be all false', () => {
        let arr = []
        ship.hits.forEach(entry => arr.push(entry))
        expect(arr.every(thing => thing == false)).toBe(true)
    })

    test('Ship.hit should add one to itself', () => {
        ship.hit([1, 1])
        expect(ship.hits[0]).toBe(true)
    })

    test('Ship.hit should be 2', () => {
        ship.hit([1, 2])
        expect(ship.hits[1]).toBe(true)
    })

    test('Ship shouldn\'t be sunk', () => {
        expect(ship.isSunk()).toBe(false)
    })

    test('Ship should be sunk', () => {
        ship.hit([1, 3])
        expect(ship.isSunk()).toBe(true)
    })
})

describe('Gameboard.js', () => {
    const board = new GameBoard()
    let coordinates = [[1, 1], [1, 2], [1, 3]]

    test('Ship should be placed into coordinates', () => {
        board.placeShip([1, 1], [1, 3])
        let coordinates = [[1, 1], [1, 2], [1, 3]]
        let ship = new Ship(coordinates)

        expect(board.main[0]).toStrictEqual(ship)
    })

    test('Ship should be hit and not sunk', () => {
        board.receiveAttack([1, 1])
        expect(board.main[0].hits[0]).toBe(true)
        expect(board.main[0].isSunk()).toBe(false)
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
        board.placeShip([5, 5], [5, 6])
        board.receiveAttack([5, 5])
        board.receiveAttack([5, 6])


        expect(board.main[1].isSunk()).toBe(true)
    })

    test('allSunk == false: Ships still alive', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1, 1], [1, 1]) // Simulating sunk ship

        expect(newBoard.allSunk()).toBe(false)
    })

    test('allSunk == true: No ships left', () => {
        const newBoard = new GameBoard();
        newBoard.placeShip([1, 1], [1, 1]) // Simulating sunk ship
        newBoard.receiveAttack([1, 1])

        newBoard.placeShip([4, 4], [4, 4])
        newBoard.receiveAttack([4, 4])

        newBoard.placeShip([6, 4], [6, 4])
        newBoard.receiveAttack([6, 4])

        newBoard.placeShip([7, 4], [7, 4])
        newBoard.receiveAttack([7, 4])

        expect(newBoard.allSunk()).toBe(true)
    })

    test('allSunk == false: no ships sunk', () =>{
        const newBoard = new GameBoard()
        newBoard.placeShip([1,1], [1,2]);
        expect(newBoard.allSunk()).toBe(false)
    })
})

describe('Player', () => {
    const board = new GameBoard()
    board.placeShip([1, 1], [1, 1])
    board.placeShip([1, 2], [1, 2])
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

    test('Computer should make random move', () => {
        computer.attack()
        computer.attack()

        expect(board.shots).toHaveLength(2)
    })

    test('Computer shouldn\'t repeat shots', () => {
        for (let x = 0; x < 98; x++) computer.attack()

        // Attacking every single square on the board
        expect(board.shots).toHaveLength(100)
    })
})