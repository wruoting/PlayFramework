
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

images.TEN_OF_CLUBS_2 = new Image();
images.TEN_OF_DIAMONDS_2 = new Image();
images.TEN_OF_HEARTS_2 = new Image();
images.TEN_OF_SPADES_2 = new Image();
images.TWO_OF_CLUBS_2 = new Image();
images.TWO_OF_DIAMONDS_2 = new Image();
images.TWO_OF_HEARTS_2 = new Image();
images.TWO_OF_SPADES_2 = new Image();
images.THREE_OF_CLUBS_2 = new Image();
images.THREE_OF_DIAMONDS_2 = new Image();
images.THREE_OF_HEARTS_2 = new Image();
images.THREE_OF_SPADES_2 = new Image();
images.FOUR_OF_CLUBS_2 = new Image();
images.FOUR_OF_DIAMONDS_2 = new Image();
images.FOUR_OF_HEARTS_2 = new Image();
images.FOUR_OF_SPADES_2 = new Image();
images.FIVE_OF_CLUBS_2 = new Image();
images.FIVE_OF_DIAMONDS_2 = new Image();
images.FIVE_OF_HEARTS_2 = new Image();
images.FIVE_OF_SPADES_2 = new Image();
images.SIX_OF_CLUBS_2 = new Image();
images.SIX_OF_DIAMONDS_2 = new Image();
images.SIX_OF_HEARTS_2 = new Image();
images.SIX_OF_SPADES_2 = new Image();
images.SEVEN_OF_CLUBS_2 = new Image();
images.SEVEN_OF_DIAMONDS_2 = new Image();
images.SEVEN_OF_HEARTS_2 = new Image();
images.SEVEN_OF_SPADES_2 = new Image();
images.EIGHT_OF_CLUBS_2 = new Image();
images.EIGHT_OF_DIAMONDS_2 = new Image();
images.EIGHT_OF_HEARTS_2 = new Image();
images.EIGHT_OF_SPADES_2 = new Image();
images.NINE_OF_CLUBS_2 = new Image();
images.NINE_OF_DIAMONDS_2 = new Image();
images.NINE_OF_HEARTS_2 = new Image();
images.NINE_OF_SPADES_2 = new Image();
images.ACE_OF_CLUBS_2 = new Image();
images.ACE_OF_DIAMONDS_2 = new Image();
images.ACE_OF_HEARTS_2 = new Image();
images.ACE_OF_SPADES_2 = new Image();
images.JACK_OF_CLUBS_2 = new Image();
images.JACK_OF_DIAMONDS_2 = new Image();
images.JACK_OF_HEARTS_2 = new Image();
images.JACK_OF_SPADES_2 = new Image();
images.KING_OF_CLUBS_2 = new Image();
images.KING_OF_DIAMONDS_2 = new Image();
images.KING_OF_HEARTS_2 = new Image();
images.KING_OF_SPADES_2 = new Image();
images.QUEEN_OF_CLUBS_2 = new Image();
images.QUEEN_OF_DIAMONDS_2 = new Image();
images.QUEEN_OF_HEARTS_2 = new Image();
images.QUEEN_OF_SPADES_2 = new Image();
images.RED_JOKER_2 = new Image();
images.BLACK_JOKER_2 = new Image();
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

