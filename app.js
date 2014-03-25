/**
Wrapper around yahoo cricket yql api
@module yahoo-cricket-api-wrapper
**/

/* jslint node:true */
"use strict";

module.exports.live = require('./lib/live.js');
module.exports.ongoing = require('./lib/ongoing.js');
module.exports.past = require('./lib/past.js');
module.exports.player = require('./lib/player.js');
module.exports.team = require('./lib/team.js');
module.exports.upcoming = require('./lib/upcoming.js');