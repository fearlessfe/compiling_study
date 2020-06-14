const PeekIterator = require('../common/PeekIterator');
const arrayToGenerate = require('../common/arrayToGenerate');

const { assert } = require('chai');

describe('test PeekIterator', () => {
  it('test_peek', () => {
    const it = new PeekIterator(arrayToGenerate([...'abcdefg']));
    assert.equal(it.next(), 'a');
    assert.equal(it.next(), 'b');
    assert.equal(it.peek(), 'c');
    assert.equal(it.peek(), 'c');
    assert.equal(it.next(), 'c');
    assert.equal(it.next(), 'd');
    assert.equal(it.next(), 'e');
    assert.equal(it.next(), 'f');
    assert.equal(it.next(), 'g');
  });

  it('test_lookahead2', () => {
    const it = new PeekIterator(arrayToGenerate([...'abcdefg']));
    assert.equal(it.next(), 'a');
    assert.equal(it.peek(), 'b');
    assert.equal(it.peek(), 'b');
    assert.equal(it.peek(), 'b');
    assert.equal(it.peek(), 'b');
    assert.equal(it.peek(), 'b');
    assert.equal(it.next(), 'b');
    assert.equal(it.next(), 'c');
    it.putBack();
    it.putBack();
    assert.equal(it.next(), 'b');
    assert.equal(it.next(), 'c');
    assert.equal(it.next(), 'd');
  });

  it('test_endToken', () => {
    const it = new PeekIterator(arrayToGenerate([...'abcdefg']), '\0');
    for (let i = 0; i < 8; i++) {
      if (i === 7) {
        assert.equal(it.next(), '\u0000');
      } else {
        assert.equal(it.next(), 'abcdefg'[i]);
      }
    }
  });
});
