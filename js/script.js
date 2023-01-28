const playerOneScore = document.querySelector(`.player1-score`);
const playerTwoScore = document.querySelector(`.player2-score`);
const playerOneCurrent = document.querySelector(`.current-score1`);
const playerTwoCurrent = document.querySelector(`.current-score2`);
const modal = document.querySelector(`.modal`);
const scoreLimit = document.querySelector(`#score-choose`);
const startBtn = document.querySelector(`#start-btn`);
const cube1 = document.querySelector(`.cube1`);
const cube2 = document.querySelector(`.cube2`);
const rollDice = document.querySelector(`.roll-dice`);
const hold = document.querySelector(`.hold`);
const newGame = document.querySelector(`.new-game`);
const displays = document.querySelectorAll(`.player-box`);
const hidden1 = document.querySelector(`.hidden1`);
const hidden2 = document.querySelector(`.hidden2`);
const rollSound = new Audio(`../assets/audio/dice.mp3`);
const winSound = new Audio(`../assets/audio/win.mp3`);
const double6 = document.querySelector(`.double-6`);
const topBorder1 = document.querySelector(`.p1`);
const topBorder2 = document.querySelector(`.p2`);
const botBorder1 = document.querySelector(`#current1`);
const botBorder2 = document.querySelector(`#current2`);
const imgArr = [
    `../assets/images/dice1.png`,
    `../assets/images/dice2.png`,
    `../assets/images/dice3.png`,
    `../assets/images/dice4.png`,
    `../assets/images/dice5.png`,
    `../assets/images/dice6.png`,
];

let whoPlay = 1;
let player1 = {
    score: 0,
    currentScore: 0,
};
let player2 = {
    score: 0,
    currentScore: 0,
};
let winScore;

rollDice.addEventListener(`click`, function (e) {
    rollClick(whoPlay);
});

hold.addEventListener(`click`, function (e) {
    holdClick(whoPlay);
});

startBtn.addEventListener(`click`, function (e) {
    e.preventDefault();
    rollDice.disabled = false;
    winScore = Math.floor(parseInt(scoreLimit.value));
    topBorder1.classList.add("border-animation");
    botBorder1.classList.add("border-animation");
    if (winScore >= 12) {
        modal.style.display = `none`;
    } else {
        alert(`Choose a score at least 12`);
    }
});

newGame.addEventListener(`click`, function (e) {
    resetGame();
    modal.style.display = `block`;
});

function resetGame() {
    scoreLimit.value = 77;
    player1.score = 0;
    player2.score = 0;
    player1.currentScore = 0;
    player2.currentScore = 0;
    playerOneScore.textContent = `0`;
    playerOneCurrent.textContent = `0`;
    playerTwoScore.textContent = `0`;
    playerTwoCurrent.textContent = `0`;
    document.querySelector(`.player1`).style.backgroundColor = `#8cc0ed`;
    document.querySelector(`.player2`).style.backgroundColor = `#0F4C75`;
    rollDice.disabled = true;
    holdClick.disabled = true;
    document.querySelector(`.hidden1`).style.display = `none`;
    document.querySelector(`.hidden2`).style.display = `none`;
    whoPlay = 1;
    modal.style.display = `block`;
    hidden1.classList.remove(`win-animation`);
    hidden2.classList.remove(`win-animation`);
    topBorder1.classList.remove(`border-animation`);
    botBorder1.classList.remove(`border-animation`);
    topBorder2.classList.remove(`border-animation`);
    botBorder2.classList.remove(`border-animation`);
}

function holdClick(player) {
    if (player === 1) {
        changePlayer(whoPlay);
        if (player1.score === winScore) {
            winScreen(1);
        } else if (player1.score > winScore) {
            winScreen(2);
        }
    } else {
        changePlayer(whoPlay);
        if (player2.score === winScore) {
            winScreen(2);
        } else if (player2.score > winScore) {
            winScreen(1);
        }
    }
}

