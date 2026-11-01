// What `sails new --no-frontend` writes: `npm start` runs this with
// NODE_ENV=production.
process.chdir(__dirname);
var sails = require('sails');
var rc = require('sails/accessible/rc');
sails.lift(rc('sails'));
