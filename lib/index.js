var tms = require('./tms');
var misc = require('./misc');
var co = require('co');
var musa = require('./musa');
var db = require('../db/db');
var tms = require('./tms');
var musaDB = require('../models').sequelize;


module.exports = function (){
    //Connect to database
    co(function*(){

        //Connection to tms

        var ms = yield db();

        var tmsObjects = yield tms.getAllObjects(ms);

        var musaArtifacts = yield musa.getAllArtifacts(musaDB);

        console.log('tms objects: ' + tmsObjects.length);

        console.log('musa artifacts: ' + musaArtifacts.length);

        if(musaArtifacts && musaArtifacts.length > 1) {

            //for (var i = 0; i < musaArtifacts.length; i++) {
            //
            //    var objectNumber = musaArtifacts[i].objectNumber;
            //
            //    var result;
            //
            //    try {
            //        //Check if the object is in the tms db
            //        result = yield tms.getObject(ms, objectNumber);
            //
            //        if (!result) {
            //            //If not in tms, delete in musa
            //            musa.deleteArtifact(musaDB, objectNumber);
            //        }
            //    } catch (err) {
            //        console.error(err);
            //        throw(err);
            //    }
            //}

            for(var k = 0; k < tmsObjects.length; k++){

                var objectNumber = tmsObjects[k].ObjectNumber;

                var result;

                try{
                    result =  yield musa.getArtifact(musaDB, objectNumber);
                } catch(err){
                    console.log(err);
                    throw(err);
                }

                if(!result){
                    //The object is not in the MuSA Database, add it
                     //yield musa.storeArtifact(tmsObjects[k]);

                } else {
                    //Update the musa object
                     //yield musa.updateArtifact(tmsObjects[k], result);
                }
            }


        }



    });



    //console.log(tmsObjects.length);



}
