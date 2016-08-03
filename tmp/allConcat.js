var asteroid = require('./../js/asteroid.js').asteroidModule;
var currentasteroidObject = new asteroid();

$(document).ready(function() {

  $('#asteroid').click(function() {
    currentasteroidObject.getAsteroid();
  });
});

var Constructor = require('./../js/other-template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Constructor = require('./../js/template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Clock = require('./../js/time.js').clockModule;

$(document).ready(function(){
  var myclock = new Clock();
  setInterval(myclock.update, 1000);
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmInput = $('#alarm-input').val();
    $('#clock').append('<h3>Alarm set for <strong>' + alarmInput + '</strong></h3>');
    setInterval(function() {
      myclock.update();
      myclock.alarmClock(alarmInput);
    }, 1000);
  });
});

exports.clockModule = Clock;
