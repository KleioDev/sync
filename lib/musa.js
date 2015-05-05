var musaDB = require('../models').sequelize;

//Get all artifacts in the current database
function *getAllArtifacts(){
    var artifacts;
    try{
        artifacts = musaDB.models.Artifact.findAll();
    } catch(err) {
        console.log(err);
        throw(err);
    }

    return artifacts;
}

function *storeArtifact(artifact){
  //Get the fields I'm interested in from TMS, send request to MuSA Server
  if(!artifact.Title || !artifact.Dimensions || !artifact.ObjectNumber){
    console.log('Error')//throw new Error();
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
    image : 'random.jpg'
  };

  var musaArtifact = musaDB.models.Artifact.build(payload);

  return musaArtifact.save();

  //Search for the image, create a copy on our server
  //add to the payload, make the request.
}

function storeExhibition(exhibition){
  console.log(exhibition)
}

function *deleteArtifact(objectNumber){

    musaDB.models.Artifact.destroy({where : { objectNumber : objectNumber}});
}

function *updateArtifact(tmsObject, musaArtifact){

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

}

function *getArtifact(objectNumber){
    var artifact = musaDB.models.Artifact.find({ where : { objectNumber : objectNumber}});

    return artifact;
}


module.exports = {
  storeArtifact : storeArtifact,
  storeExhibition : storeExhibition,
  getAllArtifacts : getAllArtifacts,
  deleteArtifact : deleteArtifact,
  updateArtifact : updateArtifact,
  getArtifact : getArtifact
}
