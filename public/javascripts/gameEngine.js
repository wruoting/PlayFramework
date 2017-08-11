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
  var validClick = true;


  rendered_images.TEN_OF_CLUBS_RASTER.position = cardPosition[0];
  rendered_images.TEN_OF_DIAMONDS_RASTER.position = cardPosition[1];
  rendered_images.NINE_OF_CLUBS_RASTER.position = cardPosition[2];
  rendered_images.EIGHT_OF_HEARTS_RASTER.position = cardPosition[3];
  rendered_images.EIGHT_OF_HEARTS_RASTER.bringToFront();

  rendered_images.EIGHT_OF_HEARTS_RASTER.visible= true;
  rendered_images.TEN_OF_CLUBS_RASTER.visible= true;
  rendered_images.TEN_OF_DIAMONDS_RASTER.visible= true;
  rendered_images.NINE_OF_CLUBS_RASTER.visible= true;

  //can wrap to make more generic
  var A = rendered_images.TEN_OF_CLUBS_RASTER;
  chooseCard(A,validClick,PField[0],cardProperties);
  var A = rendered_images.TEN_OF_DIAMONDS_RASTER;
  chooseCard(A,validClick,PField[1],cardProperties);
  var A = rendered_images.NINE_OF_CLUBS_RASTER;
  chooseCard(A,validClick,PField[2],cardProperties);
  var A = rendered_images.EIGHT_OF_HEARTS_RASTER;
  chooseCard(A,validClick,PField[3],cardProperties);
  var A = rendered_images.EIGHT_OF_HEARTS_RASTER;
  chooseCard(A,validClick,PField[4],cardProperties);
  //dealCard(cardProperties);
}

//rendered image is the deal button
function dealCards(renderedImage, dealButton) {
  //determine based on the player number what the card number, image, and position
  dealButton.onClick = function(event) {
    //start a new game
    $.get(jsRoutes.controllers.HomeController.startGame(2),function(data) {
    })
      //leave 8 cards on the stack
      for(var i = 0; i < 100; i++) {
        cardProperties.playerID = (i+1)%4;
        cardProperties.cardNumber = i+1;
        cardProperties.cardState = (i+1);


        //only draw cards for player 1
        if(cardProperties.playerID = 1) {
          var cardDrawn = requestCard (i)
          //find from mapping what the card is drawn
          //use renderedImage.image.visible
          //to find position : this.position = PField[(i+1) % 25];
          setTimeout(function() {renderedImage.visible= true},1000);
        }
        else {
          //show animation for deal
          switch (cardProperties.playerID){
            case 2 :
            case 3 :
            case 4 :
            default: null
          }
        }
      }
    }
}

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




var successFn = function(data) {
if(data == "true"){
      console.log(data)
  }
  else{
    console.log("false")
  }
  console.debug("Success of Ajax Call");
  console.debug(data);
  };

var errorFn = function(err) {
  console.debug("Error of ajax Call");
  console.debug(err);
}

function main() {
  //Start dealing
  var startButton = document.createElement("DealButton");

}
