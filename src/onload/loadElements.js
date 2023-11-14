import Hit from '../img/hit.svg'
import Killed from '../img/killed.svg'

function createBoards() {
    const playerBoard = document.querySelector('#player');
    const opponentBoard = document.querySelector('#opponent');

    const list = [playerBoard, opponentBoard];
    let player = false;
    list.forEach(user => {
        player = !player
        for (let i = 1; i <= 10; i++) {
            for (let x = 1; x <= 10; x++) {
                let box = document.createElement('div');
                box.classList.add('r' + i);
                box.classList.add('c' + x);
                if (player) {
                    box.classList.add('player-square');
                } else {
                    box.classList.add('opponent-square');
                }
                user.appendChild(box);
            }
        }
    })
}

export function placeShipsRandomly() {
    // This function will place ships randomly on the board on each load.
}

function loadLegend() {
    const hitLegend = document.querySelector('#hit-legend');
    const killedLegend = document.querySelector('#killed-legend');

    hitLegend.src = Hit;
    killedLegend.src = Killed;
}

export default () => {
    createBoards();
    loadLegend();
}