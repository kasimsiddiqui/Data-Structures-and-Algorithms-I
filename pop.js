'use strict';

exports.poper = function(array) {
  var last = array.length - 1
  var poppedIndex = array[last];
  delete array[last];
  array.length = last;
  return poppedIndex;
};
