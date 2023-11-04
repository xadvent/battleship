export default class Ship {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.hits = new Array(coordinates.length).fill(false);
    }

    hit(coordinate) {
        const index = this.coordinates.findIndex(coord => coord[0] === coordinate[0] && coord[1] === coordinate[1]);
        if(index > -1){
            this.hits[index] = true;
        }
    }

    isSunk() {
        return this.hits.every(hit => hit);
    }
}