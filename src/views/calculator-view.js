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
      const number = parseFloat(this.currentOutput);
      this.calculatorController.processOperation(number, operator);
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    } else {
      const number = parseFloat(this.currentOutput);
      this.currentOutput = this.calculatorController.processEqualOperator(number);
    }
    this.operatorPressed = true;
    this.updateHTMLOutput();
  }

  pressExtraOperations(extraOperator){
    if(extraOperator == EXTRAOPERATORS.PERCENTAGE){
      this.calculatorController.processPercentage()
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    }else if(extraOperator == EXTRAOPERATORS.CHANGESIGN){
      this.calculatorController. processChangeSign()
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    }else if(extraOperator == EXTRAOPERATORS.RESET){
      this.calculatorController.reset()
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    }else if(extraOperator == EXTRAOPERATORS.DELETE){
      this.calculatorController.delete()
      this.currentOutput = this.calculatorController.getLastCalculatedResult();
    }
    
    this.updateHTMLOutput();
  }

  changeTheme(){
    const body = document.querySelector("body")
    if(body.classList.contains("light-theme")){
      body.classList.replace("light-theme","dark-theme")
    }else{
      body.classList.replace("dark-theme","light-theme")
    }
  }
  
}
