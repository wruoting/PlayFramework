/*
  Game Graphics Engine
*/


window.onload = function() {

//paper is the variable that is added to the images scope, and references the active PaperScope project and all Paper.js classes can be accessed

  var cardProperties = {
    playerID: 0,
    cardNumber: 0,
    cardState: 0
  }

  dealCards(rasterDeal,cardProperties,DeckKey,PField);
  rasterDeal.visible = true;
  //dealCard(cardProperties);
}

//rendered image is the deal button
function dealCards(rasterDeal,cardProperties,DeckKey,PField) {

  //determine based on the player number what the card number, image, and position
  rasterDeal.onClick = function(event) {
    //start a new game
    $.get(jsRoutes.controllers.HomeController.startGame(2),function(data) {
    })
    //at this point the deck has been built
      //leave 8 cards on the stack
        function onFrame(event) {
        for(var i = 0; i < 100; i++) {
          cardProperties.playerID = (i+1)%4;
          cardProperties.cardNumber = i+1;
          cardProperties.cardState = (i+1);
          //only draw cards for player 1
          if(cardProperties.playerID == 1) {
            var cardDrawn = requestCard (i+1);
            //find from mapping what the card is drawn

            var mappedCardDrawn = cardSuitMapping(cardDrawn);

            //to find position :
            DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].bringToFront();
            DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].position = PField[0];
            DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].visible= true

            DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].position = cardPosition[(i/4)];
            //setTimeout(function() {DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].visible= true},1000);
            }

          }
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
