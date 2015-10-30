'use strict';

const errors = require('./errors');
const lookslikeDate = require('./lookslikeDate');
const getDateNow = require('./getDateNow');
const moment = require('moment');

const comparedate = function (date) {
  if (!date) {
    throw new errors.Dateismissing('The mandatory date parameter is missing!');
  }

  if (!lookslikeDate(date)) {
    throw new errors.Notlookslikedate('String is not a valid Date.');
  }

  if (moment(date).format('DD.MM.YYYY') === getDateNow()) {
    return true;
  }

  return false;
};

module.exports = comparedate;
