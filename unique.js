'use strict';
var array = ['a', 'b', 'a']

function unique(array) {
  var found = {};
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (found[array[i]]) {
      //don't do anything
    } else {
      found[array[i]] = true;
      result.push(array[i]);
    }
  }
  return result;
}

console.log(unique(array));
