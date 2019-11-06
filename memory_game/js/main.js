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

function flipCard(cardId) {

	console.log("User flipped " + cards[cardId.rank);
	cardsInPlay.push(cards[cardId].rank); 
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	console.log(cards.cardImage);
	console.log(cards.suit);

}

}
