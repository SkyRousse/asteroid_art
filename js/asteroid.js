var apiKey = require('./../.env').apiKey;


function Asteroid(){
  this.asteroidsFromRequest = {};
}

Asteroid.prototype.getAsteroid = function() {
  $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2045-09-07&end_date=2045-09-14&api_key=' + apiKey).then(function(response) {
    // console.log(response);
    var miss_distance = response.near_earth_objects["2045-09-07"][0].close_approach_data[0].miss_distance.miles;
    var relative_velocity = response.near_earth_objects["2045-09-07"][0].close_approach_data[0].relative_velocity.kilometers_per_hour;
    var absolute_magnitude_h = response.near_earth_objects["2045-09-07"][0].absolute_magnitude_h;
    var estimated_diameter_meters_min = response.near_earth_objects["2045-09-07"][0].estimated_diameter.meters.estimated_diameter_min;
    var estimated_diameter_meters_max = response.near_earth_objects["2045-09-07"][0].estimated_diameter.meters.estimated_diameter_max;
    console.log(miss_distance + " is the miss distance");
    console.log(relative_velocity + " is the relative velocity");
    console.log(absolute_magnitude_h + " is the absolute magnitude (h)");
    console.log(estimated_diameter_meters_min + " is the estimated diameter min in meters");
    console.log(estimated_diameter_meters_max + " is the estimated diameter max in meters");

  }).fail(function(error) {
    $('.showAsteroid').text(error.responseJSON.message);
  });
}

exports.asteroidModule = Asteroid;
