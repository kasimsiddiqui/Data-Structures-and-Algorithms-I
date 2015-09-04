'use strict';

exports.pusher = function(array, thingPushed) {
  array[array.length] = thingPushed;
  return array.length;
}
