/*
  Game Graphics Engine
*/



function startGame() {


  var canvas = document.getElementById("gameBox");
  var ctx = canvas.getContext("2d");
  var twoOfClubs = document.getElementById("2ofclubs");
  var src = "@routes.Assets.versioned("images/CardBack.jpg")";
  var gameCards = new card(30,30,src,10,120,"image");
}


function card(width,height,color,x,y,type) {
    this.type = type;
    this.image = new Image();
    this.image.src = color;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
}

startGame();
