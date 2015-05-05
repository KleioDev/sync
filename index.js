require('dotenv').load();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var sync = require('./lib');

/**
 * Kleio-TMS Synchronization schema
 * CONSTRAINTS:
 * 1. Objects in the TMS Database system are analogous to Artifacts in the Kleio system
 * 2. Artifacts cannot by a Kleio Administrator using the Kleio Admininstrator Panel
 * 3. Objects and Artifacts will be compared given their ObjectNumber, we will assume that this ObjectNumber is unique per TMS Object
 *
 * HOW IT WORKS
 * 1. If an Object ir removed from the TMS Database, the pertaining Artifact will be removed from the Kleio Database
 * 2. If an Object is updated in the TMS Database, the pertaining Artifact will be updated in the Kleio Database
 * 3. New Objects in the TMS Database will be added to the Kleio Database
 *
 * @type {number}
 */



//Create a timer that increments a counter, when the counter reaches 30 days, execute the function, if a call is made, reset the counter
var counter = 0;

sync();

eventEmitter.on('sync', function(counter){
   //sync();
});

setInterval(function(){
  counter = counter + 1;


  if(counter == 5){
    //It's time for that sync
    eventEmitter.emit('sync', counter);

    counter = 0;
  }
}, 1000); //This must run every day (1000 * 60 * 60 * 24)
