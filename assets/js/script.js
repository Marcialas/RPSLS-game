/**Declare constants for DOM 
 * and possible choices
*/

const options = document.getElementById('options-item');
const playerScore = document.getElementsByClassName('player-score');
const computerScore = document.getElementsByClassName('computer-score');
const playerChoice = document.getElementsByClassName('player-choice');
const computerChoice = document.getElementsByClassName('computer-choice');
const message = document.getElementById('message');
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/** Add event listeners for all options */

for (let option of options) {
    option.addEventListener('click', function() {
        let playerChoice = this.getAttribute('data-choice');
        playGame(playerChoice);
    });
}
