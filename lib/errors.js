'use strict';

const defekt = require('defekt');

const errors = defekt([
  'Dateismissing',
  'Notlookslikedate'
]);

module.exports = errors;
