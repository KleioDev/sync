var co = require('co'),
    fs = require('fs');

/**
 * Get all the artifacts in the Kleio Database
 */
exports.getAllArtifacts = co.wrap(function *getAllArtifacts(db){
       return yield  db.models.Artifact.findAll();

});

/**
 * Create an artifact in the Kleio Database
 */
exports.storeArtifact = co.wrap(function *storeArtifact(db, artifact){

    var basePath = process.env.BASEPATH_URL;

    //Read the files in the directory
    var files = fs.readdirSync(process.env.ARTIFACT_IMAGE_PATH);

    var link;

    for(var i = 0; i < files.length; i++){

        if(files[i].match(artifact.ObjectNumber)) {
            //create the link
            link = basePath + '/' + files[i];
            break;
        }
    }

    if(!link) link = basePath + '/placeholder.png';

  //Translate
  var payload = {
    title : artifact.Title,
    description : artifact.Description,
    medium : artifact.Medium,
    dimensions : artifact.Dimensions,
    dated : artifact.Dated,
    type : artifact.Type,
    objectNumber : artifact.ObjectNumber,
    image : link
  };

    var flag = false;

    if(!link) {
        //Don't create a clue
        flag = true;
        link = basePath + '/placeholder.png';
    }


    var createArtifact =  yield musaArtifact.update(payload);

    if(!flag){
        var clue = {
            image : link,
            ArtifactId : createArtifact.id
        }

        yield db.models.Clue.create(clue);
    }

    return createArtifact;


});

/**
 * Get an artifact from the Kleio Database
 */
exports.getArtifact = co.wrap(function *getArtifact(musaDB, objectNumber){
    return yield musaDB.models.Artifact.find({ where : { objectNumber : objectNumber}});

});

/**
 * Delete an artifact
 */
exports.deleteArtifact = co.wrap(function *deleteArtifact(musaDB, objectNumber){

    console.log(objectNumber);

    return yield musaDB.models.Artifact.destroy({where : { objectNumber : objectNumber}});
});

/**
 * Update an Artifact in the Kleio Database
 */
exports.updateArtifact = co.wrap(function *updateArtifact(tmsObject, musaArtifact){


    //Artist get UserNumber3;
    var payload = {
        title : tmsObject.Title,
        description : tmsObject.Description,
        medium : tmsObject.Medium,
        dimensions : tmsObject.Dimensions,
        dated : tmsObject.Dated,
        type : tmsObject.Type,
        objectNumber : tmsObject.ObjectNumber
    };

    return yield musaArtifact.update(payload);

});

/**
 * Store an Exhibition in the Kleio Database
 */
exports.storeExhibition = co.wrap(function *storeExhibition(db, exhibition){
    var payload = {
        title : exhibition.ExhTitle,
        tmsID : exhibition.ExhibitionID,
        description : ""
    }

    return yield db.models.Exhibition.create(payload);
});

/**
 * Get all the Exhibitions in the Kleio Datbase
 */
exports.getAllExhibitions = co.wrap(function *getAllExhibitions(db){

    return yield db.models.Exhibition.findAll();
});

/**
 * Delete an Exhibition from the Kleio Database
 */
exports.deleteExhibition = co.wrap(function* deleteExhibition(db, tmsID){
    return yield db.models.Exhibition.destroy({ where : { tmsID : tmsID}});
});

/**
 * Update an Exhibition in the Kleio Database
 */
exports.updateExhibition = co.wrap(function* updateExhibition(db, tmsExhibition, musaExhibition){
    var payload = {
        title : tmsExhibition.ExhTitle,
        tmsID : tmsExhibition.ExhibitionID,
        description : ""
    }

    musaExhibition.update(payload);

    return yield musaExhibition.save();
});

/**
 * Get an Exhibition from the Kleio Database
 */
exports.getExhibition = co.wrap(function * getExhibition(db, tmsID){
    return yield db.models.Exhibition.find( { where : { tmsID : tmsID }});
});

