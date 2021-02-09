window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})

//making buttons work
const dealerHand = document.querySelector("#dealer-hand");
const playerHand = document.querySelector("#player-hand");
const dealerButton = document.querySelector("#deal-button");
const hitMeButton = document.querySelector("#hit-button")
let playerHandArray = []
let dealerHandArray = []
let deck = [];
dealerButton.addEventListener("click", (e) => {
    //playercard
    dealCard(playerHandArray);
    //dealercard
    dealCard(dealerHandArray);
  
    render()
})

function dealCard(hand) {
  const card = deck.pop()
  hand.push(card);  
  
}

function getCardImage(card) {
  let rank = card.rank
  if (rank === 11) {
    rank = "Jack"
  }
  if (rank === 12) {
    rank = "Queen"
  }
  if (rank === 13) {
    rank = "King"
  }
  if (rank === 1) {
    rank = "Ace"
  }
  let suit = card.suit 
  let cardSrc = (`./images/${rank}_of_${suit}.png`)
  
  const cardImage = document.createElement("img")
  cardImage.setAttribute("src", cardSrc)
  return cardImage
}

function render() {
  playerHand.innerHTML = "";
  dealerHand.innerHTML = "";
  for (let index = 0; index < playerHandArray.length; index++) {
    const card = playerHandArray[index];
    playerHand.append(getCardImage(card))
    
  }
  for (let index = 0; index < dealerHandArray.length; index++) {
    const card = dealerHandArray[index];
    dealerHand.append(getCardImage(card))
  }
}

hitMeButton.addEventListener("click", (e) => {
  function dealerCard() {
    dealCard(dealerHandArray);
  }
  function playerCard() {
    dealCard(playerHand);
  }
  dealerCard()
  playerCard()
})
function buildDeck(deck) {
const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    const suit = suits[suitIndex];
    for (let rank = 1; rank <= 13; rank++) {
      const cards = {rank: rank, suit: suit};
      deck.push(cards);
    }
  }
  return deck
}

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
buildDeck(deck)
shuffle(deck)

console.log(deck)