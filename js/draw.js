function Draw() {
  console.log("Draw.");
  this.clickedXPos;
  this.clickedYPos;
  var c = document.getElementById("cosmos");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(0, 0, $('#cosmos').attr('width'), $('#cosmos').attr('height'));
  ctx.fillStyle = "rgb(5,5,5)";
  ctx.fill();
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
  console.log(x + " , " + y);
  var c = document.getElementById("cosmos");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(x,y,diameter,0,2*Math.PI);
  ctx.fillStyle = "rgb(70,40,10)";
  ctx.fill();
  ctx.strokeStyle = "rgb(70,40,10)";
  ctx.stroke();
  ctx.closePath();
  var arrayDiameterXY = [diameter, x, y];
  return arrayDiameterXY;
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
  $('#cosmos').attr("data-clicked-x-pos", x);
  $('#cosmos').attr("data-clicked-y-pos", y);
}

Draw.prototype.checkIfClickIsWithinAsteroid = function(clickX,clickY, asteroidX, asteroidY, asteroidDiameter) {
  if ( Math.pow((clickX - asteroidX), 2) + Math.pow((clickY - asteroidY), 2) < Math.pow((asteroidDiameter/2), 2) ) {
    console.log("CLICK WITHIN ASTEROID BOUNDARY");
    return true;
  }
}

Draw.prototype.checkIfClickIsWithinEarth = function(clickX,clickY) {
  if ( Math.pow((clickX - $('#cosmos').attr('width')/2), 2) + Math.pow((clickY - $('#cosmos').attr('height')/2), 2) < Math.pow(($('#cosmos').attr('height')/100), 2) ) {
    console.log("CLICK WITHIN EARTH BOUNDARY");
  } else {
    console.log("not within boundary or something went wrong");
  }
}

exports.drawModule = Draw;
