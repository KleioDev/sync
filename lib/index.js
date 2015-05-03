var tms = require('./tms');
var misc = require('./misc');
var co = require('co');


module.exports = function (counter){

  var tmsObject;

  console.log('Synchronization started...')
  //Get the counter value in days, as a datetime string
  var daysTranspired = misc.getPastDate(counter);

  //Get all the artifacts from the database
  tms.getObjects(daysTranspired).then(function(result){
    tmsObject = result;
  });

  console.log(tmsObject);

}
