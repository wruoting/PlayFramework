function myMove() {
  var elem = document.getElementById("move");
  var pos = 10;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
