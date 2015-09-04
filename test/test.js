'use strict';

var push = require(__dirname + '/../push');
var pop = require(__dirname + '/../pop');
var shift = require(__dirname + '/../shift');
var unshift = require(__dirname + '/../unshift');
var expect = require('chai').expect;

describe('push', function() {
  it('adds the given arguments to the end of the array and returns new length', function() {
    var array = [1, 2, 3, 4];
    var thingPushed = 5;
    expect(push.pusher(array, thingPushed)).to.eql(5);
    expect(array[4]).to.eql(5)
  });
});

describe('pop', function() {
  it('removes and returns the last element of the array', function() {
    expect(pop.poper([1, 2, 3, 4])).to.eql(4);
  });
});

describe('shift', function() {
  it('removes and returns the first element of the array', function() {
    expect(shift.shifter([1, 2, 3, 4])).to.eql(1);
  });
});

describe('unshift', function() {
  it('adds the given arguments to the beginning of the array and returns new length', function() {
    var array = [2, 3, 4];
    var unshiftedValue = 1;
    expect(unshift.unshifter(array, unshiftedValue)).to.eql(4);
    expect(array[0]).to.eql(1);
  });
});
