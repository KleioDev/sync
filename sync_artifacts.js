/**
 * Created by cesarcruz on 4/26/15.
 */
var fs = require('fs');
var exec = require('child_process').execSync;

module.exports = function(){

    try{
        exec('excel-stream < sheets/artifacts.xlsx > data/artifacts.json');
    } catch(err){
        throw(err);
    }

    var artifacts = fs.readFileSync('data/artifacts.json');

    console.log(artifacts);

}



