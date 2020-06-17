const Stml = require('./Stmt');
const ASTNodeTypes = require('./ASTNodeTypes');

class Block extends Stml {
  constructor(parent) {
    super(parent, ASTNodeTypes.BLOCK, 'block');
  }
}

module.exports = Block;
