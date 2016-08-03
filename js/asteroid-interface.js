var asteroid = require('./../js/asteroid.js').asteroidModule;
var currentasteroidObject = new asteroid();

$(document).ready(function() {

  $('#asteroid').click(function() {
    currentasteroidObject.getAsteroid();
  });
});
