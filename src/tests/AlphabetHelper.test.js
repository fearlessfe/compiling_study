const { assert } = require('chai');
const AlphabetHelper = require('../lexer/AlphabetHelper');

describe('AlphabetHelper', () => {
  it('charCheck', () => {
    assert.equal(true, AlphabetHelper.isLetter('a'));
    assert.equal(false, AlphabetHelper.isLetter(9));
    assert.equal(false, AlphabetHelper.isLetter('+'));

    assert.equal(true, AlphabetHelper.isNumber(8));
    assert.equal(true, AlphabetHelper.isLiteral(8));
    assert.equal(true, AlphabetHelper.isLiteral('a'));
    assert.equal(true, AlphabetHelper.isLiteral('_'));
    assert.equal(true, AlphabetHelper.isOperator('+'));
    assert.equal(true, AlphabetHelper.isOperator('-'));
    assert.equal(true, AlphabetHelper.isOperator('*'));
    assert.equal(true, AlphabetHelper.isOperator('/'));
    assert.equal(true, AlphabetHelper.isOperator('%'));
    assert.equal(false, AlphabetHelper.isOperator(' '));
  });
});
