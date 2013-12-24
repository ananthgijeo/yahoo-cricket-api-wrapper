/* jslint node:true */
"use strict";

var upcoming = require('./lib/upcoming.js');
var util = require('util');

upcoming.getUpcomingMatches(2, 11990, function(err, data) {
  if (!err) {
    console.log(util.inspect(data, false, null));
  } else {
    console.log(err);
  }
});

