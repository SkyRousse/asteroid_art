var Asteroid = require('./../js/asteroid.js').asteroidModule;
var Draw = require('./../js/draw.js').drawModule;


$(document).ready(function() {
  var currentasteroidObject = new Asteroid();
  var newDraw = new Draw();
  newDraw.createEarth();
  $('#asteroid').click(function() {
    var year = parseInt($("#year").val());
    var month = parseInt($("#month").val());
    var day = parseInt($("#day").val());
    currentasteroidObject.getAsteroid(year,month,day);
  });
  $('#drawAsteroids').click(function() {
    currentasteroidObject.asteroidsInstances.forEach(function(simpleAsteroid) {
      var arrayDiameterXY = newDraw.createAsteroid(simpleAsteroid.miss_distance, simpleAsteroid.estimated_diameter_meters_max);
      simpleAsteroid.canvasDiameter = arrayDiameterXY[0]
      simpleAsteroid.xPos = arrayDiameterXY[1];
      simpleAsteroid.yPos = arrayDiameterXY[2];
      console.log(simpleAsteroid);
    });
  });
  newDraw.cursorInit();
  $('#cosmos').click(function() {
    var currentX = $('#cosmos').attr('data-clicked-x-pos');
    var currentY = $('#cosmos').attr('data-clicked-y-pos');
    newDraw.checkIfClickIsWithinEarth(currentX, currentY);
  });

});
