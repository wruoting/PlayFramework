/*
  Game Graphics Engine
*/
//set up canvas//canvas
  var canvas = document.getElementById("gameBox");
  var ctx = canvas.getContext("2d");
  paper.setup(canvas);
//Declare all images used
var images = {};
var rendered_images = {};
images.TEN_OF_CLUBS = new Image();
images.TEN_OF_DIAMONDS = new Image();
images.TEN_OF_HEARTS = new Image();
images.TEN_OF_SPADES = new Image();
images.TWO_OF_CLUBS = new Image();
images.TWO_OF_DIAMONDS = new Image();
images.TWO_OF_HEARTS = new Image();
images.TWO_OF_SPADES = new Image();
images.THREE_OF_CLUBS = new Image();
images.THREE_OF_DIAMONDS = new Image();
images.THREE_OF_HEARTS = new Image();
images.THREE_OF_SPADES = new Image();
images.FOUR_OF_CLUBS = new Image();
images.FOUR_OF_DIAMONDS = new Image();
images.FOUR_OF_HEARTS = new Image();
images.FOUR_OF_SPADES = new Image();
images.FIVE_OF_CLUBS = new Image();
images.FIVE_OF_DIAMONDS = new Image();
images.FIVE_OF_HEARTS = new Image();
images.FIVE_OF_SPADES = new Image();
images.SIX_OF_CLUBS = new Image();
images.SIX_OF_DIAMONDS = new Image();
images.SIX_OF_HEARTS = new Image();
images.SIX_OF_SPADES = new Image();
images.SEVEN_OF_CLUBS = new Image();
images.SEVEN_OF_DIAMONDS = new Image();
images.SEVEN_OF_HEARTS = new Image();
images.SEVEN_OF_SPADES = new Image();
images.EIGHT_OF_CLUBS = new Image();
images.EIGHT_OF_DIAMONDS = new Image();
images.EIGHT_OF_HEARTS = new Image();
images.EIGHT_OF_SPADES = new Image();
images.NINE_OF_CLUBS = new Image();
images.NINE_OF_DIAMONDS = new Image();
images.NINE_OF_HEARTS = new Image();
images.NINE_OF_SPADES = new Image();
images.ACE_OF_CLUBS = new Image();
images.ACE_OF_DIAMONDS = new Image();
images.ACE_OF_HEARTS = new Image();
images.ACE_OF_SPADES = new Image();
images.JACK_OF_CLUBS = new Image();
images.JACK_OF_DIAMONDS = new Image();
images.JACK_OF_HEARTS = new Image();
images.JACK_OF_SPADES = new Image();
images.KING_OF_CLUBS = new Image();
images.KING_OF_DIAMONDS = new Image();
images.KING_OF_HEARTS = new Image();
images.KING_OF_SPADES = new Image();
images.QUEEN_OF_CLUBS = new Image();
images.QUEEN_OF_DIAMONDS = new Image();
images.QUEEN_OF_HEARTS = new Image();
images.QUEEN_OF_SPADES = new Image();
images.RED_JOKER = new Image();
images.BLACK_JOKER = new Image();
//Paths
images.TEN_OF_CLUBS.src = "../assets/images/10_of_clubs.png";
images.TEN_OF_DIAMONDS.src = "../assets/images/10_of_diamonds.png";
images.TEN_OF_HEARTS.src = "../assets/images/10_of_hearts.png";
images.TEN_OF_SPADES.src = "../assets/images/10_of_spades.png";
images.TWO_OF_CLUBS.src = "../assets/images/2_of_clubs.png";
images.TWO_OF_DIAMONDS.src = "../assets/images/2_of_diamonds.png";
images.TWO_OF_HEARTS.src = "../assets/images/2_of_hearts.png";
images.TWO_OF_SPADES.src = "../assets/images/2_of_spades.png";
images.THREE_OF_CLUBS.src = "../assets/images/3_of_clubs.png";
images.THREE_OF_DIAMONDS.src = "../assets/images/3_of_diamonds.png";
images.THREE_OF_HEARTS.src = "../assets/images/3_of_hearts.png";
images.THREE_OF_SPADES.src = "../assets/images/3_of_spades.png";
images.FOUR_OF_CLUBS.src = "../assets/images/4_of_clubs.png";
images.FOUR_OF_DIAMONDS.src = "../assets/images/4_of_diamonds.png";
images.FOUR_OF_HEARTS.src = "../assets/images/4_of_hearts.png";
images.FOUR_OF_SPADES.src = "../assets/images/4_of_spades.png";
images.FIVE_OF_CLUBS.src = "../assets/images/5_of_clubs.png";
images.FIVE_OF_DIAMONDS.src = "../assets/images/5_of_diamonds.png";
images.FIVE_OF_HEARTS.src = "../assets/images/5_of_hearts.png";
images.FIVE_OF_SPADES.src = "../assets/images/5_of_spades.png";
images.SIX_OF_CLUBS.src = "../assets/images/6_of_clubs.png";
images.SIX_OF_DIAMONDS.src = "../assets/images/6_of_diamonds.png";
images.SIX_OF_HEARTS.src = "../assets/images/6_of_hearts.png";
images.SIX_OF_SPADES.src = "../assets/images/6_of_spades.png";
images.SEVEN_OF_CLUBS.src = "../assets/images/7_of_clubs.png";
images.SEVEN_OF_DIAMONDS.src = "../assets/images/7_of_diamonds.png";
images.SEVEN_OF_HEARTS.src = "../assets/images/7_of_hearts.png";
images.SEVEN_OF_SPADES.src = "../assets/images/7_of_spades.png";
images.EIGHT_OF_CLUBS.src = "../assets/images/8_of_clubs.png";
images.EIGHT_OF_DIAMONDS.src = "../assets/images/8_of_diamonds.png";
images.EIGHT_OF_HEARTS.src = "../assets/images/8_of_hearts.png";
images.EIGHT_OF_SPADES.src = "../assets/images/8_of_spades.png";
images.NINE_OF_CLUBS.src = "../assets/images/9_of_clubs.png";
images.NINE_OF_DIAMONDS.src = "../assets/images/9_of_diamonds.png";
images.NINE_OF_HEARTS.src = "../assets/images/9_of_hearts.png";
images.NINE_OF_SPADES.src = "../assets/images/9_of_spades.png";
images.ACE_OF_CLUBS.src = "../assets/images/ace_of_clubs.png";
images.ACE_OF_DIAMONDS.src = "../assets/images/ace_of_diamonds.png";
images.ACE_OF_HEARTS.src = "../assets/images/ace_of_hearts.png";
images.ACE_OF_SPADES.src = "../assets/images/ace_of_spades.png";
images.JACK_OF_CLUBS.src = "../assets/images/jack_of_clubs2.png";
images.JACK_OF_DIAMONDS.src = "../assets/images/jack_of_diamonds2.png";
images.JACK_OF_HEARTS.src = "../assets/images/jack_of_hearts2.png";
images.JACK_OF_SPADES.src = "../assets/images/jack_of_spades2.png";
images.KING_OF_CLUBS.src = "../assets/images/king_of_clubs2.png";
images.KING_OF_DIAMONDS.src = "../assets/images/king_of_diamonds2.png";
images.KING_OF_HEARTS.src = "../assets/images/king_of_hearts2.png";
images.KING_OF_SPADES.src = "../assets/images/king_of_spades2.png";
images.QUEEN_OF_CLUBS.src = "../assets/images/queen_of_clubs2.png";
images.QUEEN_OF_DIAMONDS.src = "../assets/images/queen_of_diamonds2.png";
images.QUEEN_OF_HEARTS.src = "../assets/images/queen_of_hearts2.png";
images.QUEEN_OF_SPADES.src = "../assets/images/queen_of_spades2.png";
images.RED_JOKER.src = "../assets/images/red_joker.png";
images.BLACK_JOKER.src = "../assets/images/black_joker.png";

