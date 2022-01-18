class CalculatorController {
  constructor(previousOutput) {
    this.operatorPressed = false;
    this.operatorController = new OperatorController(0);
    this.previousOutput = previousOutput;
    this.currentOutput = "";
    this.signalToOperate = "no";
  }

  pressOperator(operator) {
    if (!this.operatorPressed) {
      this.operatorController.pushOperand(parseInt(this.currentOutput));
      if (this.operatorController.operands.length > 1) {
        this.operatorController.operate(operator);
      }
      this.currentOutput = this.operatorController.result;
      this.operatorPressed = true;
    }
  }

  pressEqual(){
    // this.operatorController.operate('+')
    // return this.operatorController.result

    
      // this.operatorController.result = this.operatorController.operands.pop()
      console.log(this.operatorController.result)
    
    return this.operatorController.result
  }

  // pressEqual(){
  //   this.operatorController.operate()
  //   return this.operatorController.result;
  // }

  addOperator(value) {
    //RESACATAR
    // let operator = ""
    // value == "÷"? operator = "/" : operator = value
    this.previousOutput = `${this.currentOutput} ${value}`;

    //hii
    this.signalToOperate = "yes";
  }

  // getResult() {
  //   return this.operatorController.getResult()
  //   // let current = parseFloat(this.currentOutput)
  //   // this.previousOutput = this.previousOutput =
  // }
  clearAll() {
    //Clears previous and current
    this.previousOutput = "";
    this.currentOutput = "";
  }

  getOppositeSign() {
    if (this.currentOutput < 0) {
      this.currentOutput = abs(this.currentOutput);
    } else {
      this.currentOutput = -this.currentOutput;
    }
  }

  getPercentage() {
    this.currentOutput = this.currentOutput / 100;
  }

  deleteOneNumber() {
    this.currentOutput.toString().split("").splice(-1, 1);
  }

  clearMemory() {}

  addToMemory() {}

  subtractFromMemory() {}

  rememberInMemory() {}
}
