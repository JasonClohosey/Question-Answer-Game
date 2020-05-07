// alert ("This is the Q & A Game!");

var questions = [ 
    { q: "Bicycles have two wheels.", a: "t" },
    { q: "Diesel can be lit with a match.", a: "f" },
    { q: "Car warrantys will cover car accidents.", a: "f" },
    { q: "A 30 year old car is considered a classic.", a: "t" },
    { q: "Low octane fuel is more explosive.", a: "t" },
    { q: "Your flashers should be on in the rain.", a: "f" },
    { q: "A dragstrip is 1320 feet", a: "t" },
    { q: "Allseason tires are okay on ice.", a: "f" },
    { q: "Your headlights must be on at night.", a: "t" },
    { q: "e85 is 15% gasoline.", a: "t" }
];

var gamePts = 0;
var questionIndex = 0;

// var userPick = document.getElementById("user-pick");
    
document.getElementById("true").onclick = function(event, userPick) {
    userPick = document.getElementById("true").value;
    console. log("this is the true button");
    console.log("this is the true button value ", userPick);
    runGame(userPick);
};

document.getElementById("false").onclick = function(event, userPick) {
    userPick = document.getElementById("false").value;
    console. log("this is the false button");
    console.log("this is the false button value ", userPick);
    runGame(userPick);
};


function renderQuestion() {

    if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
      else {
          document.querySelector("#question").innerHtml = "Game Over!";
          document.querySelector("#gamePts").innerHTML = "Final Score: " + gamePts + " out of " + questions.length;
      }
     
};

function updateScore() {
    document.querySelector("#gamePts").innerHTML = "Game Points: " + gamePts;
  }

  renderQuestion();
  updateScore();

function runGame(userPick) {

     if (questionIndex === questions.length) {
    return;
  }
 

  if (userPick === "t" || userPick === "f") {

    if (userPick === questions[questionIndex].a) {
        document.getElementById("answer").textContent = "Correct!";
        
        gamePts++;
        updateScore();
      }
      
      else {
        document.getElementById("answer").textContent = "Wrong!";
      }

    questionIndex++;
    renderQuestion();
    
};

};
// reset();

// function reset() {
//     if (questions[questionIndex] === questions.length - 1){
//         gamePts = 0;
//     }
// }

