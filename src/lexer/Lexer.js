const PeekIterator = require('../common/PeekIterator');
const Token = require('./Token');
const TokenType = require('./TokenType');
const AlphabetHelper = require('./AlphabetHelper');
const LexicalException = require('./LexicalException');

class Lexer {
  analyse(source) {
    const tokens = [];
    const it = new PeekIterator(source, '\u0000');

    while (it.hasNext()) {
      let c = it.next();

      let lookahead = it.peek();

      if (c == '\u0000' || c.length == 0) {
        break;
      }

      if (c == ' ' || c == '\n') {
        continue;
      }

      // 提取注释的程序

      if (c == '{' || c == '}' || c == '(' || c == ')') {
        tokens.push(new Token(TokenType.BRACKET, c));
        continue;
      }

      if (c == '"' || c == "'") {
        it.putBack();
        tokens.push(Token.makeString(it));
        continue;
      }

      if (AlphabetHelper.isLetter(c)) {
        it.putBack();
        tokens.push(Token.makeVarOrKeyword(it));
        continue;
      }

      if (AlphabetHelper.isNumber(c)) {
        it.putBack();
        tokens.push(Token.makeNumber(it));
        continue;
      }

      if ((c == '+' || c == '-') && AlphabetHelper.isNumber(lookahead)) {
        const lastToken = tokens[tokens.length - 1] || null;
        // +5 1+1
        if (lastToken == null || !lastToken.isValue()) {
          it.putBack();
          tokens.push(Token.makeNumber(it));
          continue;
        }
      }

      if (AlphabetHelper.isOperator(c)) {
        it.putBack();
        tokens.push(Token.makeOp(it));
        continue;
      }

      throw LexicalException.fromChar(c);
    }
    return tokens;
  }
}

module.exports = Lexer;
