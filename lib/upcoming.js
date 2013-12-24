/* jslint node:true */
"use strict";

var request = require('request');
var util = require('util');


module.exports = {



  getAllUpcomingSeries: function(callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.upcoming%20where%20output%3D'complete'&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
      if (!err && response.statusCode == 200) {
        try {
          body = JSON.parse(body);
        } catch (e) {
          callback(e);
          return;
        }
        callback(null, body);
      } else {
        callback('there was an error: ' + err);
      }
    });
  },



  getUpcomingSeries: function(seriesId, callback) {
    request("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.series.upcoming%20where%20series_id%3D" + seriesId + "%20and%20output%3D'complete'%0A&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err, response, body) {
      if (!err && response.statusCode == 200) {
        try {
          body = JSON.parse(body);
        } catch (e) {
          callback(e);
          return;
        }
        callback(null, body);
      } else {
        callback('there was an error: ' + err);
      }
    });
  },


  //count defaults to 10
  getUpcomingMatches: function(count, seriesId, callback) {
    var query = "";
    count = count ? count : 10;
    query = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.upcoming_matches%20(0%2C%20" + count + ")";
    if(seriesId) {
      query += "%20where%20series_id%20%3D%20" + seriesId;
    }
    query += "&format=json&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=";
    request(query, function(err, response, body) {
      if (!err && response.statusCode == 200) {
        try {
          body = JSON.parse(body);
        } catch (e) {
          callback(e);
          return;
        }
        callback(null, body);
      } else {
        callback('there was an error: ' + err);
      }
    });
  }


};