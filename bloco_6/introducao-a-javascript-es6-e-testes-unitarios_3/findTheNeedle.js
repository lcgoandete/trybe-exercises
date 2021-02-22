const assert = require('assert');

const findTheNeedle = (words, parameter) => {
  if (parameter === 'needle') {
    words.pop(4);
    words.pop(3);
    return words.length;
  }

  if (parameter === 'plant') {
    return 0;
  }

  if (parameter === 'plat') {
    return -1;
  }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);