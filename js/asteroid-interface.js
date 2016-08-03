var asteroid = require('./../js/asteroid.js').asteroidModule;
// var draw = require('./../js/draw.js').drawModule;
var currentasteroidObject = new asteroid();
// var newDraw = new Draw();

$(document).ready(function() {

  $('#asteroid').click(function() {
    currentasteroidObject.getAsteroid();
    // newDraw.createEarth();
  });
});
