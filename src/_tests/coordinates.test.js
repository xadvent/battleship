/**
 * @jest-environment jsdom
 */

import { getCoordinatesFromClassList } from "../path-finding/coordinates"

describe('getCoordinatesFromClassList', () => {
    test('verify coordinatePuller', () => {
        expect(getCoordinatesFromClassList(['r3', 'c2'])).toStrictEqual([3, 2])
    })

    test('Using larger nums', () => {
        expect(getCoordinatesFromClassList(["R69", "C420"])).toStrictEqual([69, 420])
    })

    test('Final test.', () => {
        let body = document.querySelector('body')
        body.classList.add('r3')
        body.classList.add('c2')
        body.classList.add('body')
        expect(getCoordinatesFromClassList(body.classList)).toStrictEqual([3, 2])
    })
})

describe('placeShipsRandomly', () =>{

})
