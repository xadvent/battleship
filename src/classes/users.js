export function Player(otherBoard) {
    const attacked = []

    const attack = (coordinates) => {
        otherBoard.receiveAttack(coordinates)
        attacked.push(coordinates)
    }


    return {
        attack
    }
}

export function Computer(otherBoard) {
    let previousAttacks = new Set;

    const attack = () => {
        let coordinates = [];
        while (previousAttacks.has(coordinates) || coordinates.length == 0) {
            coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        }

        otherBoard.receiveAttack(coordinates);
        previousAttacks.add(coordinates);
    }

    return {
        attack
    }
}
