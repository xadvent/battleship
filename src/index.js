import './style.css';
import loadElements from './onload/loadElements';
import game from './game';

const startButton = document.querySelector('button')
const startMenu = document.querySelector('#start-screen')

loadElements();

startButton.addEventListener('click', () => {
    startMenu.remove()
    game();
    document.querySelector('#gameContainer').classList.remove('hidden')
    startButton.removeEventListener('click', this)
})