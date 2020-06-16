const Stml = require('./Stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class IFStmt extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.IF_STMT, 'if');
  }
}

module.exports = IFStmt;
