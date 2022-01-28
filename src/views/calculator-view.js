class CalculatorView {
  constructor(controller) {
    this.calculatorController = controller;
    this.numberOutput = "";
    this.resultOutput = "";
    this.operatorPressed = false;
    this.extraOperationUsed = false;
  }
  outputCero(){
    if(this.numberOutput == ""||this.resultOutput ==""){
      this.numberOutput = 0;
      this.resultOutput = 0;
      this.updateNumberOutput();
      this.updateResultOutput();
    }
  } 
  
  getNumberOutput() {
    return this.numberOutput;
  }

  getResultOutput() {
    return this.resultOutput;
  }

  updateResultOutput() {
    const currentOut = document.querySelector(".current__output");
    currentOut.innerText = this.getResultOutput();
  }

  updateNumberOutput() {
    const currentOut = document.querySelector(".current__output");
    currentOut.innerText = this.getNumberOutput();
  }

  pressNumber(number) {
    this.calculatorController.setNumber(number);
    if (!this.operatorPressed) {
      this.operatorPressed = false;
    }
    this.numberOutput = this.calculatorController.getNumber();
    this.updateNumberOutput();
  }

  pressOperator(operator) {
    if (operator !== OPERATORS.EQU) {
      this.calculatorController.processOperation(operator);
      this.resultOutput = this.calculatorController.getLastCalculatedResult();
      this.updateResultOutput();
    } else {
      this.calculatorController.setNumber(null);
      this.numberOutput = this.calculatorController.processEqualOperator();
      this.updateNumberOutput();
      this.extraOperationUsed = true;
    }
    this.operatorPressed = true;
    this.numberOutput = this.calculatorController.getNumber();
    this.calculatorController.setNumber("");
  }

  pressExtraOperations(extraOperator) {
    if (extraOperator == EXTRAOPERATORS.PERCENTAGE) {
      this.calculatorController.processPercentage();
      this.numberOutput = this.calculatorController.getLastCalculatedResult();
      
    } else if (extraOperator == EXTRAOPERATORS.CHANGESIGN) {
      if(this.extraOperationUsed){
        this.resultOutput =this.calculatorController.reset();
        this.updateResultOutput();
      }else{
        this.numberOutput = this.calculatorController.processChangeSign();
        this.updateNumberOutput();
      }
    } else if (extraOperator == EXTRAOPERATORS.RESET) {
      this.resultOutput =this.calculatorController.reset();
      this.updateResultOutput();
    } else if (extraOperator == EXTRAOPERATORS.DELETE) {
      this.numberOutput = this.calculatorController.delete();
      this.updateNumberOutput();
    }
  }

  changeTheme() {
    const body = document.querySelector("body");
    if (body.classList.contains("light-theme")) {
      body.classList.replace("light-theme", "dark-theme");
    } else {
      body.classList.replace("dark-theme", "light-theme");
    }
  }
}
