# deep-picker
[![Build Status](https://travis-ci.org/AceLeeWinnie/deep-picker.svg?branch=master)](https://travis-ci.org/AceLeeWinnie/deep-picker)
[![Coverage Status](https://coveralls.io/repos/github/AceLeeWinnie/deep-picker/badge.svg?branch=master)](https://coveralls.io/github/AceLeeWinnie/deep-picker?branch=master)

> pick value in json object with keyMap

### usage example
```javascript
var keyMap = [
  'master',
  {
    'book': [
      {'Chinese': {'Moyan': 'name'}},
      'English'
    ]
  }
]

var all = {
  master: 'ace.lee',
  book: {
    Chinese: {
      Moyan: {name: 'A buxom'},
      EileenChang: 'Little reunion'
    },
    English: {
      Shakespeare: ['Hamlet', 'Macbeth'],
      Jane: 'Pride and Prejudice'
    }
  }
  total: 100
};

var deepPicker = require('deep-picker');
//var out = {
//  master: 'ace.lee',
//  book: {
//    Chinese: {
//      Moyan: {name: 'A buxom'}
//    },
//    English: {
//      Shakespeare: ['Hamlet', 'Macbeth'],
//      Jane: 'Pride and Prejudice'
//    }
//  }
//};
deepPicker(keyMap, all);
```
