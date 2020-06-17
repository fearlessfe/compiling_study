const ASTNode = require('./ASTNode');
const ASTNodeTypes = require('./ASTNodeTypes');

class Expr extends ASTNode {
  constructor(parent) {
    super(parent);
  }
}

module.exports = Expr;
