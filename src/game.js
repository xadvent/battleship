import { addPlayerListeners } from "./path-finding/coordinates";

export default async function game(){
    let playerMoves = []
    let computerMoves = []
    let reRun = (() =>{

    })()
    await addPlayerListeners()
    .then((inp) =>{
        return inp
    })
    .catch((message) =>{
        alert(message);
        return false
    })
}

async function playerTurn() {
    await addPlayerListeners()
    .then((inp) => {
        return inp
    })
    .catch(message => {
        alert(message)
        return false
    })
}