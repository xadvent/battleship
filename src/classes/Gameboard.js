import Ship from "./Ship";

export default class GameBoard {
    constructor(locationObj) {
        this.coordinates = locationObj || {};
        this.shots = [];
    }

    placeShip(coordinates, size) {
        if (!this.coordinates[coordinates]) {
            this.coordinates[coordinates] = new Ship(size);
        }
    }

    receiveAttack(coordinates) {
        const square = this.coordinates[coordinates];
        if (square && !this.shots.includes(coordinates)) {
            square.hit();
            this.shots.push(coordinates)
        } else {
            this.shots.push(coordinates);
        }
    }

    allSunk() {
        for (let [k, v] of Object.entries(this.coordinates)) {
            if (v.isSunk() == false) return false;
        }
        return true;
    }
}