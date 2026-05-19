
const suits = ["♥", "♦", "♣", "♠"];
const values = [
	"A", "2", "3", "4", "5",
	"6", "7", "8", "9", "10",
	"J", "Q", "K"
];

let deck = [];
let playerHand = [];
let dealerHand = [];

const playerCards = document.getElementById("player-cards");
const dealerCards = document.getElementById("dealer-cards");

const playerWinsDisplay = document.getElementById("player-wins");
let playerWins = 0;
const dealerWinsDisplay = document.getElementById("dealer-wins");
let dealerWins = 0;

const playerScoreDisplay = document.getElementById("player-score");
const dealerScoreDisplay = document.getElementById("dealer-score");

const message = document.getElementById("message");

const dealButton = document.getElementById("deal-button");
const passButton = document.getElementById("pass-button");

makeDeck();

function makeDeck()
{
	deck = [];

	for (let suit of suits)
	{
		for (let value of values)
		{

			let card = {
				suit: suit,
				value: value
			};

			deck.push(card);
		}
	}
}

function getCard()
{
	const randomIndex = Math.floor(Math.random() * deck.length);

	const card = deck[randomIndex];

	deck.splice(randomIndex, 1);

	return card;
}

function showCards()
{

	dealerCards.innerHTML = "";
	playerCards.innerHTML = "";

	dealerHand.forEach(card =>
	{
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
		cardElement.textContent = card.value + card.suit;

		dealerCards.appendChild(cardElement);
	});

	playerHand.forEach(card =>
	{
		const cardElement = document.createElement("div");
		cardElement.classList.add("card");
		cardElement.textContent = card.value + card.suit;

		playerCards.appendChild(cardElement);
	});
}

function calculateScore(hand)
{

	let score = 0;
	let numberAces = 0;

	for (let card of hand)
	{

		if (card.value === "A")
		{
			score += 11;
			numberAces++;
		}
		else if (
			card.value === "K" ||
			card.value === "Q" ||
			card.value === "J"
		)
		{
			score += 10;
		}
		else
		{
			score += Number(card.value);
		}
	}

	while (score > 21 && numberAces > 0)
	{
		score -= 10;
		numberAces--;
	}

	return score;
}

function updateScores()
{

	dealerScoreDisplay.textContent = calculateScore(dealerHand);
	playerScoreDisplay.textContent = calculateScore(playerHand);
}

function deal()
{

	playerHand = [];
	dealerHand = [];

	makeDeck();

	playerHand.push(getCard());
	dealerHand.push(getCard());

	playerHand.push(getCard());
	dealerHand.push(getCard());

	showCards();
	updateScores();

	message.textContent = "";

	dealButton.textContent = "Hit";
	passButton.disabled = false;
}

function hit()
{

	playerHand.push(getCard());

	showCards();
	updateScores();

	checkPlayer();
}

function checkPlayer()
{

	const score = calculateScore(playerHand);

	if (score === 21)
	{
		message.textContent = "Blackjack! You won!";
		playerWins++;
		endGame();
	}
	else if (score > 21)
	{
		message.textContent = "You're broke!";
		dealerWins++;
		endGame();
	}
}

function dealerPlays()
{

	let playerScore = calculateScore(playerHand);
	let dealerScore = calculateScore(dealerHand);

	while (dealerScore <= 16 && dealerScore !== playerScore)	
	{

		dealerHand.push(getCard());

		dealerScore = calculateScore(dealerHand);
	}

	showCards();
	updateScores();

	determineWinner();
}

function determineWinner()
{

	const playerScore = calculateScore(playerHand);
	const dealerScore = calculateScore(dealerHand);

	if (dealerScore > 21)
	{
		message.textContent = "Dealer broke. You win!";
		playerWins++;
	}
	else if (playerScore > dealerScore)
	{
		message.textContent = "You win!";
		playerWins++;

	}
	else if (dealerScore > playerScore)
	{
		message.textContent = "Dealer wins!";
		dealerWins++;

	}
	else
	{
		message.textContent = "It's a tie!";
	}

	endGame();
}

function endGame()
{
	// dealButton.disabled = true;
	dealButton.textContent = "Restart";
	passButton.disabled = true;
	playerWinsDisplay.textContent = playerWins;
	dealerWinsDisplay.textContent = dealerWins;
}

function gameRestart()
{
	makeDeck();
	playerHand = [];
	dealerHand = [];
	updateScores();
	showCards();

	dealButton.textContent = "Deal";
	passButton.disabled = false;
}

dealButton.addEventListener("click", () =>
{

	if (dealButton.textContent === "Deal")
	{
		deal();
	}
	else if (dealButton.textContent === "Hit")
	{
		hit();
	}
	else if (dealButton.textContent === "Restart")
	{
		gameRestart();
	}
});

passButton.addEventListener("click", () =>
{
	dealerPlays();
});
