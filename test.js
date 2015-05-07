/**
 * Created by cesarcruz on 5/7/15.
 */


var update = new Date('2015-03-31T18:58:08.025Z');

console.log(update);

var done = update.toISOString().replace(/T/, ' ').replace(/\..+/, '');

console.log(done);