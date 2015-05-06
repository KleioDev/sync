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

        console.log(ms);

        //var tmsObjects = yield tms.getAllObjects(ms);
        //
        //var musaArtifacts = yield musa.getAllArtifacts(musaDB);
        //
        //var tmsExhibitions = yield tms.getAllExhibitions(ms);
        //
        //var musaExhibitions = yield musa.getAllExhibitions(musaDB);
        //
        //if(musaExhibitions && musaExhibitions.length > 0) {
        //
        //    for(var i = 0; i < musaExhibitions.length; i++){
        //
        //        var tmsID = musaExhibitions[i].tmsID;
        //
        //                var result;
        //
        //                try {
        //                    //Check if the exhibition is in the tms db
        //                    result = yield tms.getExhibition(ms, tmsID);
        //
        //
        //                    if (!result) {
        //                        //If not in tms, delete in musa
        //                        musa.deleteExhibition(musaDB, tmsID);
        //                    }
        //                } catch (err) {
        //                    console.error(err);
        //                    throw(err);
        //                }
        //    }
        //
        //}
        //
        //if(tmsExhibitions && tmsExhibitions.length > 0){
        //    for(var k = 0; k < tmsExhibitions.length; k++){
        //
        //                var tmsID = tmsExhibitions[k].ExhibitionID;
        //
        //                var result;
        //
        //                try{
        //                    result =  yield musa.getExhibition(musaDB, tmsID);
        //                } catch(err){
        //                    console.log(err);
        //                    throw(err);
        //                }
        //
        //                if(!result){
        //                    //The object is not in the MuSA Database, add it
        //                     yield musa.storeExhibition(musaDB, tmsExhibitions[k]);
        //
        //                } else {
        //                    //Update the musa Exhibition
        //                     yield musa.updateExhibition(db, tmsExhibitions[k], result);
        //                }
        //            }
        //}
        //
        ////Add the Exhibitions
        //
        //
        ////Add the Objects
        //if(musaArtifacts && musaArtifacts.length > 0) {
        //
        //    for (var i = 0; i < musaArtifacts.length; i++) {
        //
        //        console.log(i);
        //
        //        var objectNumber = musaArtifacts[i].objectNumber;
        //
        //        var result;
        //
        //        try {
        //            //Check if the object is in the tms db
        //            result = yield tms.getObject(ms, objectNumber);
        //
        //            if (!result) {
        //                //If not in tms, delete in musa
        //                musa.deleteArtifact(musaDB, objectNumber);
        //            }
        //        } catch (err) {
        //            console.error(err);
        //            throw(err);
        //        }
        //    }
        //}
        //
        //if(tmsObjects && tmsObjects.length > 0) {
        //
        //    for (var k = 0; k < tmsObjects.length; k++) {
        //
        //        var objectNumber = tmsObjects[k].ObjectNumber;
        //
        //        var result;
        //
        //        try {
        //            result = yield musa.getArtifact(musaDB, objectNumber);
        //        } catch (err) {
        //            console.log(err);
        //            throw(err);
        //        }
        //
        //        if (!result) {
        //            //The object is not in the MuSA Database, add it
        //            yield musa.storeArtifact(musaDB, tmsObjects[k]);
        //
        //        } else {
        //            //Update the musa object
        //            yield musa.updateArtifact(tmsObjects[k], result);
        //        }
        //    }
        //}
        //
        //
        //return;

    });

    return;
}
