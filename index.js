'use strict';

// 输入不正确抛出异常
// 源不存在不赋值
// 严格判断对象和数组以及字符串
// 通过options配置选择属性
var walk = function (map, source, target) {
  for (var key in map) {
    var value = map[key];
    if (typeof value === 'string') {
      if (source[key] && source[key][value]) {
        target[key] = target[key] || {};
        target[key][value] = source[key][value]
      }
    } else if (value instanceof Array) {
      if (source[key]) {
        target[key] = target[key] || {};
        target[key] = deepPicker(value, source[key]);
      }
    } else if (typeof value === 'object') {
      if (source[key]) {
        target[key] = walk(value, source[key], {});
      }
    }
  }
  return target;
}

var deepPicker = function (map, source) {
  if (map == null || source == null) {
    throw new TypeError('map or source can"t not be null');
  }
  var result = {}
  map.forEach(function (d){
    if (typeof d === 'string') {
      if (source[d]) {
        result[d] = source[d];
      }
    } else if(typeof d === 'object'){
      result = walk(d, source, result);
    } else {
      throw new TypeError('just array and string allowed in keyMap');
    }
  })
  return result
}

module.exports = deepPicker;
