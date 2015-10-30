# comparedate

This npm module compares a given datestring with the current date. If the given datestring datestring equals the current calendar-day, the modul returns true.

## Dateformat

The dateformat must be inject in RFC3339 Format otherwise the module throws an error.

## Installation

    $ npm install comparedate

## Use

The usage of this module is very simple:
```javascript
'use strict';

var comparedate = require('comparedate');

var givenDateIsToday = comparedate('2015-09-04T08:00:00+01:00');

if (givenDateIsToday === true) {
  console.log('The given date is today.')
} else {
  console.log('The given date is not today.');
}

```

## License

The MIT License (MIT)
Copyright (c) 2014-2015 Werbasinnotec.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.