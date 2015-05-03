function storeArtifact(artifact){
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
  }

  //Search for the image, create a copy on our server
  //add to the payload, make the request.
}

function storeExhibition(exhibition){
  console.log(exhibition)
}


module.exports = {
  storeArtifact : storeArtifact,
  storeExhibition : storeExhibition
}
