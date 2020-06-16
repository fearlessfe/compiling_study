const Stml = require('./Stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class ForStml extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.FOR_STMT, 'for');
  }
}

module.exports = ForStml;
