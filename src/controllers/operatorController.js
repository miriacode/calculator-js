class OperatorController {
  constructor(initialValue) {
    this.operands = []; // Queue
    this.result = initialValue;
    this.saveSign = ""
  }

  getResult() {
    return this.result;
  }

  pushOperand(operand) {
    this.result = operand;
    this.operands.push(operand);
    console.log(this.operands)
  }

  operate(operator) {
    // debugger;
    // if (operator === OPERATORS.EQU) {
    //   this.result = this.operands.pop()
    //   console.log(this.result)
    // } else {
      const b = this.operands.pop();
      const a = this.operands.pop();
      
      if (operator === OPERATORS.SUM) {
        this.result = a + b;
        this.operands.push(this.result);
        
      } else if (operator === OPERATORS.SUB) {
        this.result = a - b;this.operands.push(this.result);//console.log(this.operands);
      } else if (operator === OPERATORS.MUL) {
        this.result = a * b;this.operands.push(this.result);//console.log(this.operands);
      } else if (operator === OPERATORS.DIV) {
        this.result = a / b;this.operands.push(this.result);//console.log(this.operands);

        this.saveSign = operator
      // } else if (operator === OPERATORS.EQU) {
      //   this.operate('+')
      // }
       //   // this.result = this.operands[0];
       //   console.log(this.operands)
       //   console.log(this.result)
     // }
    }
}

}
// }
