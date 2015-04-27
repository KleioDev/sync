/**
 * Created by cesarcruz on 4/26/15.
 */
var fs = require('fs');
var exec = require('child_process').execSync;

module.exports = function(){

    fs.mkdirSync('data');

    try{
        excelToJson();
    } catch(err){
        throw(err);
    }

    var artifacts = require('./data/artifacts.json');

    console.log(artifacts[0]);


}

function excelToJson(){
    exec('excel-stream < sheets/artifacts.xlsx > data/artifacts.json');
}


