// --- javascript logic ---

// 1. create an array of possibles answers (classic + fun/sarcastic)
const answers = [
    "it is certain.",
    "Yes definitely.",
    "chances are good.",
    "sign point to yes.",
    "my source say no.",
    "chances are not so good.",
    "very doubtful.",
    "404 error: fate not found",
    "only if you do a little dance first",
    "you are about die!",
    "the stars say...meh",
    "ask your dog, they know better.",
    "computer say no.",
    "I m on a coffee break ask later.",
    "yes, but you wont like the consequences.",
    "you need to consult a docter.",
    "your wifi connection to distiny is weak.",
    "fate is currently stuck...",
    "chances are great... for someone else.",

];

// 2. select the important html elements
const getanswerbutton = document.querySelector("#get-answer-btn");
const answerdisplay = document.querySelector("#answer");

//3. the function that runs on click
function showrandomanswer() {
    const randomindex = Math.floor(Math.random() * answers.length);
    const randomanswer = answers[randomindex];
    answerdisplay.textContent = randomanswer;
}

//4 we use variable 'getanswerbutton' we defined above.
getanswerbutton.addEventListener("click", showrandomanswer);