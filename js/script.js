const playerOneScore = document.querySelector(`.player1-score`);
const playerTwoScore = document.querySelector(`.player2-score`);
const cube1 = document.querySelector(`.cube1`);
const cube2 = document.querySelector(`.cube2`);
const rollDice = document.querySelector(`.roll-dice`);
const hold = document.querySelector(`.hold`);
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
});