images.TEN_OF_CLUBS_2.src = "../assets/images/10_of_clubs.png";
images.TEN_OF_DIAMONDS_2.src = "../assets/images/10_of_diamonds.png";
images.TEN_OF_HEARTS_2.src = "../assets/images/10_of_hearts.png";
images.TEN_OF_SPADES_2.src = "../assets/images/10_of_spades.png";
images.TWO_OF_CLUBS_2.src = "../assets/images/2_of_clubs.png";
images.TWO_OF_DIAMONDS_2.src = "../assets/images/2_of_diamonds.png";
images.TWO_OF_HEARTS_2.src = "../assets/images/2_of_hearts.png";
images.TWO_OF_SPADES_2.src = "../assets/images/2_of_spades.png";
images.THREE_OF_CLUBS_2.src = "../assets/images/3_of_clubs.png";
images.THREE_OF_DIAMONDS_2.src = "../assets/images/3_of_diamonds.png";
images.THREE_OF_HEARTS_2.src = "../assets/images/3_of_hearts.png";
images.THREE_OF_SPADES_2.src = "../assets/images/3_of_spades.png";
images.FOUR_OF_CLUBS_2.src = "../assets/images/4_of_clubs.png";
images.FOUR_OF_DIAMONDS_2.src = "../assets/images/4_of_diamonds.png";
images.FOUR_OF_HEARTS_2.src = "../assets/images/4_of_hearts.png";
images.FOUR_OF_SPADES_2.src = "../assets/images/4_of_spades.png";
images.FIVE_OF_CLUBS_2.src = "../assets/images/5_of_clubs.png";
images.FIVE_OF_DIAMONDS_2.src = "../assets/images/5_of_diamonds.png";
images.FIVE_OF_HEARTS_2.src = "../assets/images/5_of_hearts.png";
images.FIVE_OF_SPADES_2.src = "../assets/images/5_of_spades.png";
images.SIX_OF_CLUBS_2.src = "../assets/images/6_of_clubs.png";
images.SIX_OF_DIAMONDS_2.src = "../assets/images/6_of_diamonds.png";
images.SIX_OF_HEARTS_2.src = "../assets/images/6_of_hearts.png";
images.SIX_OF_SPADES_2.src = "../assets/images/6_of_spades.png";
images.SEVEN_OF_CLUBS_2.src = "../assets/images/7_of_clubs.png";
images.SEVEN_OF_DIAMONDS_2.src = "../assets/images/7_of_diamonds.png";
images.SEVEN_OF_HEARTS_2.src = "../assets/images/7_of_hearts.png";
images.SEVEN_OF_SPADES_2.src = "../assets/images/7_of_spades.png";
images.EIGHT_OF_CLUBS_2.src = "../assets/images/8_of_clubs.png";
images.EIGHT_OF_DIAMONDS_2.src = "../assets/images/8_of_diamonds.png";
images.EIGHT_OF_HEARTS_2.src = "../assets/images/8_of_hearts.png";
images.EIGHT_OF_SPADES_2.src = "../assets/images/8_of_spades.png";
images.NINE_OF_CLUBS_2.src = "../assets/images/9_of_clubs.png";
images.NINE_OF_DIAMONDS_2.src = "../assets/images/9_of_diamonds.png";
images.NINE_OF_HEARTS_2.src = "../assets/images/9_of_hearts.png";
images.NINE_OF_SPADES_2.src = "../assets/images/9_of_spades.png";
images.ACE_OF_CLUBS_2.src = "../assets/images/ace_of_clubs.png";
images.ACE_OF_DIAMONDS_2.src = "../assets/images/ace_of_diamonds.png";
images.ACE_OF_HEARTS_2.src = "../assets/images/ace_of_hearts.png";
images.ACE_OF_SPADES_2.src = "../assets/images/ace_of_spades.png";
images.JACK_OF_CLUBS_2.src = "../assets/images/jack_of_clubs2.png";
images.JACK_OF_DIAMONDS_2.src = "../assets/images/jack_of_diamonds2.png";
images.JACK_OF_HEARTS_2.src = "../assets/images/jack_of_hearts2.png";
images.JACK_OF_SPADES_2.src = "../assets/images/jack_of_spades2.png";
images.KING_OF_CLUBS_2.src = "../assets/images/king_of_clubs2.png";
images.KING_OF_DIAMONDS_2.src = "../assets/images/king_of_diamonds2.png";
images.KING_OF_HEARTS_2.src = "../assets/images/king_of_hearts2.png";
images.KING_OF_SPADES_2.src = "../assets/images/king_of_spades2.png";
images.QUEEN_OF_CLUBS_2.src = "../assets/images/queen_of_clubs2.png";
images.QUEEN_OF_DIAMONDS_2.src = "../assets/images/queen_of_diamonds2.png";
images.QUEEN_OF_HEARTS_2.src = "../assets/images/queen_of_hearts2.png";
images.QUEEN_OF_SPADES_2.src = "../assets/images/queen_of_spades2.png";
images.RED_JOKER_2.src = "../assets/images/red_joker.png";
images.BLACK_JOKER_2.src = "../assets/images/black_joker.png";


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
rendered_images.TEN_OF_CLUBS_RASTER_2= new paper.Raster(images.TEN_OF_CLUBS_2);
rendered_images.TEN_OF_DIAMONDS_RASTER_2= new paper.Raster(images.TEN_OF_DIAMONDS_2);
rendered_images.TEN_OF_HEARTS_RASTER_2= new paper.Raster(images.TEN_OF_HEARTS_2);
rendered_images.TEN_OF_SPADES_RASTER_2= new paper.Raster(images.TEN_OF_SPADES_2);
rendered_images.TWO_OF_CLUBS_RASTER_2= new paper.Raster(images.TWO_OF_CLUBS_2);
rendered_images.TWO_OF_DIAMONDS_RASTER_2= new paper.Raster(images.TWO_OF_DIAMONDS_2);
rendered_images.TWO_OF_HEARTS_RASTER_2= new paper.Raster(images.TWO_OF_HEARTS_2);
rendered_images.TWO_OF_SPADES_RASTER_2= new paper.Raster(images.TWO_OF_SPADES_2);
rendered_images.THREE_OF_CLUBS_RASTER_2= new paper.Raster(images.THREE_OF_CLUBS_2);
rendered_images.THREE_OF_DIAMONDS_RASTER_2= new paper.Raster(images.THREE_OF_DIAMONDS_2);
rendered_images.THREE_OF_HEARTS_RASTER_2= new paper.Raster(images.THREE_OF_HEARTS_2);
rendered_images.THREE_OF_SPADES_RASTER_2= new paper.Raster(images.THREE_OF_SPADES_2);
rendered_images.FOUR_OF_CLUBS_RASTER_2= new paper.Raster(images.FOUR_OF_CLUBS_2);
rendered_images.FOUR_OF_DIAMONDS_RASTER_2= new paper.Raster(images.FOUR_OF_DIAMONDS_2);
rendered_images.FOUR_OF_HEARTS_RASTER_2= new paper.Raster(images.FOUR_OF_HEARTS_2);
rendered_images.FOUR_OF_SPADES_RASTER_2= new paper.Raster(images.FOUR_OF_SPADES_2);
rendered_images.FIVE_OF_CLUBS_RASTER_2= new paper.Raster(images.FIVE_OF_CLUBS_2);
rendered_images.FIVE_OF_DIAMONDS_RASTER_2= new paper.Raster(images.FIVE_OF_DIAMONDS_2);
rendered_images.FIVE_OF_HEARTS_RASTER_2= new paper.Raster(images.FIVE_OF_HEARTS_2);
rendered_images.FIVE_OF_SPADES_RASTER_2= new paper.Raster(images.FIVE_OF_SPADES_2);
rendered_images.SIX_OF_CLUBS_RASTER_2= new paper.Raster(images.SIX_OF_CLUBS_2);
rendered_images.SIX_OF_DIAMONDS_RASTER_2= new paper.Raster(images.SIX_OF_DIAMONDS_2);
rendered_images.SIX_OF_HEARTS_RASTER_2= new paper.Raster(images.SIX_OF_HEARTS_2);
rendered_images.SIX_OF_SPADES_RASTER_2= new paper.Raster(images.SIX_OF_SPADES_2);
rendered_images.SEVEN_OF_CLUBS_RASTER_2= new paper.Raster(images.SEVEN_OF_CLUBS_2);
rendered_images.SEVEN_OF_DIAMONDS_RASTER_2= new paper.Raster(images.SEVEN_OF_DIAMONDS_2);
rendered_images.SEVEN_OF_HEARTS_RASTER_2= new paper.Raster(images.SEVEN_OF_HEARTS_2);
rendered_images.SEVEN_OF_SPADES_RASTER_2= new paper.Raster(images.SEVEN_OF_SPADES_2);
rendered_images.EIGHT_OF_CLUBS_RASTER_2= new paper.Raster(images.EIGHT_OF_CLUBS_2);
rendered_images.EIGHT_OF_DIAMONDS_RASTER_2= new paper.Raster(images.EIGHT_OF_DIAMONDS_2);
rendered_images.EIGHT_OF_HEARTS_RASTER_2= new paper.Raster(images.EIGHT_OF_HEARTS_2);
rendered_images.EIGHT_OF_SPADES_RASTER_2= new paper.Raster(images.EIGHT_OF_SPADES_2);
rendered_images.NINE_OF_CLUBS_RASTER_2= new paper.Raster(images.NINE_OF_CLUBS_2);
rendered_images.NINE_OF_DIAMONDS_RASTER_2= new paper.Raster(images.NINE_OF_DIAMONDS_2);
rendered_images.NINE_OF_HEARTS_RASTER_2= new paper.Raster(images.NINE_OF_HEARTS_2);
rendered_images.NINE_OF_SPADES_RASTER_2= new paper.Raster(images.NINE_OF_SPADES_2);
rendered_images.ACE_OF_CLUBS_RASTER_2= new paper.Raster(images.ACE_OF_CLUBS_2);
rendered_images.ACE_OF_DIAMONDS_RASTER_2= new paper.Raster(images.ACE_OF_DIAMONDS_2);
rendered_images.ACE_OF_HEARTS_RASTER_2= new paper.Raster(images.ACE_OF_HEARTS_2);
rendered_images.ACE_OF_SPADES_RASTER_2= new paper.Raster(images.ACE_OF_SPADES_2);
rendered_images.JACK_OF_CLUBS_RASTER_2= new paper.Raster(images.JACK_OF_CLUBS_2);
rendered_images.JACK_OF_DIAMONDS_RASTER_2= new paper.Raster(images.JACK_OF_DIAMONDS_2);
rendered_images.JACK_OF_HEARTS_RASTER_2= new paper.Raster(images.JACK_OF_HEARTS_2);
rendered_images.JACK_OF_SPADES_RASTER_2= new paper.Raster(images.JACK_OF_SPADES_2);
rendered_images.KING_OF_CLUBS_RASTER_2= new paper.Raster(images.KING_OF_CLUBS_2);
rendered_images.KING_OF_DIAMONDS_RASTER_2= new paper.Raster(images.KING_OF_DIAMONDS_2);
rendered_images.KING_OF_HEARTS_RASTER_2= new paper.Raster(images.KING_OF_HEARTS_2);
rendered_images.KING_OF_SPADES_RASTER_2= new paper.Raster(images.KING_OF_SPADES_2);
rendered_images.QUEEN_OF_CLUBS_RASTER_2= new paper.Raster(images.QUEEN_OF_CLUBS_2);
rendered_images.QUEEN_OF_DIAMONDS_RASTER_2= new paper.Raster(images.QUEEN_OF_DIAMONDS_2);
rendered_images.QUEEN_OF_HEARTS_RASTER_2= new paper.Raster(images.QUEEN_OF_HEARTS_2);
rendered_images.QUEEN_OF_SPADES_RASTER_2= new paper.Raster(images.QUEEN_OF_SPADES_2);
rendered_images.RED_JOKER_RASTER_2= new paper.Raster(images.RED_JOKER_2);
rendered_images.BLACK_JOKER_RASTER_2= new paper.Raster(images.BLACK_JOKER_2);


