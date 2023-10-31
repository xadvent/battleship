export function createBoards() {
    const playerBoard = document.querySelector('#player')
    const opponentBoard = document.querySelector('#opponent')

    let list = [playerBoard, opponentBoard];
    let player = false;
    list.forEach(person => {
        player = !player
        for (let i = 1; i <= 10; i++) {
            let row = document.createElement('div');
            for (let x = 1; x <= 10; x++) {
                let box = document.createElement('div');
                box.classList.add('r' + i);
                box.classList.add('c' + x);
                if(player){
                    box.classList.add('player-square');
                } else {
                    box.classList.add('opponent-square');
                }
                row.appendChild(box);
            }
            person.appendChild(row);
        }
    })
}

export function placeShipsRandomly(option) {
    const board = document.getElementById(option);
    // This function will place ships randomly on the board on each load.
}