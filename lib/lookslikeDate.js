'use strict';

const lookslikeDate = function (date) {
  return /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/.test(date);
};

module.exports = lookslikeDate;
