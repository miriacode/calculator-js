class CalculatorView {
  constructor(calculatorController) {
    this.calculatorController = calculatorController;
  }

  pressNumber(number) {
    //EXLPICA ESTO/////////////////////////////////////////////////////////
    if (!this.calculatorController.operatorPressed) {
      const prev = this.calculatorController.currentOutput;
      this.calculatorController.currentOutput = prev + number;
    } else {
      this.calculatorController.currentOutput = number;
      this.calculatorController.operatorPressed = false;
    }
  }

  showNumber() {
    const currentOutput = document.querySelector(".current__output");
    currentOutput.innerText = this.calculatorController.currentOutput;
  }


  pressOperator(operator) {
    this.calculatorController.pressOperator(operator);
    this.showNumber();
  }
  // showResult() {
  //   this.calculatorController.getResult();
  // }




  



  pressEqual(){
    const currentOutput = document.querySelector(".current__output");
    currentOutput.innerText = this.calculatorController.pressEqual()
    currentOutput.innerText = 'hola'
  }

  showNumberAndOperator() {
    const previousOutput = document.querySelector(".previous__output");
    previousOutput.innerText = this.calculatorController.previousOutput;

    // const currentOutput = document.querySelector('.current__output')
    // currentOutput.innerText = ''
  }
  
  pressEqual(){
    return this.calculatorController.pressEqual()
  }

  
}
