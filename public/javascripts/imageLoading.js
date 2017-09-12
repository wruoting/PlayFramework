
//set up canvas//canvas
  var canvas = document.getElementById("gameBox");
  var ctx = canvas.getContext("2d");
  paper.setup(canvas);

//Declare all images used
var BackOfCard = new Image();
BackOfCard.src = "../assets/images/CardBack.jpg";
var rasterBackOfCard = new paper.Raster(BackOfCard);
rasterBackOfCard.visible = false;
rasterBackOfCard.scale(0.2);

var DealButton = new Image();
DealButton.src = "../assets/images/DealButton.jpg";
var rasterDeal = new paper.Raster(DealButton);
rasterDeal.visible = false;
rasterDeal.scale(0.2);

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
  Ten : {},
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

var DeckKey = {
  One : {},
  Two : {}
}
var DeckRaster = {
  One: {},
  Two: {}
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
Object.keys(DeckKey).forEach(function (key) {
  DeckKey[key] = jQuery.extend(true,{},DeckBuilding);
});

//need to figure out naming for image source and raster source
Object.keys(DeckKey).forEach(function (DeckNumber) {
  //One and Two
    Object.keys(DeckKey[DeckNumber]).forEach(function (SuitNumber) {
      //Suits and Jokers
      Object.keys(DeckKey[DeckNumber][SuitNumber]).forEach(function (CardNumber) {
            //Image, src, rastered
            Object.keys(DeckKey[DeckNumber][SuitNumber][CardNumber]).forEach(function (ImageNumber) {
                if(ImageNumber == "Image"){
                  //the src property needs to be deep cloned
                  var src = imageSource(DeckNumber,CardNumber,SuitNumber)
                  if(DeckNumber == "One") {
                    DeckRaster["One"] = rasterCreation(src,DeckNumber);
                    DeckRaster["Two"] = rasterCopy(DeckRaster["One"]);

                    DeckKey["One"][SuitNumber][CardNumber]["Image"] = jQuery.extend(true,{},DeckRaster["One"]);
                    DeckKey["Two"][SuitNumber][CardNumber]["Image"] = jQuery.extend(true,{},DeckRaster["Two"]);
                  }

                  // console.log(DeckNumber)
                  // console.log(DeckKey[DeckNumber][SuitNumber][CardNumber]["Image"].rasterImage.source)

                }
            });
      });
    });
});
//takes a card number and a suit, and returns a rastered image object
function imageSource(DeckNumber,CardNumber,SuitNumber) {
  var mapping_numbers = {
    Two : "2",
    Three : "3",
    Four : "4",
    Five : "5",
    Six : "6",
    Seven : "7",
    Eight : "8",
    Nine : "9",
    Ten : "10",
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
  return src;
}

function rasterCreation(src,DeckNumber) {
    var srcImage = new Image();
    srcImage.src = src
    var rasterImage = new paper.Raster(srcImage);
    rasterImage.visible = false;
    rasterImage.scale(0.2);

  var imgObj = {
    srcImage : srcImage,
    rasterImage : rasterImage
  }
  return imgObj;
}
//apparently this function only clones the last thing given to it
function rasterCopy(rasterObject) {
  var rasterCopy = rasterObject.rasterImage.clone();
  rasterCopy.visible = true;
  rasterCopy.scale(0.2);

  var imgObj = {
    srcImage : rasterObject.srcImage,
    rasterImage : rasterCopy
  }
  return imgObj;
}
function cardSuitMapping(cardDrawn) {
  var Suit = cardDrawn["Suit"];
  var Card = cardDrawn["Card"];

  var mappingSuit = {
    0 : "Spades" ,
    1 : "Hearts" ,
    2 : "Diamonds" ,
    3 : "Clubs"
  }
  var mappingCard = {
    0 : "Two" ,
    1 : "Three" ,
    2 : "Four" ,
    3 : "Five" ,
    4 : "Six" ,
    5 : "Seven" ,
    6 : "Eight" ,
    7 : "Nine" ,
    8 : "Ten" ,
    9 : "Jack" ,
    10 : "Queen" ,
    11 : "King" ,
    12 : "Ace" ,
    104 : "Red Joker" ,
    105 : "Black Joker" ,
    106 : "Red Joker" ,
    107 : "Black Joker" ,
  }
  var deckNumber = {
    0 : "One" ,
    1 : "Two"
  }
  var cardAdjust;
  if(Card < 104) {
    cardAdjust = mappingCard[Card % 12]
  }
  else {
    cardAdjust = mappingCard[Card]
  }
  var deckAdjust = "One";
  if(Card > 12) {
    deckAdjust = "Two"
  }


  var deckReturn = {
    Suit : mappingSuit[Suit],
    Card : cardAdjust,
    Deck: deckAdjust
  }

  return deckReturn;
}


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

// //Creates the spaces for cards
// //Parameters: n/a
// //Return: cardPosition: Array
 var cardPosition =  function() {
  var cardPosition = new Array(26);
  for(var i = 0;i<25;i++) {
    var displace = 350 + i*20;
    cardPosition [i] = new paper.Point(displace,800);
  }
  return cardPosition;
}(); //this is a self invoking function since it has () at the end. Only runs once since it returns an array once.

var cardPositionP2 =  function() {
 var cardPositionP2 = new Array(26);
 for(var i = 0;i<25;i++) {
   var displace = 675 - i*20;
   cardPositionP2 [i] = new paper.Point(1100,displace);
 }
 return cardPositionP2;
}();

var cardPositionP3 =  function() {
 var cardPositionP3 = new Array(26);
 for(var i = 0;i<25;i++) {
   var displace = 850 - i*20;
   cardPositionP3 [i] = new paper.Point(displace,100);
 }
 return cardPositionP3;
}();

var cardPositionP4 =  function() {
 var cardPositionP4 = new Array(26);
 for(var i = 0;i<25;i++) {
   var displace = 225 + i*20;
   cardPositionP4 [i] = new paper.Point(100,displace);
 }
 return cardPositionP4;
}();


//Creates wait function

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
