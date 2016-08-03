var Asteroid = require('./../js/asteroid.js').asteroidModule;
var Draw = require('./../js/draw.js').drawModule;


$(document).ready(function() {
  var currentasteroidObject = new Asteroid();
  var newDraw = new Draw();
  newDraw.createEarth();
  $('#asteroid').click(function() {
    currentasteroidObject.getAsteroid();
  });
  $('#drawAsteroids').click(function() {
    currentasteroidObject.asteroidsInstances.forEach(function(simpleAsteroid) {
      console.log(simpleAsteroid.miss_distance);
      newDraw.createAsteroid(simpleAsteroid.miss_distance);
    });

  });
});
