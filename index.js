require('dotenv').load();
var events = require('events');
var eventEmitter = new events.EventEmitter();
var sync = require('./lib');
var co = require('co'),
    exec = require('mz/child_process').exec,
    koa = require('koa'),
    app = koa();
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


/**
 * CONSTRAINTS FOR IMAGE MOVING
 * 1. Images cannot contain any whitespaces in their names
 * 2. Images for the same object number will be replaced on the synchronization
 */

var counter = 0;

eventEmitter.on('sync', function(counter){
console.log('ere');
    co(function * (){

        //Turn off the API server
        //yield exec('pm2 stop server');

        var oldDir = process.env.ORIGINAL_PATH;
        var newDir = process.env.ARTIFACT_IMAGE_PATH;

        //Sync the image folder
        yield exec('rsync -a ' +oldDir+ ' ' +newDir+ '');

        //Sync the database
        yield sync();

        //Turn API back up


    }).catch(function(err){
        console.error(err);
    });

});

setInterval(function(){
  counter = counter + 1;


  if(counter == 30){
    //It's time for that sync
   // eventEmitter.emit('sync', counter);

    counter = 0;
  }
}, 1000); //This must run every day (1000 * 60 * 60 * 24)

app.use(function*(){
    if(this.url === '/server/reset'){
        counter = 0;
        eventEmitter.emit('sync');
    }
});

app.listen(3000);
console.log("Server listening on port 3000");