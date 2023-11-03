import Player from "./player";

export default class Computer extends Player {
    constructor(locations) {
        super(locations);
        this.user = 'opponent'
    }
};