function* storeArtifact(artifact){
  console.log(artifact)
}

function* storeExhibition(exhibition){
  console.log(exhibition)
}


module.exports = {
  storeArtifact : storeArtifact,
  storeExhibition : storeExhibition
}
