//Global Images
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
