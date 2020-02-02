let computerSelection;
let roundResult;
let playerSelection;
let play;

function computerPlay() {
	play = Math.random();
	if (play < 0.333) {
		return 'Rock';
	} else if (play < 0.666) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}

function playRound(playerSelection) {
	computerSelection = computerPlay();

	if (computerSelection == 'Rock' && playerSelection == 'Paper') {
		document.getElementById('roundResult').innerHTML = 'You win! Paper beats rock.';
		return 1;
	} else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
		document.getElementById('roundResult').innerHTML =' You win! Scissors beats paper.';
		return 1;
	} else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
		document.getElementById('roundResult').innerHTML = 'You win! Rock beats scissors.';
		return 1;
	} else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
		document.getElementById('roundResult').innerHTML = 'You lose! Paper beats rock.';
		return 2;
	} else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
		document.getElementById('roundResult').innerHTML = 'You lose! Scissors beats paper.';
		return 2;
	} else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
		document.getElementById('roundResult').innerHTML = 'You lose! Rock beats scissors.';
		return 2;
	} else {
		document.getElementById('roundResult').innerHTML = "It's a tie.";
		return 0;
	}
}

function playGame() {}

const startBtn = document.querySelector('div.startGame');
const selectScissors = document.getElementById('selectScissors');
const selectPaper = document.getElementById('selectPaper');
const selectRock = document.getElementById('selectRock');
const score = document.getElementById('score');
let computerScore = 0;
let playerScore = 0;

startBtn.addEventListener('click', () => {
	 selectRock.style.display = 'flex';
	 selectPaper.style.display = 'flex';
	 selectScissors.style.display = 'flex';
	 document.getElementById('playerScore').innerHTML = "Player Score: " + playerScore;
	 document.getElementById('computerScore').innerHTML = "Computer Score: " + computerScore;
	 score.style.display = 'flex';
});

selectRock.addEventListener('click', () => {
	playerSelection = 'Rock';
	roundResult = playRound(playerSelection);
	if (roundResult == 1) {
		document.getElementById('playerScore').innerHTML = "Player Score: " + ++playerScore;
		if (playerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You win!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	} else if (roundResult == 2) {
		document.getElementById('computerScore').innerHTML = "Computer Score: " + ++computerScore;
		if (computerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You lose!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	}
	
});

selectPaper.addEventListener('click', () => {
	playerSelection = 'Paper';
	roundResult = playRound(playerSelection);
	if (roundResult <= 1) {
		document.getElementById('playerScore').innerHTML = "Player Score: " + ++playerScore;
		if (playerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You win!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	} else if (roundResult == 2) {
		document.getElementById('computerScore').innerHTML = "Computer Score: " + ++computerScore;
		if (computerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You lose!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	}
});

selectScissors.addEventListener('click', () => {
	playerSelection = 'Scissors';
	roundResult = playRound(playerSelection);
	if (roundResult == 1) {
		document.getElementById('playerScore').innerHTML = "Player Score: " + ++playerScore;
		if (playerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You win!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	} else if (roundResult == 2) {
		document.getElementById('computerScore').innerHTML = "Computer Score: " + ++computerScore;
		if (computerScore >= 5) {
			document.getElementById('roundResult').innerHTML = 'Game Over! You lose!';
			selectRock.style.display = 'none';
			selectPaper.style.display = 'none';
			selectScissors.style.display = 'none';
			score.style.display = 'none';
			playerScore = 0;
			computerScore = 0;
		}
	}
});
