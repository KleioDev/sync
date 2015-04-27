var fs = require('fs');
var path = require('path');

var syncArtifacts = require('./sync_artifacts');

//Paths
var PATH_TO_ARTIFACTS = path.join(__dirname, '/sheets/artifacts.xlsx'),
    PATH_TO_EXHIBITIONS = path.join(__dirname, '/sheets/exhibitions.xlsx'),
    PATH_TO_EXHIBITION_JSON = path.join(__dirname, '/data/exhibitions.json');


//Check to see if exhibitions are there
try{
    var sheetStats = fs.lstatSync(PATH_TO_ARTIFACTS);

    if(sheetStats.isFile()){
        console.log('Is artifacts');
        syncArtifacts();
    }
} catch(err){
    if(err.code === 'ENOENT'){
        //There is no artifacts.xlsx file
        return;
    }
}