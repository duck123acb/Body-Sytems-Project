// elements
const img = document.getElementById("img");
const input = document.getElementById("input");
const messageUI = document.getElementById("message");
const moveOn = document.getElementById("move-on");

// questions
const answers = [
	"brain", 
	"spinal", 
	"Central Nervous System", 
	"Peripheral Nervous System", 
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
	"Bronchi"
];
let questionIndex = 0;

function question() {
	moveOn.style.display = "none";
	messageUI.innerText = "What is being shown above?"
	img.src = `img/${answers[questionIndex].toLowerCase()}.png`;
	img.style.width = "20vw";
	input.focus();
}

function getInput() {
	const answer = input.value;
	input.value = "";
	return answer;
}

question();

input.addEventListener("keydown", (event) => {
	if (event.key !== "Enter") return;
	
	const answer = getInput();
	if (answer === answers[questionIndex].toLowerCase()) {
		messageUI.innerText = "Correct!";
		moveOn.style.display = "block";
		questionIndex++;
	}
	else messageUI.innerText = "Wrong, try again."
});

moveOn.addEventListener("click", question);