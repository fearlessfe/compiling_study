const Stml = require('./Stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class FunctionDeclareStml extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.FUNCTION_DECLARE_STMT, 'func');
  }
}

module.exports = FunctionDeclareStml;
