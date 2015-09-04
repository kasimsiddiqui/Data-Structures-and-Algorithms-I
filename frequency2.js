'use strict';
var array = ['eat', 'shit', 'and', 'die'];

function frequency2(array) {
  var hash = {};
  var letters = array.join('').toLowerCase();
  var most = 0;
  var mostLetters = [];
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter in hash){
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
    if(hash[letter] > most){
      most = hash[letter];
      mostLetters = [most];
    }
    if(hash[letter] === most){
      mostLetters.push(letter);
    }
  }
  return mostLetters.slice(1, mostLetters.length);
}

console.log(frequency2(array));
