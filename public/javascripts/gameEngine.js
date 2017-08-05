/*
  Game Graphics Engine
*/


window.onload = function() {

//paper is the variable that is added to the images scope, and references the active PaperScope project and all Paper.js classes can be accessed



//Scale, set all images to not show unless necessary
Object.keys(rendered_images).forEach(function (key) {
  rendered_images[key].scale(0.2);
  rendered_images[key].visible = false;
})

//Creates the spaces for cards
//Parameters: n/a
//Return: cardPosition: Array
var cardPosition =  function() {
  var cardPosition = [];
  for(var i = 0;i<13;i++) {
    var displace = 250 + i*20;
    cardPosition[i] = new paper.Point(displace,800);
  }
  return cardPosition;
}(); //this is a self invoking function since it has () at the end. Only runs once since it returns an array once.

  //Center of the field
  var PField = new Array(4);
  for(var i = 0; i < 4 ; i++ ) {
    switch(i) {
      case 0:
        PField [i] = new paper.Point(550,500);
        break;
      case 1:
        PField [i] = new paper.Point(500,450);
        break;
      case 2:
        PField [i] = new paper.Point(600,450);
        break;
      case 3:
        PField [i] = new paper.Point(550,400);
        break;
    }
  }
  var cardProperties = {
    playerID: 1,
    cardNumber: 1,
    cardState: 0
  }
  var validClick = true;

  rendered_images.TEN_OF_CLUBS_RASTER.position = cardPosition[0];
  rendered_images.TEN_OF_DIAMONDS_RASTER.position = cardPosition[1];
  rendered_images.NINE_OF_CLUBS_RASTER.position = cardPosition[2];
  rendered_images.EIGHT_OF_HEARTS_RASTER.position = cardPosition[3];

  rendered_images.TEN_OF_CLUBS_RASTER.visible= true;
  rendered_images.TEN_OF_DIAMONDS_RASTER.visible= true;
  rendered_images.NINE_OF_CLUBS_RASTER.visible= true;
  rendered_images.EIGHT_OF_HEARTS_RASTER.visible= true;


  //can wrap to make more generic
  var A = rendered_images.TEN_OF_CLUBS_RASTER;
  chooseCard(A,validClick,PField[0],cardProperties);
  var A = rendered_images.TEN_OF_DIAMONDS_RASTER;
  chooseCard(A,validClick,PField[1],cardProperties);
  var A = rendered_images.NINE_OF_CLUBS_RASTER;
  chooseCard(A,validClick,PField[2],cardProperties);
  var A = rendered_images.EIGHT_OF_HEARTS_RASTER;
  chooseCard(A,validClick,PField[3],cardProperties);
}
var ajax1 = {
  success: successFn,
  error: errorFn
}

//Parameters: paper.Raster, Boolean, paper.Point
//Return: null
function chooseCard(renderedImage,validClick,PField,cardProperties) {
  if(validClick) {
    renderedImage.onClick = function(event) {
        this.position = PField;
        //setTimeout(function() {renderedImage.visible= false},1000);
        //playerID, card number, card state
        $.get(jsRoutes.controllers.HomeController.updateItem(cardProperties.playerID,cardProperties.cardNumber,cardProperties.cardState),function(data) {
        })
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
