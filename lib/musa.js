var co = require('co'),
    exec = require('mz/child_process').exec,
    fs = require('fs');

//Get all artifacts in the current database
exports.getAllArtifacts = co.wrap(function *getAllArtifacts(db){
       return yield  db.models.Artifact.findAll();

});

exports.storeArtifact = co.wrap(function *storeArtifact(db, artifact){

    var basePath = ''

    //Read the files in the directory
    var files = fs.readdirSync('/home/sezalcru/musa/public/pictures/clues');

    for(var i = 0; i < files.length; i++){

        if(files[i].match(artifact.ObjectNumber)) {
            //create the link
            var link = basePath + '/clues/' + files[i];
            break;
        }
    }

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

  return yield db.models.Artifact.create(payload);


});

exports.getArtifact = co.wrap(function *getArtifact(musaDB, objectNumber){
    return yield musaDB.models.Artifact.find({ where : { objectNumber : objectNumber}});

});

exports.deleteArtifact = co.wrap(function *deleteArtifact(musaDB, objectNumber){

    musaDB.models.Artifact.destroy({where : { objectNumber : objectNumber}});
});

exports.updateArtifact = co.wrap(function *updateArtifact(tmsObject, musaArtifact){

    var basePath = '';
    var link;

    //Read the files in the directory
    var files = fs.readdirSync('/home/sezalcru/musa/public/pictures/clues');

    for(var i = 0; i < files.length; i++){

        if(files[i].match(artifact.ObjectNumber)) {
            //create the link
            link = basePath + '/clues/' + files[i];
            break;
        }
    }

    //Artist get UserNumber3;
    var payload = {
        title : tmsObject.Title,
        description : tmsObject.Description,
        medium : tmsObject.Medium,
        dimensions : tmsObject.Dimensions,
        dated : tmsObject.Dated,
        type : tmsObject.Type,
        objectNumber : tmsObject.ObjectNumber,
        image : link
    };

    musaArtifact.update(payload);


    musaArtifact.save();

});

//Store an exhibition in the Kleio database
exports.storeExhibition = co.wrap(function *storeExhibition(db, exhibition){
    var payload = {
        title : exhibition.ExhTitle,
        tmsID : exhibition.ExhibitionID,
        description : ""
    }

    return yield db.models.Exhibition.create(payload);
});

exports.getAllExhibitions = co.wrap(function *getAllExhibitions(db){

    return yield db.models.Exhibition.findAll();
});

//Delete an exhibition
exports.deleteExhibition = co.wrap(function* deleteExhibition(db, tmsID){
    return yield db.models.Exhibition.destroy({ where : { tmsID : tmsID}});
});

exports.updateExhibition = co.wrap(function* updateExhibition(db, tmsExhibition, musaExhibition){
    var payload = {
        title : tmsExhibition.ExhTitle,
        tmsID : tmsExhibition.ExhibitionID,
        description : ""
    }

    musaExhibition.update(payload);

    return yield musaExhibition.save();
});

exports.getExhibition = co.wrap(function * getExhibition(db, tmsID){
    return yield db.models.Exhibition.find( { where : { tmsID : tmsID }})
});