var DeckBuilding = {
  Clubs: {},
  Diamonds: {},
  Hearts: {},
  Spades: {},
  Jokers : {}
};
var CardKeys = {
  Two : {},
  Three : {},
  Four : {},
  Five : {},
  Six : {},
  Seven : {},
  Eight : {},
  Nine : {},
  Jack : {},
  Queen : {},
  King : {},
  Ace : {}
}
var JokerKeys = {
  Red : {},
  Black : {}
}
var ImageKey = {
  Image: {}
}

var VersionKey = {
  One : {},
  Two : {}
}
//spread syntax allows an iterable to be expanded where object literals are expanded. basically allows you to not just reference when Object[key]= Object B.

Object.keys(JokerKeys).forEach(function (key) {
  JokerKeys[key] =  jQuery.extend(true,{},ImageKey);
});
Object.keys(CardKeys).forEach(function (key) {
  CardKeys[key] = jQuery.extend(true,{},ImageKey);
});
Object.keys(DeckBuilding).forEach(function (key) {
  if(key != "Jokers") {
      DeckBuilding[key] =   jQuery.extend(true,{},CardKeys);
  }
  else {
      DeckBuilding[key] =  jQuery.extend(true,{},JokerKeys);
  }
});
Object.keys(VersionKey).forEach(function (key) {
  VersionKey[key] = jQuery.extend(true,{},DeckBuilding);
});

