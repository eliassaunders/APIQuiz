var startBtnEl = document.querySelector("#startBtn");
var questionSecEl = document.querySelector("#questionSec");
var questionsEl = document.querySelector(".questions");
var answerListEl = document.querySelector(".answers");
var navEl = document.querySelector(".navBar");
var timeEl = document.querySelector(".timer");

let score = 0;

const q1 = "Whats continent is the country of Chad in?";
const q2 = "What does NASA stand for?";
const q3 = "The top layer of the ground is called the _______";
const q4 = "How many people live in pima county?";

const q1a = ["1. Antartica", "2. Russia", "3. Europe", "4. Africa"];
const q2a = ["1. National Aeronautics and Space Administration", "2. National Ace Sandwich Association", "3. It isnt an acronym", "4. Dogs"];
const q3a = ["1. Ground", "2. Crust", "3. Floor", "4. the sweet ground"];
const q4a = ["1. 1.3 million", "2. 500k", "3. Not accurate", "4. 1.1 million"];


var timer = 60;

setInterval(function() {
    if (timer === 0) {
        renderScorePage();
    }
}, 500);

var startBtnEl = function (event) {

    setInterval(function () {
        timer--;
        timeEl.textContent = "";
        timeEl.textContent = timer;
    }, 1000);

    var q1r = document.createElement("h2");
    q1r.textContent = q1;
    questionsEl.appendChild(q1r);

    let answer1 = document.createElement("button");
    answer1.textContent = q1a[0];
    answer1.onclick = function () {
        timer = timer - 10;
        renderQuestion2();
    }
    answerListEl.appendChild(answer1);

    let answer2 = document.createElement("button");
    answer2.textContent = q1a[1];
    answer2.onclick = function () {
        timer = timer - 10;
        renderQuestion2();
    }
    answerListEl.appendChild(answer2);

    let answer3 = document.createElement("button");
    answer3.textContent = q1a[2];
    answer3.onclick = function () {
        timer = timer - 10;
        renderQuestion2();
    }
    answerListEl.appendChild(answer3);

    let answer4 = document.createElement("button");
    answer4.textContent = q1a[3];
    answer4.onclick = function () {
        score = score + 10;
        renderQuestion2();
    }
    answerListEl.appendChild(answer4);

};

var renderQuestion2 = function () {

    questionsEl.textContent = "";
    answerListEl.textContent = "";

    var q2r = document.createElement("h2");
    q2r.textContent = q2;
    questionsEl.appendChild(q2r);

    let answer1 = document.createElement("button");
    answer1.textContent = q2a[0];
    answer1.onclick = function () {
        score = score + 10;
        renderQuestion3();
    }
    answerListEl.appendChild(answer1);

    let answer2 = document.createElement("button");
    answer2.textContent = q2a[1];
    answer2.onclick = function () {
        timer = timer - 10;
        renderQuestion3();
    }
    answerListEl.appendChild(answer2);

    let answer3 = document.createElement("button");
    answer3.textContent = q2a[2];
    answer3.onclick = function () {
        timer = timer - 10;
        renderQuestion3();
    }
    answerListEl.appendChild(answer3);

    let answer4 = document.createElement("button");
    answer4.textContent = q2a[3];
    answer4.onclick = function () {
        timer = timer - 10;
        renderQuestion3();
    }
    answerListEl.appendChild(answer4);
}

var renderQuestion3 = function () {
    questionsEl.textContent = "";
    answerListEl.textContent = "";

    var q3r = document.createElement("h2");
    q3r.textContent = q3;
    questionsEl.appendChild(q3r);

    let answer1 = document.createElement("button");
    answer1.textContent = q3a[0];
    answer1.onclick = function () {
        timer = timer - 10;
        renderQuestion4();
    }
    answerListEl.appendChild(answer1);

    let answer2 = document.createElement("button");
    answer2.textContent = q3a[1];
    answer2.onclick = function () {
        score = score + 10;
        renderQuestion4();
    }
    answerListEl.appendChild(answer2);

    let answer3 = document.createElement("button");
    answer3.textContent = q3a[2];
    answer3.onclick = function () {
        timer = timer - 10;
        renderQuestion4();
    }
    answerListEl.appendChild(answer3);

    let answer4 = document.createElement("button");
    answer4.textContent = q3a[3];
    answer4.onclick = function () {
        timer = timer - 10;
        renderQuestion4();
    }
    answerListEl.appendChild(answer4);
};

var renderQuestion4 = function () {
    questionsEl.textContent = "";
    answerListEl.textContent = "";

    var q4r = document.createElement("h2");
    q4r.textContent = q4;
    questionsEl.appendChild(q4r);

    let answer1 = document.createElement("button");
    answer1.textContent = q4a[0];
    answer1.onclick = function () {
        score = score + 10;
        renderScorePage();
    }
    answerListEl.appendChild(answer1);

    let answer2 = document.createElement("button");
    answer2.textContent = q4a[1];
    answer2.onclick = function () {
        timer = timer - 10;
        renderScorePage();
    }
    answerListEl.appendChild(answer2);

    let answer3 = document.createElement("button");
    answer3.textContent = q4a[2];
    answer3.onclick = function () {
        timer = timer - 10;
        renderScorePage();
    }
    answerListEl.appendChild(answer3);

    let answer4 = document.createElement("button");
    answer4.textContent = q4a[3];
    answer4.onclick = function () {
        timer = timer - 10;
        renderScorePage();
    }
    answerListEl.appendChild(answer4);
};

var renderScorePage = function () {
    questionsEl.textContent = "";
    answerListEl.textContent = "";
    questionSecEl.textContent = "";

    var previous = document.createElement("p");
    previous.textContent = "Previous Score: " + localStorage.getItem("score");
    answerListEl.appendChild(previous)

    var scoreRead = document.createElement("p");
    scoreRead.textContent = score;
    questionSecEl.appendChild(scoreRead);

    var scoreSub = document.createElement("textarea");
    scoreSub.setAttribute("id", "scorer");
    scoreSub.setAttribute("placeholder", "Enter Name");
    scoreSub.setAttribute("width", "400px");
    scoreSub.setAttribute("height", "100px");
    questionSecEl.appendChild(scoreSub);

    var sendscorebtn = document.createElement("button");
    sendscorebtn.textContent = "Submit";
    questionSecEl.appendChild(sendscorebtn);
    sendscorebtn.onclick = function () {
        var scorep = document.createElement("p");
        scorep.textContent = "Thanks " + scoreSub.value + ". Your score is " + score;
        answerListEl.appendChild(scorep);
        localStorage.setItem("score", scorep.textContent);
    }
};

navEl.addEventListener("click", startBtnEl);