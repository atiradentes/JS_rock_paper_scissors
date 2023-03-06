
function getComputerChoice(){
    let CompChoice = Math.floor(Math.random() * 3);
    if (CompChoice == 0) {
        return ("rock");
    } else if (CompChoice == 1) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
} // essa funcao calcula qual sera a escolha do computador

function getPlayerChoice(){
    const choice = prompt("Pick your play! Rock, paper or scissors?");
    const choiceLower = choice.toLowerCase();
    return choiceLower
    playerSelection = choiceLower

} // Essa funcao define a escolha do jogador

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return ("tie");
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) { 
        return ("player")
    }
    else {
        return ("computer")
    }
} // essa funcao define quem ganha o round

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "tie"){
        return ("It's a tie!")
    }
    else if(result == "player"){
        return (`You Win! ${playerSelection} beats ${computerSelection}!`)
    }
   else {
    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
    }
} // essa funcao joga o round em si

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "player"){
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "computer"){
            computerScore++;
        }
        console.log ("--------")
    }
    console.log("The game is finished!")
    if (playerScore > computerScore) {
        console.log ("You won! Congratulations!!")
    } else if (playerScore < computerScore) {
        console.log ("You lost. Computers are superior.")
    } else {
            console.log ("It's a tie.")
        }
} // essa funcao  EH O JOGO. Repete o round 5 vezes para definir o ganhador

playGame();