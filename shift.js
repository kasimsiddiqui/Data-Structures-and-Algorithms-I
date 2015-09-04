'use strict';

exports.shifter = function(array) {
  var removedIndex = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  delete array[array.length - 1];
  array.length = array.length -1;
  return removedIndex;
};
