'use strict';
var should = require('should');
var deepPicker = require('./index.js');

var keyMap = [
  'master',
  {
    'book': [
      'Chinese',
      {'English': 'Shakespeare'}
    ]
  },
  {
    'reader': {'kindle': 'Amazon'}
  }
]

var all = {
  master: 'ace.lee',
  read: true,
  book: {
    Chinese: {
      Moyan: 'A buxom',
      WangXiaobo: 'The silent majority'
    },
    English: {
      Shakespeare: ['Hamlet', 'Macbeth'],
      Jane: 'Pride and Prejudice'
    }
  },
  reader: {
    kindle: {
      Amazon: true
    },
    douban: false
  },
  total: 100
};

var out = {
  master: 'ace.lee',
  reader: {
    kindle: {
      Amazon: true
    }
  },
  book: {
    Chinese: {
      Moyan: 'A buxom',
      WangXiaobo: 'The silent majority'
    },
    English: {
      Shakespeare: ['Hamlet', 'Macbeth']
    }
  }
};

var wrongMap = [
  1,
  {
    'book': [
      'Chinese',
      {'English': 'Shakespeare'}
    ]
  },
  true
]

describe('deep-picker', function () {
  it ('should return result by map', function () {
    should.deepEqual(deepPicker(keyMap, all), out);
  });
  it ('should return error when accept wrong args', function () {
    (function (){deepPicker(wrongMap, all)}).should.throw(TypeError);
  });
  it ('should return null when accept null args', function () {
    (function (){deepPicker([], null)}).should.throw(TypeError);
  })
});


