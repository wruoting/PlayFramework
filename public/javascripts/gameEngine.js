/*
  Game Graphics Engine
*/


function startGame() {
  var canvas = document.getElementById("gameBox");
  var ctx = canvas.getContext("2d");
  var imageTemplate = new Image();
    imageTemplate.src = "assets/images/2_of_clubs.png";

  imageTemplate.onload = function() {
    ctx.drawImage(imageTemplate,1,1);
  }


  //image.style.backgroundImage = "url(/assets/images/2_of_clubs.png)";
  // document.getElementById("DIV").appendChild(source);
  //
  //

  //var gameCards = new card(30,30,imageLoad,10,120,"image");
}


// function card(width,height,color,x,y,type) {
//     this.type = type;
//     this.image = new Image();
//     this.image.src = color;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//
//     // ctx.drawImage(this.image,
//     //     this.x,
//     //     this.y,
//     //     this.width, this.height);
// }

startGame();
