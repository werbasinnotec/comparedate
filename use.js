'use strict';

var comparedate = require('./lib/app.js');

var compare = comparedate('2015-09-04T08:00:00+01:00');

if (compare === true) {
  console.log('Date is compare')
} else {
  console.log('Date is not compare');
}
