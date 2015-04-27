var fs = require('fs');
var path = require('path');

var syncArtifacts = require('./sync_artifacts');

//Paths
var PATH_TO_SHEETS = path.join(__dirname, '/sheets'),
    PATH_TO_DATA = path.join(__dirname, '/data'),
    PATH_TO_ARTIFACTS = path.join(__dirname, '/sheets/artifacts.xlsx'),
    PATH_TO_EXHIBITIONS = path.join(__dirname, '/sheets/exhibitions.xlsx'),
    PATH_TO_EXHIBITION_JSON = path.join(__dirname, '/data/exhibitions.json');

if(checkPaths()){
    syncArtifacts();
}


function checkPaths(){

    var flag = true;

    try{
        fs.lstatSync(PATH_TO_SHEETS);

    } catch(err){
        if(err.code === 'ENOENT'){
            fs.mkdirSync('sheets');
        } else {
            throw err;
        }

    }

    try{
        fs.lstatSync(PATH_TO_DATA);
    } catch(err){
        if(err.code === 'ENOENT'){
            fs.mkdirSync('data')
        } else {
            throw err;
        }
    }

    try{
        fs.lstatSync(PATH_TO_ARTIFACTS);
    } catch(err){
        console.log('There is no artifacts.xlsx file...');
        flag = false;
    }

    return flag;
}