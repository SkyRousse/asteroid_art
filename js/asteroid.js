var apiKey = require('./../.env').apiKey;

function Asteroid(){
}

Asteroid.prototype.getAsteroid = function() {
  $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2045-09-07&end_date=2045-09-14&api_key=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error) {
    $('.showAsteroid').text(error.responseJSON.message);
  });
}

exports.asteroidModule = Asteroid;
