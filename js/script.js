let cards = [];
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const start = () => {
    let firstCard = numbers[Math.floor(Math.random() * numbers.length)];
    let secondCard = numbers[Math.floor(Math.random() * numbers.length)];
    cards.push(firstCard);
    cards.push(secondCard);
    document.querySelector(".card").textContent = `${firstCard} || ${secondCard}`;
    const sum = firstCard + secondCard;
    document.querySelector(".sum").textContent = sum;
    if (sum < 21) {
        document.querySelector('h3').textContent = "You can get a new card...";
    } else if (sum === 21) {
        document.querySelector('h3').textContent = "You've got Blackjack!";
    } else {
        document.querySelector('h3').textContent = "Oh, you lost";
        clear();
    };
};

const cardGenerator = () => {
    let otherCard = numbers[Math.floor(Math.random() * numbers.length)];
    cards.push(otherCard);
    let sum = document.querySelector(".sum").textContent = cards.reduce((somaAntiga, otherCard) => somaAntiga + otherCard);
    document.querySelector(".card").textContent += (" || " + otherCard);
    if (sum < 21) {
        document.querySelector('h3').textContent = "You can get a new card...";
    } else if (sum === 21) {
        document.querySelector('h3').textContent = "You've got Blackjack!";
        cards = [];
    } else {
        document.querySelector('h3').textContent = "Oh, you're out of the game!";
        clear();
    };
};

const restart = () => {
    document.querySelector(".sum").textContent = 0;
    document.querySelector(".card").textContent = 0;
    document.querySelector('h3').textContent = "";
    document.getElementById("new").style.visibility = "visible";
    document.getElementById("start").style.visibility = "visible";
    cards = [];
};

const clear = () => {
    cards = [];
    document.querySelector(".sum").textContent = "";
    document.querySelector(".card").textContent = "";
    document.getElementById("new").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
};