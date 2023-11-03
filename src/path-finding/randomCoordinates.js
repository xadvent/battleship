import { findSquare, verifySquare } from "./coordinates"

function randomVector() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
}


export default function randomCoordinates(user) {
    // Supposed to return random coordinates based on user
    user = user || ''
    let coordinate = findSquare(randomVector(), user)

    // This while loop is necessary, as sometimes the square is invalid?
    while(coordinate == null){
        coordinate = findSquare(randomVector(), user)
    }

    if (!verifySquare(coordinate.classList)) return randomCoordinates(user)

    return coordinate
}
