"use strict";

module.exports = function parseLaravelDate(dateString) {
  var match = dateString.match(/^(\d\d\d\d)-(\d\d)-(\d\d) (\d\d):(\d\d):(\d\d)$/);
  if (!match) throw new Error("Invalid Laravel date format for input: \"" + dateString + "\"");

  var year = parseInt(match[1]);
  var month = parseInt(match[2]) - 1;
  var day = parseInt(match[3]);
  var hour = parseInt(match[4]);
  var minute = parseInt(match[5]);
  var second = parseInt(match[6]);

  return new Date(year, month, day, hour, minute, second);
};