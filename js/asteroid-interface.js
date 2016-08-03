var asteroid = require('./../js/asteroid.js').asteroidModule;


$(document).ready(function() {
  var currentasteroidObject = new asteroid();
  $('#asteroid').click(function() {
    currentasteroidObject.getAsteroid();
  });
});
