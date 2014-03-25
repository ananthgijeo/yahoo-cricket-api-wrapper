/* jslint node:true */
"use strict";

var request = require('request');
var util = require('util');

/**
Functions for Teams.
@class upcoming
**/
module.exports = {


  /**
   * Gets all ongoing serieses.
   * @method getAllOngoingSeries
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   */
  getTeam: function(teamId, callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.teams%20where%20team_id%3D" + teamId + "&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
      if (err) {
        callback('there was an error: ' + err);
      } else if (response.statusCode != 200) {
        callback('response from yql not 200 OK');
      } else {
        try {
          body = JSON.parse(body);
        } catch (e) {
          callback(e);
          return;
        }
        callback(null, body);
      }
    });
  },

  /**
   * Gets all ongoing serieses.
   * @method getAllOngoingSeries
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   */
  getTeamProfile: function(teamId, callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.team.profile%20where%20team_id%3D" + teamId + "&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
      if (err) {
        callback('there was an error: ' + err);
      } else if (response.statusCode != 200) {
        callback('response from yql not 200 OK');
      } else {
        try {
          body = JSON.parse(body);
        } catch (e) {
          callback(e);
          return;
        }
        callback(null, body);
      }
    });
  }

};