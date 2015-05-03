var tms = require('./tms');
var misc = require('./misc');
var co = require('co');
var musa = require('./musa');


module.exports = function (counter){

  var tmsObjects;

  //Get the counter value in days, as a datetime string
  var daysTranspired = misc.getPastDate(100);

  //Get all the artifacts from the database
  co(function *(){

    tmsObjects = yield tms.getObjects(daysTranspired);

    //Update the Musa artifacts
    tmsObjects.forEach(function(object){
      yield musa.storeArtifact(object);
    });

    tmsExhibitions = yield tms.getExhibitions(daysTranspired);

    //Update the musa exhibitions
    tmsExhibitions.forEach(function(exhibition){
      yield musa.storeExhibition(exhibition)
    });

  });

}
