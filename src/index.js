import "./style.css";
import loadElements from "./onload/loadElements";
import game from "./game";

const startButton = document.querySelector("#start");
const startMenu = document.querySelector("#start-screen");
const optionsButton = document.querySelector("#options");

optionsButton.addEventListener("click", () => {
	alert("This doesn't work yet...");
});

loadElements();

startButton.addEventListener("click", () => {
	startMenu.remove();
	game();
	document.querySelector("#gameContainer").classList.remove("hidden");
	startButton.removeEventListener("click", this);
});
