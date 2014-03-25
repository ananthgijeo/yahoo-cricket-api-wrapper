/* jslint node:true */
"use strict";

var request = require('request');
var util = require('util');

/**
Functions for upcoming matches and serieses.
@class upcoming
**/
module.exports = {


  /**
   * Gets all past serieses.
   * @method getAllPastSeries
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   */
  getAllPastSeries: function(callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.past_matches&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
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
   * Gets single past series.
   * @method getPastSeries
   * @param seriesId {Number} Id of the series.
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   */
  getPastSeries: function(seriesId, callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.past%20where%20SeriesId%3D" + seriesId + "&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
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
   * Gets past matches of the given series.
   * @method getPastMatches
   * @param seriesId {Number} Id of the series.
   * @param callback {function} Callback function.
   * @param callback.err {object} If any error then error object will be there or it will be null.
   * @param callback.result {object} If no error then result will be this object otherwise undefined.
   * @param count {Number} Iumber of matches you want as result.
   */
  getPastMatches: function(seriesId, callback, count) {
    count = count ? count : 10;
    var query = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.past_matches(0%2C" + count + ")";
    if (seriesId) {
      query += "%20where%20series_id%3D" + seriesId;
    }
    query += "&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=";
    request(query, function(err, response, body) {
      if (err) {
        callback('there was an error: ' + err);
      } else if (response.statusCode != 200) {
        callback('response from yql not 200 OK');
      } else {
        try {
          console.log(typeof body);
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