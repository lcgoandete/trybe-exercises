const assert = require('assert');

wordLengths = (words) => {
  const newArray = [];
  for (let index = 0; index < words.length; index +=1) {
    newArray.push(words[index].length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);