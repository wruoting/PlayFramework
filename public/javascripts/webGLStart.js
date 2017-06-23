function webGLStart() {
    var canvas = document.getElementById("lesson01-canvas");
    initGL(canvas);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    drawScene();
  }

var _img = document.getElementById('id1');
  var image = new Image();
  image.onload = function () {
    _img.src = this.src;
}
  image.src = "@routes.Assets.versioned("images/2_of_clubs.png")"
