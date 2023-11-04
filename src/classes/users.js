export function Player(otherBoard) {
    const attack = (coordinates) => {
        otherBoard.receiveAttack(coordinates)
    }

    return {
        attack
    }
}

export function Computer(otherBoard){
    let previousAttacks = [];

    const attack = () => {
        let coordinates = [];
        while(previousAttacks.includes(coordinates) || coordinates == []){
            coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        }

        otherBoard.receiveAttack(coordinates);
        previousAttacks.push(coordinates);
    }

    return {
        attack
    }
}
