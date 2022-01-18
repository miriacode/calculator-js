class Operation {
  constructor() {
    this.firstOperand = 0;
    this.secondOperand = 0;
    this.operator = "";
  }

  setFirstOperand(operand) {
    this.firstOperand = operand;
  }

  setSecondOperand(operand) {
    this.secondOperand = operand;
  }

  setOperator(operator) {
    this.operator = operator;
  }

  getFirstOperand() {
    return this.firstOperand;
  }

  getSecondOperand() {
    return this.secondOperand;
  }

  evaluate() {
    return eval(this.firstOperand + this.operator + this.secondOperand);
  }
}
