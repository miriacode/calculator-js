class CalculatorController {
  constructor() {
    this.operationQueue = [];
    this.number = "";
    this.lastCalculatedResult = "";
  }

  setNumber(number) {
    if (number === "") {
      this.number = "";
      this.number = number;
    } else {
      this.number += number; 
    }
    if (number) this.lastCalculatedResult = number;
  }

  getNumber() {
    return this.number;
  }

  getLastCalculatedResult() {
    return this.lastCalculatedResult;
  }

  processOperation(operator) {
    let number;
    if (this.getNumber()) {
      number = parseFloat(this.getNumber());
    }

    if (this.operationQueue.length) {
      const prevOperation = this.operationQueue.shift();
      prevOperation.setSecondOperand(number);
      const result = prevOperation.evaluate();
      this.lastCalculatedResult = result;
      const currentOperation = new Operation();
      currentOperation.setFirstOperand(result);
      currentOperation.setOperator(operatorsSymbols.get(operator));
      this.operationQueue.push(currentOperation);
    } else {
      // No hay elementos. Es la primera operación que se va a hacer
      const operation = new Operation();
      if (number) operation.setFirstOperand(number);
      else operation.setFirstOperand(this.lastCalculatedResult);
      operation.setOperator(operatorsSymbols.get(operator));
      this.operationQueue.push(operation);
      this.lastCalculatedResult = operation.getFirstOperand();
      this.setNumber(operation.getFirstOperand());
    }
  }

  processEqualOperator() {
    let number = parseFloat(this.number);
    if (this.operationQueue.length > 0) {
      // Si la cola tiene alguna operación guardada
      const prevOperation = this.operationQueue.shift();
      if (prevOperation.getSecondOperand()) {
        // Si tiene un segundo operador entonces tenemos todo lo necesario para hacer la operación, sea
        // la que sea. Por eso llamamos al método evaluate
        prevOperation.setFirstOperand(this.lastCalculatedResult);
        this.lastCalculatedResult = prevOperation.evaluate();

      } else {
        // Pero si no tiene un segundo operador
        // Entonces se lo asignamos y evaluamos
        prevOperation.setSecondOperand(number);
        this.lastCalculatedResult = prevOperation.evaluate();
        return this.lastCalculatedResult;
      }
    } else {
      // Si la cola está vacía
      return this.lastCalculatedResult;
    }
  }

  processPercentage() {
    const percentage = new ExtraOperations();
    if (this.operationQueue.length == 0) {
      //2->1//<=2
      percentage.setOnlyOperand(this.numberShown);
      percentage.applyPercentage();
      this.numberShown = percentage.getOnlyOperand();
      this.operationQueue = [];
      return this.numberShown;
    } else {
      percentage.setOnlyOperand(parseFloat(this.number));
      percentage.applyPercentage();
      this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand());
      this.number;
    }
  }

  processChangeSign() {
    const percentage = new ExtraOperations();
    if (this.operationQueue.length == 0) {
      percentage.setOnlyOperand(this.number);
      percentage.changeTheSign();
      this.numberShown = percentage.getOnlyOperand();
    } else {
      percentage.setOnlyOperand(parseFloat(this.number));
      percentage.changeTheSign();
      this.number = percentage.getOnlyOperand();
      this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand());
    }
  }

  reset() {
    this.numberShown = 0;
  }

  delete() {
    const currentOut = document.querySelector(".current__output");
    const array = currentOut.innerText.split("");
    // console.log(currentOut)
    //  Number(currentOut))
    const deletedDigit = array.pop();
    currentOut.innerText = array.join("");
  }
}
