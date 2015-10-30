'use strict';

var getDateNow = function () {
  var date = new Date();
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yy;
};

module.exports = getDateNow;
