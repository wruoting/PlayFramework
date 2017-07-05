/*
  Game Graphics Engine
*/
//Declare all images used
var global = {};
global.TEN_OF_CLUBS = new Image();
global.TEN_OF_DIAMONDS = new Image();
global.TEN_OF_HEARTS = new Image();
global.TEN_OF_SPADES = new Image();
global.TWO_OF_CLUBS = new Image();
global.TWO_OF_DIAMONDS = new Image();
global.TWO_OF_HEARTS = new Image();
global.TWO_OF_SPADES = new Image();
global.THREE_OF_CLUBS = new Image();
global.THREE_OF_DIAMONDS = new Image();
global.THREE_OF_HEARTS = new Image();
global.THREE_OF_SPADES = new Image();
global.FOUR_OF_CLUBS = new Image();
global.FOUR_OF_DIAMONDS = new Image();
global.FOUR_OF_HEARTS = new Image();
global.FOUR_OF_SPADES = new Image();
global.FIVE_OF_CLUBS = new Image();
global.FIVE_OF_DIAMONDS = new Image();
global.FIVE_OF_HEARTS = new Image();
global.FIVE_OF_SPADES = new Image();
global.SIX_OF_CLUBS = new Image();
global.SIX_OF_DIAMONDS = new Image();
global.SIX_OF_HEARTS = new Image();
global.SIX_OF_SPADES = new Image();
global.SEVEN_OF_CLUBS = new Image();
global.SEVEN_OF_DIAMONDS = new Image();
global.SEVEN_OF_HEARTS = new Image();
global.SEVEN_OF_SPADES = new Image();
global.EIGHT_OF_CLUBS = new Image();
global.EIGHT_OF_DIAMONDS = new Image();
global.EIGHT_OF_HEARTS = new Image();
global.EIGHT_OF_SPADES = new Image();
global.NINE_OF_CLUBS = new Image();
global.NINE_OF_DIAMONDS = new Image();
global.NINE_OF_HEARTS = new Image();
global.NINE_OF_SPADES = new Image();
global.ACE_OF_CLUBS = new Image();
global.ACE_OF_DIAMONDS = new Image();
global.ACE_OF_HEARTS = new Image();
global.ACE_OF_SPADES = new Image();
global.JACK_OF_CLUBS = new Image();
global.JACK_OF_DIAMONDS = new Image();
global.JACK_OF_HEARTS = new Image();
global.JACK_OF_SPADES = new Image();
global.KING_OF_CLUBS = new Image();
global.KING_OF_DIAMONDS = new Image();
global.KING_OF_HEARTS = new Image();
global.KING_OF_SPADES = new Image();
global.QUEEN_OF_CLUBS = new Image();
global.QUEEN_OF_DIAMONDS = new Image();
global.QUEEN_OF_HEARTS = new Image();
global.QUEEN_OF_SPADES = new Image();
global.RED_JOKER = new Image();
global.BLACK_JOKER = new Image();
//Paths
global.TEN_OF_CLUBS.src = "../assets/images/10_of_clubs.png";
global.TEN_OF_DIAMONDS.src = "../assets/images/10_of_diamonds.png";
global.TEN_OF_HEARTS.src = "../assets/images/10_of_hearts.png";
global.TEN_OF_SPADES.src = "../assets/images/10_of_spades.png";
global.TWO_OF_CLUBS.src = "../assets/images/2_of_clubs.png";
global.TWO_OF_DIAMONDS.src = "../assets/images/2_of_diamonds.png";
global.TWO_OF_HEARTS.src = "../assets/images/2_of_hearts.png";
global.TWO_OF_SPADES.src = "../assets/images/2_of_spades.png";
global.THREE_OF_CLUBS.src = "../assets/images/3_of_clubs.png";
global.THREE_OF_DIAMONDS.src = "../assets/images/3_of_diamonds.png";
global.THREE_OF_HEARTS.src = "../assets/images/3_of_hearts.png";
global.THREE_OF_SPADES.src = "../assets/images/3_of_spades.png";
global.FOUR_OF_CLUBS.src = "../assets/images/4_of_clubs.png";
global.FOUR_OF_DIAMONDS.src = "../assets/images/4_of_diamonds.png";
global.FOUR_OF_HEARTS.src = "../assets/images/4_of_hearts.png";
global.FOUR_OF_SPADES.src = "../assets/images/4_of_spades.png";
global.FIVE_OF_CLUBS.src = "../assets/images/5_of_clubs.png";
global.FIVE_OF_DIAMONDS.src = "../assets/images/5_of_diamonds.png";
global.FIVE_OF_HEARTS.src = "../assets/images/5_of_hearts.png";
global.FIVE_OF_SPADES.src = "../assets/images/5_of_spades.png";
global.SIX_OF_CLUBS.src = "../assets/images/6_of_clubs.png";
global.SIX_OF_DIAMONDS.src = "../assets/images/6_of_diamonds.png";
global.SIX_OF_HEARTS.src = "../assets/images/6_of_hearts.png";
global.SIX_OF_SPADES.src = "../assets/images/6_of_spades.png";
global.SEVEN_OF_CLUBS.src = "../assets/images/7_of_clubs.png";
global.SEVEN_OF_DIAMONDS.src = "../assets/images/7_of_diamonds.png";
global.SEVEN_OF_HEARTS.src = "../assets/images/7_of_hearts.png";
global.SEVEN_OF_SPADES.src = "../assets/images/7_of_spades.png";
global.EIGHT_OF_CLUBS.src = "../assets/images/8_of_clubs.png";
global.EIGHT_OF_DIAMONDS.src = "../assets/images/8_of_diamonds.png";
global.EIGHT_OF_HEARTS.src = "../assets/images/8_of_hearts.png";
global.EIGHT_OF_SPADES.src = "../assets/images/8_of_spades.png";
global.NINE_OF_CLUBS.src = "../assets/images/9_of_clubs.png";
global.NINE_OF_DIAMONDS.src = "../assets/images/9_of_diamonds.png";
global.NINE_OF_HEARTS.src = "../assets/images/9_of_hearts.png";
global.NINE_OF_SPADES.src = "../assets/images/9_of_spades.png";
global.ACE_OF_CLUBS.src = "../assets/images/ace_of_clubs.png";
global.ACE_OF_DIAMONDS.src = "../assets/images/ace_of_diamonds.png";
global.ACE_OF_HEARTS.src = "../assets/images/ace_of_hearts.png";
global.ACE_OF_SPADES.src = "../assets/images/ace_of_spades.png";
global.JACK_OF_CLUBS.src = "../assets/images/jack_of_clubs2.png";
global.JACK_OF_DIAMONDS.src = "../assets/images/jack_of_diamonds2.png";
global.JACK_OF_HEARTS.src = "../assets/images/jack_of_hearts2.png";
global.JACK_OF_SPADES.src = "../assets/images/jack_of_spades2.png";
global.KING_OF_CLUBS.src = "../assets/images/king_of_clubs2.png";
global.KING_OF_DIAMONDS.src = "../assets/images/king_of_diamonds2.png";
global.KING_OF_HEARTS.src = "../assets/images/king_of_hearts2.png";
global.KING_OF_SPADES.src = "../assets/images/king_of_spades2.png";
global.QUEEN_OF_CLUBS.src = "../assets/images/queen_of_clubs2.png";
global.QUEEN_OF_DIAMONDS.src = "../assets/images/queen_of_diamonds2.png";
global.QUEEN_OF_HEARTS.src = "../assets/images/queen_of_hearts2.png";
global.QUEEN_OF_SPADES.src = "../assets/images/queen_of_spades2.png";
global.RED_JOKER.src = "../assets/images/red_joker.png";
global.BLACK_JOKER.src = "../assets/images/black_joker.png";
//canvas
var canvas = document.getElementById("gameBox");
var ctx = canvas.getContext("2d");




function startGame() {
  jsRoutes.controllers.HomeController.getItem("test")
}

function validClick() {


}
function onClick() {

}

startGame();
