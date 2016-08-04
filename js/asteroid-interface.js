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
      console.log(simpleAsteroid.miss_distance);
      newDraw.createAsteroid(simpleAsteroid.miss_distance, simpleAsteroid.estimated_diameter_meters_max);
    });
  });
  newDraw.cursorInit();
});
