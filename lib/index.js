var tms = require('./tms');
var misc = require('./misc');
var co = require('co');
var musa = require('./musa');


module.exports = function (){

  //Get all the artifacts from the database
  co(function *(){

    //Get the two lists of artifacts, delete any artifact that is not in the list
    var musaArtifacts = yield musa.getAllArtifacts();
    var tmsObjects = yield tms.getAllObjects();


    for(var i = 0; i < musaArtifacts.length; i + i + 1){

        var objectNumber = musaArtifacts[i].objectNumber;

        var result;

        try{
            result = yield tms.getObject(objectNumber);
        } catch(err) {
            console.log(err);
            throw(err);
        }

        if(!result){
            //Delete the object from MuSA
            musa.deleteObject(objectNumber);
        }
    }

    for(var k = 0; k < tmsObjects.length; k = k + 1){
        var objectNumber = tmsObjects[k].objectNumber;

        var result;

        try{
            result = yield musa.getArtifact(objectNumber);
        } catch(err){
            console.log(err);
            throw(err);
        }

        if(!result){
            //The object is not in the MuSA Database, add it
            yield musa.storeArtifact(tmsObjects[k]);
        } else {
            //Update the musa object
            yield musa.updateArtifact(tmsObjects[k], result);
        }
    }

  });

}
