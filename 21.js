function colorOf(r,g,b){
    //coding here
  var red = r.toString(16),
      green = g.toString(16),
      blue = b.toString(16),
   red = red.length < 2 ? "0" + red : red,
    green = green.length < 2 ? "0" + green : green,
    blue = blue.length < 2 ? "0" + blue : blue;
    var  colour = red + green + blue;
    return "#" + colour;
  }