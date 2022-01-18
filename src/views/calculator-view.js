class CalculatorView {
  constructor(controller) {
    this.currentOutput = "";
    this.operatorPressed = false;
    this.calculatorController = controller;
  }

  getCurrentOutput() {
    return this.currentOutput;
  }

  updateHTMLOutput() {
    // const previousOut = document.querySelector('.previous__output')
    const currentOut = document.querySelector('.current__output');
    currentOut.innerText = this.getCurrentOutput();
  }

  pressNumber(number) {
    if (!this.operatorPressed) {
      this.currentOutput += number;
    } else {
      this.currentOutput = number;
      this.operatorPressed = false;
    }
    this.updateHTMLOutput();
  }

  pressOperator(operator) {
    if (operator !== OPERATORS.EQU) {
      const number = parseInt(this.currentOutput);
      this.calculatorController.processOperation(number, operator);
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    } else {
      const number = parseInt(this.currentOutput);
      this.currentOutput = this.calculatorController.processEqualOperator(number);
    }
    this.operatorPressed = true;
    this.updateHTMLOutput();
  }
}