function rollClick(player) {
    rollSound.play();
    const drop1 = Math.floor(Math.random() * 6 + 1);
    const drop2 = Math.floor(Math.random() * 6 + 1);
    cube1.src = imgArr[drop1 - 1];
    cube2.src = imgArr[drop2 - 1];
    if (drop1 === 6 && drop2 === 6) {
        double6.style.display = "block";
        setTimeout(() => {
            double6.style.display = `none`;
        }, 1200);
        if (whoPlay === 1) {
            player1.currentScore = 0;
            changePlayer(1);
        } else {
            player2.currentScore = 0;
            changePlayer(2);
        }
    } else if (player === 1) {
        player1.currentScore += drop1 + drop2;
        playerOneCurrent.textContent = `${player1.currentScore}`;
        hold.disabled = false;
    } else {
        player2.currentScore += drop1 + drop2;
        playerTwoCurrent.textContent = `${player2.currentScore}`;
        hold.disabled = false;
    }
}

function changePlayer(player) {
    if (player === 1) {
        player1.score += player1.currentScore;
        player1.currentScore = 0;
        playerOneScore.textContent = `${player1.score}`;
        playerOneCurrent.textContent = `0`;
        hold.disabled = true;
        document.querySelector(`.player2`).style.backgroundColor = `#8cc0ed`;
        document.querySelector(`.player1`).style.backgroundColor = `#0F4C75`;
        topBorder1.classList.remove(`border-animation`);
        botBorder1.classList.remove(`border-animation`);
        topBorder2.classList.add(`border-animation`);
        botBorder2.classList.add(`border-animation`);
        whoPlay = whoPlay === 1 ? 2 : 1;
    } else {
        player2.score += player2.currentScore;
        player2.currentScore = 0;
        playerTwoScore.textContent = `${player2.score}`;
        playerTwoCurrent.textContent = `0`;
        hold.disabled = true;
        document.querySelector(`.player1`).style.backgroundColor = `#8cc0ed`;
        document.querySelector(`.player2`).style.backgroundColor = `#0F4C75`;
        topBorder2.classList.remove(`border-animation`);
        botBorder2.classList.remove(`border-animation`);
        topBorder1.classList.add(`border-animation`);
        botBorder1.classList.add(`border-animation`);
        whoPlay = whoPlay === 1 ? 2 : 1;
    }
}

function winScreen(player) {
    winSound.play();
    if (player === 1) {
        hidden1.classList.add("win-animation");
        if (player1.score === winScore) {
            hidden1.textContent = `You are the winner`;
            hidden2.textContent = `You lose...`;
        } else if (player1.score < winScore) {
            hidden1.textContent = `You are the winner`;
            hidden2.textContent = `You passed the target score`;
        }
        document.querySelector(`.player1`).style.backgroundColor = `#3282B8`;
        document.querySelector(`.player2`).style.backgroundColor = `#0F4C75`;
        rollDice.disabled = true;
        hold.disabled = true;
        hidden1.style.display = `block`;
        hidden2.style.display = `block`;
        hidden1.style.fontSize = `3.2rem`;
        hidden2.style.fontSize = `2.1rem`;
    } else {
        hidden2.classList.add("win-animation");
        if (player2.score === winScore) {
            hidden2.textContent = `You are the winner`;
            hidden1.textContent = `You lose...`;
        } else if (player2.score < winScore) {
            hidden2.textContent = `You are the winner`;
            hidden1.textContent = `You passed the target score`;
        }
        document.querySelector(`.player2`).style.backgroundColor = `#3282B8`;
        document.querySelector(`.player1`).style.backgroundColor = `#0F4C75`;
        rollDice.disabled = true;
        hold.disabled = true;
        hidden2.style.display = `block`;
        hidden1.style.display = `block`;
        hidden2.style.fontSize = `3rem`;
        hidden1.style.fontSize = `2.1rem`;
    }
}
