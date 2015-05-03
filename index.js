require('dotenv').load();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var sync = require('./lib');



var request, connection;

//Create a timer that increments a counter, when the counter reaches 30 days, execute the function, if a call is made, reset the counter
var counter = 0;

eventEmitter.on('sync', function(counter){
   sync(counter);
});

setInterval(function(){
  counter = counter + 1;

  console.log(counter);

  if(counter == 10){
    //It's time for that sync
    eventEmitter.emit('sync', counter);
    counter = 0;
  }
}, 1000); //This must run every day
