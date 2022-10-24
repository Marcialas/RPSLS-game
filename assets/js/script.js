
const message = document.getElementById("message");
const computerScore = document.getElementById('comp_score');
const playerScore = document.getElementById('user_score');
let playerScoreCount = 0;
let computerScoreCount = 0;

let gameRules = {
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}

function playGame(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5); 
    let comp_choice = choices[randomNumber];


    document.getElementById("compChoice").innerHTML = `Computer choose <span>${comp_choice.toUpperCase()}</span>`;  
    document.getElementById("userChoice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;


	console.log('player input', input, 'computer choice', comp_choice);
    switch(gameRules[comp_choice][input]) {
        case 'win':
            message.innerText = `You win`;
            message.style.cssText = "background-color: rgb(7, 162, 40)";
            playerScoreCount++;
            playerScore.innerHTML = `${playerScoreCount}`;
            break;
        case 'lose':
            message.innerText = `You lose`;
            message.style.cssText = "background-color: rgb(200, 16, 22)";
            computerScoreCount++;
            computerScore.innerHTML = `${computerScoreCount}`;
            break;
        case 'draw':
            message.innerText = `You draw`;
            message.style.cssText = "background-color: rgb(100, 100, 100)";
            break;   
    }
}

// reset button /   

function reset() {
    computerScoreCount = 0;
    computerScore.innerHTML = `${computerScoreCount}`;
    playerScoreCount = 0;
    playerScore.innerHTML = `${playerScoreCount}`;
    message.innerText = '';
}

