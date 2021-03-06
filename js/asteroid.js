var apiKey = require('./../.env').apiKey;


function Asteroid(){
  this.asteroidsInstances = [];
}

Asteroid.prototype.getAsteroid = function(year, month, day) {
  var self = this;
  $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date='+ year + '-' + month + '-' + day + '&end_date=' + year + '-' + month + '-' + (day+7) + '&api_key=' + apiKey).then(function(response) {
    // console.log(response);
    var dates = Object.keys(response.near_earth_objects);
    dates.forEach(function(dayWithAsteroids) {
      console.log(response);
      response.near_earth_objects[dayWithAsteroids].forEach(function(asteroid) {
        var roidName = asteroid["name"];
        var miss_distance = asteroid.close_approach_data[0].miss_distance.kilometers;
        var relative_velocity = asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour;
        var absolute_magnitude_h = asteroid.absolute_magnitude_h;
        var estimated_diameter_meters_min = asteroid.estimated_diameter.meters.estimated_diameter_min;
        var estimated_diameter_meters_max = asteroid.estimated_diameter.meters.estimated_diameter_max;
        console.log(miss_distance + " is the miss distance");
        console.log(relative_velocity + " is the relative velocity");
        console.log(absolute_magnitude_h + " is the absolute magnitude (h)");
        console.log(estimated_diameter_meters_min + " is the estimated diameter min in meters");
        console.log(estimated_diameter_meters_max + " is the estimated diameter max in meters");
        self.addSimpleAsteroid(roidName, miss_distance, relative_velocity, absolute_magnitude_h, estimated_diameter_meters_min, estimated_diameter_meters_max);
      });
    });
    console.log(self.asteroidsInstances);
  }).fail(function(error) {
    console.log("FAILING?!???");
    $('.showAsteroid').text(error.responseJSON.message);
  });
};

function SimpleAsteroid(name, distance, velocity, magnitude, minDiameter, maxDiameter, id) {
  this.roidName = name;
  this.miss_distance = distance;
  this.relative_velocity = velocity;
  this.absolute_magnitude_h = magnitude;
  this.estimated_diameter_meters_min = minDiameter;
  this.estimated_diameter_meters_max = maxDiameter;
  this.idCode = id || 0;
  this.xPos;
  this.yPos;
  this.canvasDiameter;
}

Asteroid.prototype.addSimpleAsteroid = function(name, distance, velocity, magnitude, minDiameter, maxDiameter) {
  var newSimpleAsteroid = new SimpleAsteroid(name, distance, velocity, magnitude, minDiameter, maxDiameter, this.asteroidsInstances.length);
  this.asteroidsInstances.push(newSimpleAsteroid);
};

Asteroid.prototype.quackTestLog = function() {
  console.log("QUACK");
};





exports.asteroidModule = Asteroid;
