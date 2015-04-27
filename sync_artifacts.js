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
       console.log(data.Dated);
    });

}



