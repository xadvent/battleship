export default class Ship {
    constructor(size) {
        this.size = size;
        this.damage = 0;
    }

    hit() {
        ++this.damage;
    }

    isSunk() {
        return this.damage >= this.size ? true : false
    }
}