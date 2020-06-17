const Stml = require('../Stmt');
const ASTNodeTypes = require('../ASTNodeTypes');

class AssignStmt extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.ASSIGN_STMT, 'assign');
  }
}

module.exports = AssignStmt;