window.onload = function() {
//Raster for all images
//Type: Item, Object
//Package: Paper.js
rendered_images.TEN_OF_CLUBS_RASTER= new paper.Raster(images.TEN_OF_CLUBS);
rendered_images.TEN_OF_DIAMONDS_RASTER= new paper.Raster(images.TEN_OF_DIAMONDS);
rendered_images.TEN_OF_HEARTS_RASTER= new paper.Raster(images.TEN_OF_HEARTS);
rendered_images.TEN_OF_SPADES_RASTER= new paper.Raster(images.TEN_OF_SPADES);
rendered_images.TWO_OF_CLUBS_RASTER= new paper.Raster(images.TWO_OF_CLUBS);
rendered_images.TWO_OF_DIAMONDS_RASTER= new paper.Raster(images.TWO_OF_DIAMONDS);
rendered_images.TWO_OF_HEARTS_RASTER= new paper.Raster(images.TWO_OF_HEARTS);
rendered_images.TWO_OF_SPADES_RASTER= new paper.Raster(images.TWO_OF_SPADES);
rendered_images.THREE_OF_CLUBS_RASTER= new paper.Raster(images.THREE_OF_CLUBS);
rendered_images.THREE_OF_DIAMONDS_RASTER= new paper.Raster(images.THREE_OF_DIAMONDS);
rendered_images.THREE_OF_HEARTS_RASTER= new paper.Raster(images.THREE_OF_HEARTS);
rendered_images.THREE_OF_SPADES_RASTER= new paper.Raster(images.THREE_OF_SPADES);
rendered_images.FOUR_OF_CLUBS_RASTER= new paper.Raster(images.FOUR_OF_CLUBS);
rendered_images.FOUR_OF_DIAMONDS_RASTER= new paper.Raster(images.FOUR_OF_DIAMONDS);
rendered_images.FOUR_OF_HEARTS_RASTER= new paper.Raster(images.FOUR_OF_HEARTS);
rendered_images.FOUR_OF_SPADES_RASTER= new paper.Raster(images.FOUR_OF_SPADES);
rendered_images.FIVE_OF_CLUBS_RASTER= new paper.Raster(images.FIVE_OF_CLUBS);
rendered_images.FIVE_OF_DIAMONDS_RASTER= new paper.Raster(images.FIVE_OF_DIAMONDS);
rendered_images.FIVE_OF_HEARTS_RASTER= new paper.Raster(images.FIVE_OF_HEARTS);
rendered_images.FIVE_OF_SPADES_RASTER= new paper.Raster(images.FIVE_OF_SPADES);
rendered_images.SIX_OF_CLUBS_RASTER= new paper.Raster(images.SIX_OF_CLUBS);
rendered_images.SIX_OF_DIAMONDS_RASTER= new paper.Raster(images.SIX_OF_DIAMONDS);
rendered_images.SIX_OF_HEARTS_RASTER= new paper.Raster(images.SIX_OF_HEARTS);
rendered_images.SIX_OF_SPADES_RASTER= new paper.Raster(images.SIX_OF_SPADES);
rendered_images.SEVEN_OF_CLUBS_RASTER= new paper.Raster(images.SEVEN_OF_CLUBS);
rendered_images.SEVEN_OF_DIAMONDS_RASTER= new paper.Raster(images.SEVEN_OF_DIAMONDS);
rendered_images.SEVEN_OF_HEARTS_RASTER= new paper.Raster(images.SEVEN_OF_HEARTS);
rendered_images.SEVEN_OF_SPADES_RASTER= new paper.Raster(images.SEVEN_OF_SPADES);
rendered_images.EIGHT_OF_CLUBS_RASTER= new paper.Raster(images.EIGHT_OF_CLUBS);
rendered_images.EIGHT_OF_DIAMONDS_RASTER= new paper.Raster(images.EIGHT_OF_DIAMONDS);
rendered_images.EIGHT_OF_HEARTS_RASTER= new paper.Raster(images.EIGHT_OF_HEARTS);
rendered_images.EIGHT_OF_SPADES_RASTER= new paper.Raster(images.EIGHT_OF_SPADES);
rendered_images.NINE_OF_CLUBS_RASTER= new paper.Raster(images.NINE_OF_CLUBS);
rendered_images.NINE_OF_DIAMONDS_RASTER= new paper.Raster(images.NINE_OF_DIAMONDS);
rendered_images.NINE_OF_HEARTS_RASTER= new paper.Raster(images.NINE_OF_HEARTS);
rendered_images.NINE_OF_SPADES_RASTER= new paper.Raster(images.NINE_OF_SPADES);
rendered_images.ACE_OF_CLUBS_RASTER= new paper.Raster(images.ACE_OF_CLUBS);
rendered_images.ACE_OF_DIAMONDS_RASTER= new paper.Raster(images.ACE_OF_DIAMONDS);
rendered_images.ACE_OF_HEARTS_RASTER= new paper.Raster(images.ACE_OF_HEARTS);
rendered_images.ACE_OF_SPADES_RASTER= new paper.Raster(images.ACE_OF_SPADES);
rendered_images.JACK_OF_CLUBS_RASTER= new paper.Raster(images.JACK_OF_CLUBS);
rendered_images.JACK_OF_DIAMONDS_RASTER= new paper.Raster(images.JACK_OF_DIAMONDS);
rendered_images.JACK_OF_HEARTS_RASTER= new paper.Raster(images.JACK_OF_HEARTS);
rendered_images.JACK_OF_SPADES_RASTER= new paper.Raster(images.JACK_OF_SPADES);
rendered_images.KING_OF_CLUBS_RASTER= new paper.Raster(images.KING_OF_CLUBS);
rendered_images.KING_OF_DIAMONDS_RASTER= new paper.Raster(images.KING_OF_DIAMONDS);
rendered_images.KING_OF_HEARTS_RASTER= new paper.Raster(images.KING_OF_HEARTS);
rendered_images.KING_OF_SPADES_RASTER= new paper.Raster(images.KING_OF_SPADES);
rendered_images.QUEEN_OF_CLUBS_RASTER= new paper.Raster(images.QUEEN_OF_CLUBS);
rendered_images.QUEEN_OF_DIAMONDS_RASTER= new paper.Raster(images.QUEEN_OF_DIAMONDS);
rendered_images.QUEEN_OF_HEARTS_RASTER= new paper.Raster(images.QUEEN_OF_HEARTS);
rendered_images.QUEEN_OF_SPADES_RASTER= new paper.Raster(images.QUEEN_OF_SPADES);
rendered_images.RED_JOKER_RASTER= new paper.Raster(images.RED_JOKER);
rendered_images.BLACK_JOKER_RASTER= new paper.Raster(images.BLACK_JOKER);
//paper is the variable that is added to the images scope, and references the active PaperScope project and all Paper.js classes can be accessed

//Define Suit Property
for(key in rendered_images) {
  var diamonds = /DIAMONDS/.test(key);
  var spades = /SPADES/.test(key);
  var clubs = /CLUBS/.test(key);
  var hearts = /HEARTS/.test(key);
  var joker = /JOKER/.test(key);
  if(diamonds) {
    rendered_images[key].Suit = "Diamond";
  }
  if(spades) {
    rendered_images[key].Suit = "Spade";
  }
  if(clubs) {
    rendered_images[key].Suit = "Club";
  }
  if(hearts) {
    rendered_images[key].Suit = "Heart";
  }
  if(joker) {
    rendered_images[key].Suit = "Joker";
  }
}

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

  var pointCenter = new paper.Point(550,500);

  rendered_images.TEN_OF_CLUBS_RASTER.position = cardPosition[0];
  rendered_images.TEN_OF_DIAMONDS_RASTER.position = cardPosition[1];

  rendered_images.TEN_OF_CLUBS_RASTER.visible= true;
  rendered_images.TEN_OF_DIAMONDS_RASTER.visible= true;
  var A = rendered_images.TEN_OF_CLUBS_RASTER;
  var validClick = true;
  //can wrap to make more generic

  chooseCard(A,validClick,pointCenter);
  var A = rendered_images.TEN_OF_DIAMONDS_RASTER;
  chooseCard(A,validClick,pointCenter);
}

//Parameters: paper.Raster, Boolean, paper.Point
//Return: null
function chooseCard(renderedImage,validClick,pointCenter) {
  if(validClick) {
    renderedImage.onClick = function(event) {
        this.position = pointCenter;
        setTimeout(function() {renderedImage.visible= false},1000);
        $.ajax({
          type: "POST",
          url: "@{jsRoutes.controllers.HomeController.newItem}",
          data: {

          }
        });
    }
  }
}


var ajax1 = {
  success: successFn,
  error: errorFn
}

var successFn = function(data) {
if(data == "true"){
      console.log("true")
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



var ajax2 = {
  success: console.log("good"),
  error: console.log("bad")
}

function validClick() {
  var confirmation = true;
  //jsRoutes.controllers.HomeController.getItem(confirmation).ajax(ajax1);

}
// function main() {
//   //Start dealing
//   var startButton = document.createElement("DealButton");
//
// }
