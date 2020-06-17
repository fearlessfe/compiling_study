const ASTNode = require('./ASTNode');
const Tokentype = require('../../lexer/TokenType');
const ASTNodeTypes = require('../ast/ASTNodeTypes');

class Factor extends ASTNode {
  constructor(parent, it) {
    super(parent);
    const token = it.next();

    let type = token.getType();

    if (type === Tokentype.VARIABLE) {
      this.type = ASTNodeTypes.VARIABLE;
    } else {
      this.type = ASTNodeTypes.SCALAR;
    }

    this.label = token.getValue();
    this.lexeme = token;
  }
}

module.exports = Factor;
