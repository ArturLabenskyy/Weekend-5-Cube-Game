const playerOneScore = document.querySelector(`.player1-score`);
const playerTwoScore = document.querySelector(`.player2-score`);
const playerOneCurrent = document.querySelector(`.current-score1`);
const playerTwoCurrent = document.querySelector(`.current-score2`);
const cube1 = document.querySelector(`.cube1`);
const cube2 = document.querySelector(`.cube2`);
const rollDice = document.querySelector(`.roll-dice`);
const hold = document.querySelector(`.hold`);
let whoPlay = 1;
let player1 = {
    score: 0,
    currentScore: 0,
};
let player2 = {
    score: 0,
    currentScore: 0,
};
let inGame = true;
let winScore = 100;

rollDice.addEventListener(`click`, function (e) {
    const drop1 = Math.floor(Math.random() * 6 + 1);
    const drop2 = Math.floor(Math.random() * 6 + 1);
    switch (drop1) {
        case 1:
            cube1.style.background = `url(../assets/images/dice1.png) no-repeat center center/cover`;
            break;
        case 2:
            cube1.style.background = `url(../assets/images/dice2.png) no-repeat center center/cover`;
            break;
        case 3:
            cube1.style.background = `url(../assets/images/dice3.png) no-repeat center center/cover`;
            break;
        case 4:
            cube1.style.background = `url(../assets/images/dice4.png) no-repeat center center/cover`;
            break;
        case 5:
            cube1.style.background = `url(../assets/images/dice5.png) no-repeat center center/cover`;
            break;
        case 6:
            cube1.style.background = `url(../assets/images/dice6.png) no-repeat center center/cover`;
            break;
    }
    switch (drop2) {
        case 1:
            cube2.style.background = `url(../assets/images/dice1.png) no-repeat center center/cover`;
            break;
        case 2:
            cube2.style.background = `url(../assets/images/dice2.png) no-repeat center center/cover`;
            break;
        case 3:
            cube2.style.background = `url(../assets/images/dice3.png) no-repeat center center/cover`;
            break;
        case 4:
            cube2.style.background = `url(../assets/images/dice4.png) no-repeat center center/cover`;
            break;
        case 5:
            cube2.style.background = `url(../assets/images/dice5.png) no-repeat center center/cover`;
            break;
        case 6:
            cube2.style.background = `url(../assets/images/dice6.png) no-repeat center center/cover`;
            break;
    }
    if (whoPlay === 1) {
        player1.currentScore += drop1;
        player1.currentScore += drop2;
        playerOneCurrent.textContent = `${player1.currentScore}`;
    } else {
        player2.currentScore += drop1;
        player2.currentScore += drop2;
        playerTwoCurrent.textContent = `${player2.currentScore}`;
    }
});

hold.addEventListener(`click`, function (e) {
    if (whoPlay === 1) {
        player1.score += player1.currentScore;
        player1.currentScore = 0;
        playerOneScore.textContent = `${player1.score}`;
        playerOneCurrent.textContent = `0`;
        if (player1.score === winScore) {
            alert(`PLAYER 1 is the WINNER!!!!`);
            inGame = false;
        } else if (player1.score > winScore) {
            alert(`PLAYER 2 is the WINNER`);
            inGame = false;
        }
    } else {
        player2.score += player2.currentScore;
        player2.currentScore = 0;
        playerTwoScore.textContent = `${player2.score}`;
        playerTwoCurrent.textContent = `0`;
        if (player2.score === winScore) {
            alert(`PLAYER 2 is the WINNER!!!!`);
            inGame = false;
        } else if (player2.score > winScore) {
            alert(`PLAYER 1 is the WINNER`);
            inGame = false;
        }
    }
    whoPlay = whoPlay === 1 ? 2 : 1;
});
