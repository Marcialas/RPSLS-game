
const message = document.getElementById("message");

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

function clicked(input) {
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random() * 5); 
    let comp_choice = choices[randomNumber];


    document.getElementById("compChoice").innerHTML = `Computer choose <span>${comp_choice.toUpperCase()}</span>`;  
    document.getElementById("userChoice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;

    

	console.log('input', input, 'comp- choice', comp_choice);
    switch(gameRules[comp_choice][input]) {
        case 'win':
            message.innerText = `You win`;
            message.style.cssText = "background-color: rgb(128, 247, 128)";
            user_score++;
            break;
        case 'lose':
            message.innerText = `You lose`;
            message.style.cssText = "background-color: rgb(240, 124, 124)";
            comp_score++;
            break;
        case 'draw':
            message.innerText = `You draw`;
            message.style.cssText = "background-color: rgb(102, 102, 102)";
            break;   
    }
}

