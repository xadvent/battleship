import Ship from "./Ship";
import { findSquare } from "../path-finding/coordinates";
import Hit from "../img/hit.svg";
import Killed from "../img/killed.svg";

export default class GameBoard {
  constructor(user) {
    this.user = user;
    this.main = [];
    this.shots = [];
  }

  placeShip(startVector, endVector) {
    const fullCoordinates = fullShipCoordinates(startVector, endVector);
    const newShip = new Ship(fullCoordinates);
    this.main.push(newShip);
    if (this.user == "player") {
      fullCoordinates.forEach((location) => {
        let square = findSquare(location, this.user);
        square.classList.add("player-ship");
      });
    }
  }

  receiveAttack(coordinates) {
    for (let ship of this.main) {
      if (ship.hit(coordinates)) {
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
          square.innerHTML = "";
          square.classList.add("hit");

          let hit = new Image();
          hit.src = Hit;
          square.appendChild(hit);
        }
      }
      if (ship.isSunk()) {
        ship.coordinates.forEach((coordinate) => {
          let square = findSquare(coordinate, this.user);
          square.innerHTML = "";

          let killed = new Image();
          killed.src = Killed;
          killed.className = "killed";

          square.appendChild(killed);
        });
      }
    }

    for (let shot of this.shots) {
      let square = findSquare(shot, this.user);
      if (
        !square.classList.contains("hit") &&
        !square.classList.contains("miss")
      ) {
        square.classList.add("miss");
      }
    }

    if (this.allSunk()) {
      return {
        status: true,
        message: () => {
          return this.user == "player"
            ? "You lost. All your ships have been sunk."
            : "You won! All enemy ships have been sunk.";
        },
      };
    }
    return {
      status: false,
    };
  }

  allSunk() {
    for (let ship of this.main) {
      if (!ship.hits.every((hit) => hit == true)) {
        return false;
      }
    }
    return true;
  }
}

function fullShipCoordinates(start, end) {
  let coordinates = [];

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
