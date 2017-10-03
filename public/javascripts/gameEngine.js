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

  DealCards(globals.rasterDeal,cardProperties,globals.DeckKey,globals.PField,globals.GameLoadingInstance);
  globals.rasterDeal.visible = true;

}//onload

//rendered image is the deal button
function DealCards(rasterDeal,cardProperties,DeckKey,PField,GameLoadingInstance) {

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
                MainPlayerCard(playerCount,event.count);
                break;
              case 2:
                CardBackCopy(copyCardback,playerOtherCount,globals.rasterBackOfCard,globals.CardPositionP2,globals.PField[4],event.count,1,0);
                break;
              case 3:
                CardBackCopy(copyCardback,playerOtherCount,globals.rasterBackOfCard,globals.CardPositionP3,globals.PField[4],event.count,2,1);
                break;
              case 0:
                CardBackCopy(copyCardback,playerOtherCount,globals.rasterBackOfCard,globals.CardPositionP4,globals.PField[4],event.count,3,2);
                break;
              default:
              break;
            }
          }
          else {
            paper.view.off('frame');
          }
      }
  }
}

//needs to return the number of the card that is trump
function ValidTrumpSuitClick(GameLoadingInstance) {
  switch(GameLoadingInstance){
    case 1:

      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      break;
    case 11:
      break;
    case 12:
      break;
    case 13:
      break;
    case 14:
      break;
    default:
      return -1;

  }
}

//playuerCount

function MainPlayerCard(playerCount,eventCount) {
  var cardDrawn = RequestCard(playerCount+1);
  //find from mapping what the card is drawn
  var mappedCardDrawn = CardSuitMapping(cardDrawn);
  var xPosition = globals.CardPosition[(playerCount/4)].x - globals.PField[4].x;
  var yPosition = globals.CardPosition[(playerCount/4)].y - globals.PField[4].y;
  if(eventCount % 15 == 0) {
      //to find position :
      if(mappedCardDrawn["Deck"] == "One") {
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].bringToFront();
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].position = globals.PField[4];
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].visible= true;
      }
      else{
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].bringToFront();
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].position = globals.PField[4];
        globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].visible= true;
      }
    }
    if(mappedCardDrawn["Deck"] == "One") {
      globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["rasterImage"].translate(xPosition/15,yPosition/15);
    }
    else {
      globals.DeckKey[mappedCardDrawn["Deck"]][mappedCardDrawn["Suit"]][mappedCardDrawn["Card"]]["Image"]["cloneImage"].translate(xPosition/15,yPosition/15);
    }
}


//copyCardback: array that will hold clones of the back of the card
//playerOtherCount: counts every 15 frames to load next card. Every 15 frames will load a new card
//rasterBackOfCard: back of card object
//CardPosition: global cardposition value
//PField: center stage position for 4 spots for card dealing (includes deck start position)
//eventCount: event counter
//PlayerN: for rotation of card
//offSet: counter for determining position, 0 for player 2, 1 for player 3, etc.
function CardBackCopy(copyCardback,playerOtherCount,rasterBackOfCard,CardPosition,PField,eventCount,PlayerN,offSet) {
  if(eventCount % 15 == 0) {
    copyCardback[playerOtherCount] = rasterBackOfCard.clone();
    copyCardback[playerOtherCount].bringToFront();
    copyCardback[playerOtherCount].visible= true;
    copyCardback[playerOtherCount].position = PField;
    copyCardback[playerOtherCount].rotate(90*PlayerN);
  }
  var xPosition = CardPosition[(playerOtherCount-offSet)/4].x - PField.x; //need to define other positions
  var yPosition = CardPosition[(playerOtherCount-offSet)/4].y - PField.y;
  copyCardback[playerOtherCount].translate(xPosition/15,yPosition/15);
}

// Parameter : index from cardlist created
// Return : Object with Suit and Card
function RequestCard (index) {
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
