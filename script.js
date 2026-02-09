const emojis = ["💖","💖","🌹","🌹","😘","😘","💍","💍"];
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// Shuffle cards
const shuffled = emojis.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");

// Create board
function createBoard() {
  for (let i = 0; i < shuffled.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  if (cardsChosenId.includes(cardId) || cardsWon.flat().includes(cardId)) return;

  cardsChosen.push(shuffled[cardId]);
  cardsChosenId.push(cardId);
  this.textContent = shuffled[cardId];
  this.classList.add("flipped");

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll(".card");
  const [optionOneId, optionTwoId] = cardsChosenId;

  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].classList.add("hidden");
    cards[optionTwoId].classList.add("hidden");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].textContent = "";
    cards[optionTwoId].textContent = "";
    cards[optionOneId].classList.remove("flipped");
    cards[optionTwoId].classList.remove("flipped");
  }

  cardsChosen = [];
  cardsChosenId = [];

  if (cardsWon.length === emojis.length/2) {
    document.getElementById("message").style.display = "block";
    startHearts(); // Start background hearts when she wins
  }
}

createBoard();