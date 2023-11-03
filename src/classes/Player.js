export default class Player {
    constructor(locations) {
        this.locations = locations
    }

    // This function completly fucks with everything... DELETE THIS
    scanSides(vector) {
        let spaces = []
        const possibleMoves = [1, -1]
        const [x, y] = [vector[0], vector[1]]

        for (let i of possibleMoves) {
            let moveX = x + i
            if (moveX <= 10 && moveX >= 0) spaces.push([moveX, y])
        }

        for (let j of possibleMoves) {
            let moveY = y + j
            if (moveY <= 10 && moveY >= 0) spaces.push([x, moveY])
        }

        return spaces
    }
}
