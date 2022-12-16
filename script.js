// elements
const img = document.getElementById("img");
const input = document.getElementById("input");
const messageUI = document.getElementById("message");
const moveOn = document.getElementById("move-on");

// questions
const imgs = [""]; // img srcs
const answers = [""]; // answers to each question
let questionIndex = 0;

function question() {
	moveOn.style.display = "none";
	messageUI.innerText = "What is the above picture showing?"
	img.src = answers[questionIndex];
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
	if (answer === answers[questionIndex]) {
		messageUI.innerText = "Correct!";
		moveOn.style.display = "block";
		questionIndex++;
	}
	else messageUI.innerText = "Wrong, try again."
});

moveOn.addEventListener("click", question);