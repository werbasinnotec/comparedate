'use strict';

var defekt = require('defekt');

var errors = defekt([
  'Dateismissing',
  'Notlookslikedate'
]);

module.exports = errors;
