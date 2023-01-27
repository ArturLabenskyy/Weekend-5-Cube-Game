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
    if (whoPlay === 1) {
        player1.drops = 1;
    } else {
        player2.drops = 1;
    }
    rollClick(whoPlay);
});

hold.addEventListener(`click`, function (e) {
    holdClick(whoPlay);
});

startBtn.addEventListener(`click`, function (e) {
    e.preventDefault();
    rollDice.disabled = false;
    winScore = parseInt(scoreLimit.value);
    if (winScore >= 12) {
        modal.style.display = `none`;
        // document.querySelectorAll(`.player-box`).style.display = `block`;
        // document.querySelectorAll(`.game-process-box`).style.display = `block`;
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
    document.querySelector(`.winner-check`).disabled = true;
    rollDice.disabled = true;
    holdClick.disabled = true;
    document.querySelector(`.hidden1`).style.display = `none`;
    document.querySelector(`.hidden2`).style.display = `none`;
    whoPlay = 1;
    modal.style.display = `block`;
}

function holdClick(player) {
    if (player === 1) {
        changePlayer(whoPlay);
        if (player1.score === winScore) {
            winScreen(1);
            // alert(`PLAYER 1 is the WINNER!!!!`);
        } else if (player1.score > winScore) {
            winScreen(2);
            // alert(`PLAYER 2 is the WINNER`);
        }
    } else {
        changePlayer(whoPlay);
        if (player2.score === winScore) {
            winScreen(2);
            // alert(`PLAYER 2 is the WINNER!!!!`);
        } else if (player2.score > winScore) {
            winScreen(1);
            // alert(`PLAYER 1 is the WINNER`);
        }
    }
}

function rollClick(player) {
    const drop1 = Math.floor(Math.random() * 6 + 1);
    const drop2 = Math.floor(Math.random() * 6 + 1);
    switch (drop1) {
        case 1:
            cube1.src = `../assets/images/dice1.png`;
            // cube1.style.background = `url(../assets/images/dice1.png) no-repeat center center/cover`;
            break;
        case 2:
            cube1.src = `../assets/images/dice2.png`;
            // cube1.style.background = `url(../assets/images/dice2.png) no-repeat center center/cover`;
            break;
        case 3:
            cube1.src = `../assets/images/dice3.png`;
            // cube1.style.background = `url(../assets/images/dice3.png) no-repeat center center/cover`;
            break;
        case 4:
            cube1.src = `../assets/images/dice4.png`;
            // cube1.style.background = `url(../assets/images/dice4.png) no-repeat center center/cover`;
            break;
        case 5:
            cube1.src = `../assets/images/dice5.png`;
            // cube1.style.background = `url(../assets/images/dice5.png) no-repeat center center/cover`;
            break;
        case 6:
            cube1.src = `../assets/images/dice6.png`;
            // cube1.style.background = `url(../assets/images/dice6.png) no-repeat center center/cover`;
            break;
    }
    switch (drop2) {
        case 1:
            cube2.src = `../assets/images/dice1.png`;
            // cube2.style.background = `url(../assets/images/dice1.png) no-repeat center center/cover`;
            break;
        case 2:
            cube2.src = `../assets/images/dice2.png`;
            // cube2.style.background = `url(../assets/images/dice2.png) no-repeat center center/cover`;
            break;
        case 3:
            cube2.src = `../assets/images/dice3.png`;
            // cube2.style.background = `url(../assets/images/dice3.png) no-repeat center center/cover`;
            break;
        case 4:
            cube2.src = `../assets/images/dice4.png`;
            // cube2.style.background = `url(../assets/images/dice4.png) no-repeat center center/cover`;
            break;
        case 5:
            cube2.src = `../assets/images/dice5.png`;
            // cube2.style.background = `url(../assets/images/dice5.png) no-repeat center center/cover`;
            break;
        case 6:
            cube2.src = `../assets/images/dice6.png`;
            // cube2.style.background = `url(../assets/images/dice6.png) no-repeat center center/cover`;
            break;
    }
    if (drop1 === 6 && drop2 === 6) {
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
        document.querySelector(`.winner-check`).disabled = true;
        document.querySelector(`.player2`).style.backgroundColor = `#8cc0ed`;
        document.querySelector(`.player1`).style.backgroundColor = `#0F4C75`;
        whoPlay = whoPlay === 1 ? 2 : 1;
    } else {
        player2.score += player2.currentScore;
        player2.currentScore = 0;
        playerTwoScore.textContent = `${player2.score}`;
        playerTwoCurrent.textContent = `0`;
        hold.disabled = true;
        document.querySelector(`.winner-check`).disabled = false;
        document.querySelector(`.player1`).style.backgroundColor = `#8cc0ed`;
        document.querySelector(`.player2`).style.backgroundColor = `#0F4C75`;
        whoPlay = whoPlay === 1 ? 2 : 1;
    }
}

function winScreen(player) {
    if (player === 1) {
        document.querySelector(`.player1`).style.backgroundColor = `#3282B8`;
        document.querySelector(`.player2`).style.backgroundColor = `#0F4C75`;
        rollDice.disabled = true;
        hold.disabled = true;
        document.querySelector(`.winner-check`).disabled = true;
        hidden1.textContent = `You are the winner`;
        hidden2.textContent = `You lose...`;
        hidden1.style.display = `block`;
        hidden2.style.display = `block`;
        hidden1.style.fontSize = `3.2rem`;
        hidden2.style.fontSize = `2.1rem`;
    } else {
        document.querySelector(`.player2`).style.backgroundColor = `#3282B8`;
        document.querySelector(`.player1`).style.backgroundColor = `#0F4C75`;
        rollDice.disabled = true;
        hold.disabled = true;
        document.querySelector(`.winner-check`).disabled = true;
        hidden2.textContent = `You are the winner`;
        hidden1.textContent = `You lose...`;
        hidden2.style.display = `block`;
        hidden1.style.display = `block`;
        hidden2.style.fontSize = `3rem`;
        hidden1.style.fontSize = `2.1rem`;
    }
}