//need to figure out naming for image source and raster source
Object.keys(VersionKey).forEach(function (DeckNumber) {
  //One and Two
    Object.keys(VersionKey[DeckNumber]).forEach(function (SuitNumber) {
      //Suits and Jokers
      Object.keys(VersionKey[DeckNumber][SuitNumber]).forEach(function (CardNumber) {
            //Image, src, rastered
            Object.keys(VersionKey[DeckNumber][SuitNumber][CardNumber]).forEach(function (ImageNumber) {
                if(ImageNumber == "Image"){
                  //the src property needs to be deep cloned
                  VersionKey[DeckNumber][SuitNumber][CardNumber]["Image"] = jQuery.extend(true,{},imagePathing(CardNumber,SuitNumber));
                }
            });
      });
    });
});

VersionKey["Two"]["Hearts"]["Three"]["Image"].rasterImage.visible = true

  VersionKey["Two"]["Hearts"]["Two"]["Image"]["_visible"] = true
  console.log(VersionKey["Two"]["Hearts"]["Two"]["Image"])
function imagePathing(CardNumber,SuitNumber) {
  var mapping_numbers = {
    Two : "2",
    Three : "3",
    Four : "4",
    Five : "5",
    Six : "6",
    Seven : "7",
    Eight : "8",
    Nine : "9",
    Jack : "jack",
    Queen : "queen",
    King : "king",
    Ace : "ace",
    Red : "red",
    Black: "black"
  }
  var mapping_suits = {
    Clubs : "clubs",
    Diamonds : "diamonds",
    Spades : "spades",
    Hearts : "hearts",
    Jokers : "joker"
  }
  var mapping_color = {
    Clubs : "clubs",
    Diamonds : "diamonds",
    Spades : "spades",
    Hearts : "hearts",
    Jokers : "joker"
  }

  if(SuitNumber != "Jokers") {
    if(CardNumber == "Jack" || CardNumber == "King" || CardNumber =="Queen") {
      var src = "../assets/images/"+mapping_numbers[CardNumber]+"_of_"+mapping_suits[SuitNumber]+"2.png"
    }
    else {
      var src = "../assets/images/"+mapping_numbers[CardNumber]+"_of_"+mapping_suits[SuitNumber]+".png"
    }
  }
  else {
      var src = "../assets/images/"+mapping_numbers[CardNumber]+"_"+mapping_suits[SuitNumber]+".png"
    }
  var srcImage = new Image();
  srcImage.src = src
  var rasterImage = new paper.Raster(srcImage);
  rasterImage.visible = false;

  var imgObj = {
    srcImage : srcImage,
    rasterImage : rasterImage
  }
  return imgObj;
}


//Scale, set all images to not show unless necessary
Object.keys(rendered_images).forEach(function (key) {
  rendered_images[key].scale(0.2);
  rendered_images[key].visible = false;
})

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

//Creates the spaces for cards
//Parameters: n/a
//Return: cardPosition: Array
var cardPosition =  function() {
  var cardPosition = [];
  for(var i = 0;i<25;i++) {
    var displace = 250 + i*20;
    cardPosition[i] = new paper.Point(displace,800);
  }
  return cardPosition;
}(); //this is a self invoking function since it has () at the end. Only runs once since it returns an array once.
