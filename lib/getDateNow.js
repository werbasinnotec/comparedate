'use strict';

const getDateNow = function () {
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yy;
};

module.exports = getDateNow;
