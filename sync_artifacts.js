/**
 * Created by cesarcruz on 4/26/15.
 */
var fs = require('fs');
var exec = require('child_process').execSync;
var db = require('./models');
var Artifact = db.sequelize.models['Artifact'];

module.exports = function(){

    try{
        exec('excel-stream < sheets/artifacts.xlsx > data/artifacts.json');
    } catch(err){
        throw(err);
    }

    //Get artifacts
    var artifacts = JSON.parse(fs.readFileSync('data/artifacts.json'));

    artifacts.forEach(function(data){

        var result;
        try{
            result = buildArtifact(data);
        } catch(err){ console.log( 'Crisis averted')}

        if(result){
            Artifact.upsert(result, { where : {
                objectNumber : result.objectNumber
            }});
        }

        return;

    });

}

function buildArtifact(data){

    var artifact = {};

    if(!data['Dated'] || data['Dated'] === ''){
        throw new Error('No title attribute for row: ' + data);
    }

    if(!data['Description'] || data['Description'] === ''){
        throw new Error('No dimensions attribute for row: ' + data);
    }

    if(!data['Object Number'] || data['Object Number'] === ''){
        throw new Error('No object number attribute for row: ' + data);
    }



    artifact.title = data['Dated'];
    artifact.dated = data['Begin Date'];
    artifact.objectNumber = data['Object Number'];

    if(data['Attribution'] && data['Attribution'] !== '') artifact.attribution = data['Attribution'];

    if(data['Classification'] && data['Classification'] !== '') artifact.classification = data['Classification'];

    if(data['Dimensions'] && data['Dimensions'] !== '') artifact.medium = data['Dimensions'];

    if(data['Begin Date'] && data['Begin Date'] !== '') artifact.dated = data['Begin Date'];

    return artifact;


}



