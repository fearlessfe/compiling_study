const { assert } = require('chai');
const Token = require('../lexer/Token');
const arrayToGenerate = require('../common/arrayToGenerate');
const TokenType = require('../lexer/TokenType');
const PeekIterator = require('../common/PeekIterator');

describe('Token', () => {
  function assertToken(token, value, type) {
    assert.equal(token.getValue(), value);
    assert.equal(token.getType(), type);
  }
  it('varOrKeyword', () => {
    var it1 = new PeekIterator(arrayToGenerate([...'if abc']));
    var it2 = new PeekIterator(arrayToGenerate([...'true def']));

    var token1 = Token.makeVarOrKeyword(it1);
    var token2 = Token.makeVarOrKeyword(it2);

    it1.next();
    it2.next();

    var token3 = Token.makeVarOrKeyword(it1);
    var token4 = Token.makeVarOrKeyword(it2);

    assertToken(token1, 'if', TokenType.KEYWORD);
    assertToken(token2, 'true', TokenType.BOOLEAN);
    assertToken(token3, 'abc', TokenType.VARIABLE);
    assertToken(token4, 'def', TokenType.VARIABLE);
  });

  it('makeString', () => {
    const tests = ["'123'", '"456"'];
    for (let test of tests) {
      const it = new PeekIterator(arrayToGenerate([...test]));
      const token = Token.makeString(it);
      assertToken(token, test, TokenType.STRING);
    }
  });

  it('makeOp', () => {
    const tests = [
      ['+ xxx', '+'],
      ['++mmm', '++'],
      ['/=g', '/='],
      ['==1', '=='],
      ['&=9897', '&='],
      ['&777', '&'],
      ['||xx', '||'],
      ['^=123', '^='],
      ['%7', '%'],
    ];
    for (let test of tests) {
      const [input, expected] = test;
      const it = new PeekIterator(arrayToGenerate([...input]));
      const token = Token.makeOp(it);
      assertToken(token, expected, TokenType.OPERATOR);
    }
  });

  it('makeNumber', () => {
    const tests = [
      '+0 aa',
      '-0 bb',
      '.3 ccc',
      '.555 ddd',
      '7899.999 aaa',
      '-100 ggg',
      '-1000.5345343*1232131',
    ];
    for (let test of tests) {
      const it = new PeekIterator(arrayToGenerate([...test]));
      const token = Token.makeNumber(it);
      const [expected] = test.split(/[ *]/);
      const type =
        test.indexOf('.') == -1 ? TokenType.INTEGER : TokenType.FLOAT;
      assertToken(token, expected, type);
    }
  });
});
