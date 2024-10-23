
function toggle() {
    let q = document.querySelectorAll('#nightify')
    if(q.length) {
        q[0].parentNode.removeChild(q[0])
        return false
    }
    var h = document.getElementsByTagName('head')[0],
        s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'nightify');
    s.appendChild(document.createTextNode('html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #fff;} .line-content {background-color: #fefefe;}'));
    h.appendChild(s); 
    return true
}

toggle() // woa! everything is dark!

// create function getComputerChoice
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3); // put random number in random
   // IF random number equals 0, return word "rock"
   if (random === 0) {
   return console.log("rock");
   }
   // IF random number equals 1, return word "paper"
   else if (random === 1) {
    return console.log("paper");
   }
   // IF neither those numbers, return word "scissors"
   else {return console.log("scissors")}

}
getComputerChoice(); // Calls function

// Create function named getHumanChoice
function getHumanChoice(){

   // Ask user for rock, paper, or scissors
   let userPrompt = prompt("rock, paper, or scissors?");
   return userPrompt; // Returns user choice.

}
// getHumanChoice(); // Calls function -- testing if it works

let humanScore = 0; // Store zero inside human score
let computerScore = 0; // Store zero inside computer score

// Create function called play round
    function playRound(humanChoice,computerChoice){
        humanChoice.toLowerCase(); // Converts human choice to lower case
    if (humanChoice === "rock" || computerChoice === "paper"){
        computerScore++; // Increment computer score
        return console.log("computer wins")

}   else if (humanChoice === "rock" || computerChoice === "scissors") {
    humanScore++; // Increment human score
    return console.log("human wins");}

    else if (humanChoice === "rock" || computerChoice === "rock") {
        return console.log("tie");
    }
    else if (humanChoice === "paper" || computerChoice === "rock") {
        humanScore++; //Increment human score
        return console.log("human wins");
    }

    else if (humanChoice === "paper" || computerChoice === "paper") {
        return console.log("tie");
    }
    else if (humanChoice === "paper" || computerChoice === "scissors") {
        computerScore++; // Increment computer score
        return console.log("computer wins");
    }
    else if (humanChoice === "scissors" || computerChoice === "rock") {
        computerScore++; // Increment computer score
        return console.log("computer wins");
    }
    else if (humanChoice === "scissors" || computerChoice === "paper") {
        humanScore++; //Increment human score
        return console.log("human wins");
    }
    else if (humanChoice === "scissors" || computerChoice === "scissors") {
        return console.log("tie");
    }
    }
let computerSelection = getComputerChoice(); // Store computer choice in variable
let humanSelection = getHumanChoice(); // Store human choice in variable

playRound(humanSelection,computerSelection) // Call play round to start