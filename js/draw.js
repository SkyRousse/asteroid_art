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
  var y = distance/(100000000/500);
  var x = $('#cosmos').attr('width')/2;
  var diameter = diameterMeters/200;
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

var testing = "HELLO";

exports.drawModule = Draw;
