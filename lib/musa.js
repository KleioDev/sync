var co = require('co');

//Get all artifacts in the current database
exports.getAllArtifacts = co.wrap(function *getAllArtifacts(db){
       return yield  db.models.Artifact.findAll();

});

exports.storeArtifact = co.wrap(function *storeArtifact(db, artifact){

    //Go look for the image now

  //Translate
  var payload = {
    title : artifact.Title,
    description : artifact.Description,
    medium : artifact.Medium,
    dimensions : artifact.Dimensions,
    dated : artifact.Dated,
    type : artifact.Type,
    objectNumber : artifact.ObjectNumber,
    image : 'random.jpg'
  };

  return yield db.models.Artifact.create(payload);


  //Search for the image, create a copy on our server
  //add to the payload, make the request.
});

exports.getArtifact = co.wrap(function *getArtifact(musaDB, objectNumber){
    return yield musaDB.models.Artifact.find({ where : { objectNumber : objectNumber}});

});

exports.deleteArtifact = co.wrap(function *deleteArtifact(musaDB, objectNumber){

    musaDB.models.Artifact.destroy({where : { objectNumber : objectNumber}});
});

exports.storeExhibiton = co.wrap(function storeExhibition(exhibition){
  console.log(exhibition)
});


exports.updateArtifact = co.wrap(function *updateArtifact(tmsObject, musaArtifact){

    //Artist get UserNumber3;
    var payload = {
        title : tmsObject.Title,
        description : tmsObject.Description,
        medium : tmsObject.Medium,
        dimensions : tmsObject.Dimensions,
        dated : tmsObject.Dated,
        type : tmsObject.Type,
        objectNumber : tmsObject.ObjectNumber,
        image : 'random.jpg'
    };

    musaArtifact.update(payload);


    musaArtifact.save();

});
