/*
  Game Graphics Engine
*/


window.onload = function() {

//paper is the variable that is added to the images scope, and references the active PaperScope project and all Paper.js classes can be accessed

  var cardProperties = {
    playerID: undefined,
    cardNumber: undefined,
    cardState: undefined
  }
  rasterDeal.visible = true;
  dealCards(rasterDeal,cardProperties,DeckKey);

  //dealCard(cardProperties);
}

//rendered image is the deal button
function dealCards(rasterDeal,cardProperties,DeckKey) {

  //determine based on the player number what the card number, image, and position
  rasterDeal.onClick = function(event) {
    //start a new game
    $.get(jsRoutes.controllers.HomeController.startGame(2),function(data) {
    })
    //at this point the deck has been built
      //leave 8 cards on the stack
      for(var i = 0; i < 100; i++) {
        cardProperties.playerID = (i+1)%4;
        cardProperties.cardNumber = i+1;
        cardProperties.cardState = (i+1);

        //only draw cards for player 1
        if(cardProperties.playerID = 1) {
          var cardDrawn = requestCard (i+1);
          //find from mapping what the card is drawn

          var mappedCardDrawn = cardSuitMapping(cardDrawn);

          DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].visible = true;
          //to find position :
           DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"].position = PField[(i+1) % 25];

          //setTimeout(function() {renderedImage.visible= true},1000);
        }
        // else {
        //   //show animation for deal
        //   switch (cardProperties.playerID){
        //     case 2 :
        //     case 3 :
        //     case 4 :
        //     default: null
        //   }
        // }
      }
    }
}

// Parameter : index from cardlist created
// Return : Object with Suit and Card
function requestCard (index) {
  var cardDrawn;
  jsRoutes.controllers.HomeController.dealCard(index).ajax({
  type : 'GET',
  async: false,
  success : function(data) {
    var Suit = data.split(" ")[0];
    var Card = data.split(" ")[1];
    var cardDealt = {
      "Suit" : Suit,
      "Card" : Card
    }
    cardDrawn=cardDealt
    }
  });
  //type {Suit : Int,
// Card : Int}
  return cardDrawn;
}

//Parameters: paper.Raster, Boolean, paper.Point
//Return: null
function chooseCard(renderedImage,validClick,PField,cardProperties) {
  if(validClick) {
    renderedImage.onClick = function(event) {
        this.position = PField;
        setTimeout(function() {renderedImage.visible= false},1000);
        // $.get(jsRoutes.controllers.HomeController.startGame(2),function(data) {
        // })

      }
  }
}



function main() {
  //Start dealing
  var startButton = document.createElement("DealButton");

}
