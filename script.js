// elements
const startScreen = document.getElementById("start");
const endScreen = document.getElementById("end");
const gameScreen = document.getElementById("main");
const img = document.getElementById("img");
const input = document.getElementById("input");
const messageUI = document.getElementById("message");
const moveOn = document.getElementById("move-on");
const timeUI = document.getElementById("timer");
const startGame = document.getElementById("start-game");

// questions
const answers = [
	"brain", 
	"spinal", 
	"Peripheral Nervous System", 
	"Central Nervous System", 
	"Parasympathetic", 
	"Autonomic", 
	"Neuron", 
	"Sympathetic",
	"Nasal Cavity",
	"Larynx",
	"Pharynx",
	"Trachea",
	"Oxygen",
	"Carbon Dioxide",
	"Diaphragm",
	"Intercostal Muscles",
	"Bronchioles",
	"Alveoli",
	"Bronchi",
	"c",
	"a"
];
let questionIndex = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let isPlaying = false;

function question() {
	if (questionIndex === answers.length) {
		isPlaying = false;
		endScreen.innerHTML = `<h1>You did it!</h1><br><br><h2>Your time was: ${hrs}:${mins}:${secs}.</h2>`;
		startGame.style.display = "none";
		gameScreen.style.display = "none";
		endScreen.style.display = "block";
	}
	else {
		input.style.display = "block";
		moveOn.style.display = "none";
		messageUI.innerText = "What is being shown above?"
		img.src = `img/${answers[questionIndex].toLowerCase()}.png`;
		img.style.width = "20vw";
		input.focus();
	}
}

function getInput() {
	const answer = input.value;
	input.value = "";
	return answer;
}

input.addEventListener("keydown", (event) => {
	if (event.key !== "Enter") return;
	
	const answer = getInput();
	if (answer === answers[questionIndex].toLowerCase()) {
		messageUI.innerText = "Correct!";
		input.style.display = "none";
		moveOn.style.display = "block";
		questionIndex++;
	}
	else messageUI.innerText = "Wrong, try again."
});
startGame.addEventListener("click", () => {
	isPlaying = true;
	startScreen.style.display = "none";
	gameScreen.style.display = "block";
	endScreen.style.display = "none";
	question();
});
moveOn.addEventListener("click", question);

setInterval(() => {
	if (!isPlaying) return;

	secs++
	if (secs >= 60) {
		secs = 0;
		mins++;
	}
	if (mins >= 60) {
		mins = 0;
		hrs++;
	}
	const time = `${hrs}:${mins}:${secs}`;
	timeUI.innerText = time;
}, 1000);

startGame.style.display = "block";
gameScreen.style.display = "none";
endScreen.style.display = "none";