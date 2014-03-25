/* jslint node:true */
"use strict";

var request = require('request');
var util = require('util');

/**
Functions for ongoing serieses.
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
  getAllOngoingSeries: function(callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.ongoing&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
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
   * Gets single ongoing series.
   * @method getOngoingSeries
   * @param seriesId {Number} Id of the series.
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   */
  getOngoingSeries: function(seriesId, callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.ongoing%20where%20SeriesId%3D" + seriesId + "&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
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