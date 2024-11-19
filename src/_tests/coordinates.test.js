/**
 * @jest-environment jsdom
 */

import {
	getCoordinatesFromClassList,
	findSquare,
} from "../path-finding/coordinates";
import { createBoards } from "../onload/loadElements";

beforeAll(() => {
	document.body.innerHTML = `<div id="container">
        <div id="player"></div>

        <div id="opponent"></div>
    </div>
    <div id="legend">
        <div class="legend-info">
            <img id="empty-legend" src="" alt="symbol for empty">
            <p class="legend-label">Empty waters</p>
        </div>
        <div class="legend-info">
            <img id="hit-legend" src="" alt="symbol for hit">
            <p class="legend-label">Ship hit!</p>
        </div>
        <div class="legend-info">
            <img id="killed-legend" src="" alt="symbol for killed">
            <p class="legend-label">Ship sunk!</p>
        </div>
    </div>`;

	createBoards();
});

describe("getCoordinatesFromClassList", () => {
	test("verify coordinatePuller", () => {
		expect(getCoordinatesFromClassList(["r3", "c2"])).toStrictEqual([3, 2]);
	});

	test("Using larger nums", () => {
		expect(getCoordinatesFromClassList(["R69", "C420"])).toStrictEqual([
			69, 420,
		]);
	});

	test("Final test", () => {
		const coordinate = document.querySelector(".r3.c2");
		expect(getCoordinatesFromClassList(coordinate.classList)).toStrictEqual(
			[3, 2],
		);
	});
});

describe("returnSquare", () => {
	test('return square at ([3,9], "opponent")', () => {
		let square = findSquare([3, 9], "opponent");
		square = getCoordinatesFromClassList(square.classList);
		expect(square).toEqual(getCoordinatesFromClassList(["r3", "c9"]));
	});

	test("Expecting to be null [3,11]", () => {
		let square = findSquare([3, 11]);
		expect(square).toEqual(null);
	});
});
