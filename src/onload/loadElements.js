import Hit from '../img/hit.svg';
import Killed from '../img/killed.svg';
import GH from '../img/github-mark.svg';

function createBoards() {
    const playerBoard = document.querySelector('#player');
    const opponentBoard = document.querySelector('#opponent');

    const list = [playerBoard, opponentBoard];
    let player = false;
    list.forEach(user => {
        player = !player;
        for (let i = 1; i <= 10; i++) {
            for (let x = 1; x <= 10; x++) {
                let box = document.createElement('div');
                box.classList.add('r' + i);
                box.classList.add('c' + x);
                player ? box.classList.add('player-square') : box.classList.add('opponent-square');
                user.appendChild(box);
            }
        }
    })
}

function loadLegend() {
    const hitLegend = document.querySelector('#hit-legend');
    const killedLegend = document.querySelector('#killed-legend');

    hitLegend.src = Hit;
    killedLegend.src = Killed;
}

function addGHLogo() {
    const gh = new Image();
    gh.src = GH;
    const lnk = document.createElement('a');
    lnk.href = 'https://github.com/xadvent/battleship';
    lnk.id = 'github';
    lnk.appendChild(gh);
    document.querySelector('#header').appendChild(lnk);
}

export default () => {
    createBoards();
    loadLegend();
    addGHLogo();
}