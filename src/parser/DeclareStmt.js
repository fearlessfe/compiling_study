const Stml = require('./Stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class DeclareStml extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.DECLARE_STMT, 'declare');
  }
}

module.exports = DeclareStml;
