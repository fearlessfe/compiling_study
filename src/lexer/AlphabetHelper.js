class AlphabetHelper {
  // static ptnLetter = /^[a-zA-Z]$/; // 字母
  // static ptnNumber = /^[0-9]$/; // 数字
  // static ptnLiteral = /^[_a-zA-Z0-9]$/; // 文本
  // static operator = /^[+-*/><=!&|^%]$/; // 操作符

  static isLetter(c) {
    return AlphabetHelper.ptnLetter.test(c);
  }

  static isNumber(c) {
    return AlphabetHelper.ptnNumber.test(c);
  }

  static isLiteral(c) {
    return AlphabetHelper.ptnLiteral.test(c);
  }

  static isOperator(c) {
    return AlphabetHelper.operator.test(c);
  }
}

AlphabetHelper.ptnLetter = /^[a-zA-Z]$/;
AlphabetHelper.ptnNumber = /^[0-9]$/;
AlphabetHelper.ptnLiteral = /^[_a-zA-Z0-9]$/;
AlphabetHelper.operator = /^[+\-*/><=!&|^%,;]$/;

module.exports = AlphabetHelper;
