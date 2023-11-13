import Ship from "./Ship";
import { findSquare } from "../path-finding/coordinates";

export default class GameBoard {
    constructor(user) {
        this.user = user
        this.main = [];
        this.shots = [];
    }

    placeShip(startVector, endVector) {
        const fullCoordinates = fullShipCoordinates(startVector, endVector);
        const newShip = new Ship(fullCoordinates);
        this.main.push(newShip);
        if(this.user == 'player') {
            fullCoordinates.forEach(location => {
                let square = findSquare(location, this.user)
                square.classList.add('player-ship')
            })
        }
    }

    receiveAttack(coordinates) {
        for (let ship of this.main) {
            if (ship.hit(coordinates)) {
                console.log('hit')
                break;
            }
        }
        this.shots.push(coordinates);
    }

    displayHits() {
        for (let ship of this.main) {
            for (let i = 0; i < ship.hits.length; i++) {
                if (ship.hits[i]) {
                    let square = findSquare(ship.coordinates[i], this.user);
                    square.classList.add('hit');
                }
            }
        }

        for (let shot of this.shots) {
            let square = findSquare(shot, this.user)
            if (!square.classList.contains('hit')) square.classList.add('miss')
        }

        if (this.allSunk()) {
            alert(this.user[0].toUpperCase() + this.user.substring(1) + ' has lost! All their ships have been sunk.')
            return true
        }
        return false
    }

    allSunk() {
        for (let ship of this.main) {
            if (!ship.hits.every(hit => hit == true)) {
                return false;
            }
        }
        return true;
    }
}

function fullShipCoordinates(start, end) {
    let coordinates = []

    const [x1, y1] = start;
    const [x2, y2] = [end[0], end[1]];

    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    const steps = Math.max(dx, dy);

    const xIncrement = (x2 - x1) / steps;
    const yIncrement = (y2 - y1) / steps;

    let [x, y] = [x1, y1];
    for (let i = 0; i <= steps; i++) {
        coordinates.push([x, y]);

        x += xIncrement;
        y += yIncrement;
    }

    return coordinates;
}