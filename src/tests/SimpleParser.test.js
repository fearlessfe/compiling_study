const SimpleParser = require('../parser/SimpleParser');
const arrayToGenerate = require('../common/arrayToGenerate');
const TokenType = require('../lexer/TokenType');
const PeekIterator = require('../common/PeekIterator');
const Lexer = require('../lexer/Lexer');
const PeekTokenIterator = require('../parser/util/PeekTokenIterator');
const { assert } = require('chai');

describe('SimpleParser', () => {
  it('basic', () => {
    const source = '1+2+3+4';
    const lexer = new Lexer();
    const tokens = lexer.analyse(arrayToGenerate([...source]));
    const tokenIt = new PeekTokenIterator(arrayToGenerate(tokens));
    const expr = SimpleParser.parse(tokenIt);

    assert.equal(expr.children.length, 2);
    assert.equal(expr.lexeme.getValue(), '+');

    const v1 = expr.getChild(0);
    const e2 = expr.getChild(1);

    assert.equal(v1.lexeme.getValue(), '1');
    assert.equal(e2.lexeme.getValue(), '+');

    const v2 = e2.getChild(0);
    const e3 = e2.getChild(1);

    assert.equal(v2.lexeme.getValue(), '2');
    assert.equal(e3.lexeme.getValue(), '+');

    const v3 = e3.getChild(0);
    const e4 = e3.getChild(1);

    assert.equal(v3.lexeme.getValue(), '3');
    assert.equal(e4.lexeme.getValue(), '4');

    expr.print();
  });
});
