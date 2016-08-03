function Draw() {
  console.log("Draw.");
}

Draw.prototype.createEarth = function() {
  var x = $('#cosmos').attr('width')/2;
  var y = $('#cosmos').attr('height')/2;
  var diameter = $('#cosmos').attr('height')/10;
  var c = document.getElementById("cosmos");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "rgba(0,0,256)";
  ctx.arc(x,y,diameter,0,2*Math.PI);
  ctx.stroke();
};

var testing = "HELLO";

exports.drawModule = Draw;
