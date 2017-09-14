// /*
//   Game Graphics Engine
// */


window.onload = function() {


//paper is the variable that is added to the images scope, and references the active PaperScope project and all Paper.js classes can be accessed

  var cardProperties = {
    playerID: 0,
    cardNumber: 0,
    cardState: 0
  }

  dealCards(rasterDeal,cardProperties,DeckKey,PField);
  rasterDeal.visible = true;

//rendered image is the deal button
function dealCards(rasterDeal,cardProperties,DeckKey,PField) {

  //determine based on the player number what the card number, image, and position
  rasterDeal.onClick = function(event) {
    //start a new game
    $.get(jsRoutes.controllers.HomeController.startGame(2),function(data) {
    })
    //at this point the deck has been built
      //leave 8 cards on the stack
      var playerCount = 0;
      var playerOtherCount = -1;
      var copyCardback = [];
      paper.view.attach('frame', onFrame);
        function onFrame(event) {

            if(event.count % 15 == 0 && event.count > 14) {
              playerCount++;
              playerOtherCount++;
            }

        if(playerCount < 100) {
            cardProperties.playerID = (playerCount+1)%4;
            cardProperties.cardNumber = playerCount+1;
            cardProperties.cardState = playerCount+1;

                //only draw cards for player 1
            switch (cardProperties.playerID) {
              case 1:
                var cardDrawn = requestCard(playerCount+1);
                //find from mapping what the card is drawn
                var mappedCardDrawn = cardSuitMapping(cardDrawn);
                var xPosition = cardPosition[(playerCount/4)].x - PField[4].x;
                var yPosition = cardPosition[(playerCount/4)].y - PField[4].y;
                if(event.count % 15 == 0) {
                    //to find position :
                    if(mappedCardDrawn["Deck"] == "One") {
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].bringToFront();
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].position = PField[4];
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].visible= true;
                    }
                    else{
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].bringToFront();
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].position = PField[4];
                      DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].visible= true;
                    }
                  }
                  if(mappedCardDrawn["Deck"] == "One") {
                    DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].translate(xPosition/15,yPosition/15);
                  }
                  else {
                    DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].translate(xPosition/15,yPosition/15);
                  }
                break;
              case 2:
                CardBackCopy(copyCardback,playerOtherCount,rasterBackOfCard,cardPositionP2,PField[4],event.count);
                break;
              case 3:
                if(event.count % 15 == 0) {
                  copyCardback[playerOtherCount] = rasterBackOfCard.clone();
                  copyCardback[playerOtherCount].bringToFront();
                  copyCardback[playerOtherCount].visible= true;
                  copyCardback[playerOtherCount].position = PField[0];
                  copyCardback[playerOtherCount].rotate(180);
                }
                var xPosition = cardPositionP3[(playerOtherCount-1)/4].x - PField[0].x; //need to define other positions
                var yPosition = cardPositionP3[(playerOtherCount-1)/4].y - PField[0].y;
                copyCardback[playerOtherCount].translate(xPosition/15,yPosition/15);
                break;
              case 0:
                if(event.count % 15 == 0) {
                  copyCardback[playerOtherCount] = rasterBackOfCard.clone();
                  copyCardback[playerOtherCount].bringToFront();
                  copyCardback[playerOtherCount].visible= true;
                  copyCardback[playerOtherCount].position = PField[0];
                  copyCardback[playerOtherCount].rotate(270);
                }
                var xPosition = cardPositionP4[(playerOtherCount-2)/4].x - PField[0].x; //need to define other positions
                var yPosition = cardPositionP4[(playerOtherCount-2)/4].y - PField[0].y;
                copyCardback[playerOtherCount].translate(xPosition/15,yPosition/15);
                break;
              default:
              break;
            }
          }//if
          else {
            paper.view.off('frame');
          }
      }//onFrame
  }//onClick
} // dealCards


}//onload

function CardBackCopy(copyCardback,playerOtherCount,rasterBackOfCard,cardPosition,PField,eventCount) {
  if(eventCount % 15 == 0) {
    copyCardback[playerOtherCount] = rasterBackOfCard.clone();
    copyCardback[playerOtherCount].bringToFront();
    copyCardback[playerOtherCount].visible= true;
    copyCardback[playerOtherCount].position = PField;
    copyCardback[playerOtherCount].rotate(90);
  }
  var xPosition = cardPosition[playerOtherCount/4].x - PField.x; //need to define other positions
  var yPosition = cardPosition[playerOtherCount/4].y - PField.y;
  copyCardback[playerOtherCount].translate(xPosition/15,yPosition/15);
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
