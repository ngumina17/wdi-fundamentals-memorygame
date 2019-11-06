console.log("Up and running!")
var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage: "images2/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images2/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images2/king-of-hearts"

},

{
	rank:"king",
	suit:"diamonds",
	cardImage:"images2/king-of-diamonds.png"
}

];

var cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); 
	this.setAttribute('src',cards[cardId].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId.suit]);
	}





function createBoard () {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images2/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click',flipCard);
	}
}
createBoard();