function Draw() {
  console.log("Draw.");
}

Draw.prototype.createEarth = function() {
  var x = $('#cosmos').attr('width')/2;
  var y = $('#cosmos').attr('height')/2;
  var diameter = $('#cosmos').attr('height')/100;
  var c = document.getElementById("cosmos");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(x,y,diameter,0,2*Math.PI);
  ctx.fillStyle = "rgb(0,0,256)";
  ctx.fill();
  ctx.strokeStyle = "rgb(0,0,256)";
  ctx.stroke();
  ctx.closePath();
};

Draw.prototype.createAsteroid = function(distance, diameterMeters) {
  var radius = distance/(100000000/500);
  var centerX = $('#cosmos').attr('width')/2;
  var centerY = $('#cosmos').attr('height')/2;
  var diameter = diameterMeters/200;
  var degree = Math.random() * (360 - 0) + 0;
  var x = centerX + (radius * Math.cos(degree/180*Math.PI));
  var y = centerY + (radius * Math.sin(degree/180*Math.PI));
  console.log(y + " , " + x);
  var c = document.getElementById("cosmos");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(x,y,diameter,0,2*Math.PI);
  // ctx.fillStyle = "rgb(60,70,0)";
  // ctx.fill();
  ctx.strokeStyle = "rgb(60,70,0)";
  ctx.stroke();
  ctx.closePath();
};



Draw.prototype.cursorInit = function() {
  var canvas = document.getElementById("cosmos");
  canvas.addEventListener("mousedown", this.getCursorPosition, false);
}

Draw.prototype.getCursorPosition = function(event) {
  var x = new Number();
  var y = new Number();
  var canvas = document.getElementById("cosmos");

  if (event.x != undefined && event.y != undefined) {
    x = event.x;
    y = event.y;
  }
  else {
    x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
  }
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  console.log("x: " + x + "  y: " + y);
}



exports.drawModule = Draw;
