'use strict';

const assert = require('assertthat');
const comparedate = require('../lib/app');
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

suite('comparedate', function () {
  test('is a function.', function (done) {
    assert.that(comparedate).is.ofType('function');
    done();
  });

  test('throws an error if date-parameter is missing.', function (done) {
    assert.that(function () {
      comparedate();
    }).is.throwing('The mandatory date parameter is missing!');
    done();
  });

  test('throws an error if date is not Valid.', function (done) {
    assert.that(function () {
      comparedate('19.55.1933');
    }).is.throwing('String is not a valid Date.');
    done();
  });

  test('returns false when Date is not the current date.', function (done) {
    assert.that(comparedate('2015-09-01T08:00:00+01:00')).is.falsy();
    done();
  });

  test('returns true when date-parameter equals today.', function (done) {
    assert.that(comparedate(yy + '-' + mm + '-' + dd + 'T08:00:00+01:00')).is.true();
    done();
  });
});
