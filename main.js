// alert ("This is the Q & A Game!");

var qAList = [ { 
q: "Bicycles have two wheels.", a: "t" },
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

var wins = 0;

var userPickText = document.getElementById('user-pick');

document.getElementById("true").onclick = function(event,userPick) { 
    userPick = document.getElementById("true").value;
console.log("This is the True button");
console.log("This is the true button value", userPick);
};

document.getElementById("false").onclick = function(event,userPick)
{
    userPick = document.getElementById("false").value;
console.log("This is the False button");
console.log("This is the False button value", userPick);
};
// var true = ((true)onclick.true);
// console.log(qAList);
// console.log(true);
// console.log(false);


function gameStart(userPick) {

};