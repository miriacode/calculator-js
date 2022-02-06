class CalculatorController {
  constructor() {
    this.operationQueue = [];
    this.operator = "";
    this.number = "";
    this.lastCalculatedResult = "";
    this.storedNumber = "";
    this.memoryOperations = new MemoryOperations();
  }

  setNumber(number) {
    if (number === "") {
      this.number = "";
      this.number = number;
    } else if (this.number == "00" && this.number.length == 2) {
      this.number = "0";
    } else if (typeof number === "string" && this.number !== "0") {
      this.number += number;
    }

    if (number) {
      if (this.number) {
        this.lastCalculatedResult = this.number;
      } else {
        this.lastCalculatedResult = number;
      }
    }
  }

  getNumber() {
    return this.number;
  }

  getLastCalculatedResult() {
    return this.lastCalculatedResult;
  }

  setNumberStored(number){
    this.storedNumber = number;
  }

  getNumberStored(){
    return this.storedNumber;
  }

  addComma() {
    let numberArray = this.number.split("");
    if (numberArray.includes(".")) {
      this.number = this.number;
    } else {
      this.number = this.getNumber() + ".";
    }
    return this.getNumber();
  }

  processOperation(operator) {
    this.operator = operator;
    let number;
    if (this.getNumber()) {
      number = parseFloat(this.getNumber());
    }

    if (this.operationQueue.length) {
      const prevOperation = this.operationQueue.shift();
      if (number) {
        prevOperation.setSecondOperand(number);
        const result = prevOperation.evaluate();
        this.lastCalculatedResult = result;
        const currentOperation = new Operation();
        currentOperation.setFirstOperand(result);
        currentOperation.setOperator(operatorsSymbols.get(operator));
        this.operationQueue.push(currentOperation);
      }
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
      console.log(this.number)
      console.log(this.lastCalculatedResult)
  }

  processEqualOperator() {
    let number = parseFloat(this.number);
    if (this.operationQueue.length > 0) {
      // Si la cola tiene alguna operación guardada
      const prevOperation = this.operationQueue.shift();
      if (prevOperation.getSecondOperand()) {
        this.lastCalculatedResult = prevOperation.evaluate();
        return this.lastCalculatedResult;
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
    const extraOperations = new ExtraOperations();
    if (this.number == "" && this.lastCalculatedResult) {
      extraOperations.setOnlyOperand(this.lastCalculatedResult);
      extraOperations.applyPercentage();
      this.lastCalculatedResult = extraOperations.getOnlyOperand();
      return this.lastCalculatedResult;
    } else {
      extraOperations.setOnlyOperand(this.number);
      extraOperations.applyPercentage();
      if (this.operationQueue.length == 0) {
        this.number = null;
        this.lastCalculatedResult = extraOperations.getOnlyOperand();
        return this.lastCalculatedResult;
      } else {
        this.number = extraOperations.getOnlyOperand();
        this.operationQueue[0].setSecondOperand(
          extraOperations.getOnlyOperand()
        );
        return this.number;
      }
    }
  }

  processChangeSign() {
    const extraOperations = new ExtraOperations();
    if (this.number || this.lastCalculatedResult) {
      extraOperations.setOnlyOperand(this.lastCalculatedResult);
      extraOperations.changeTheSign();
      this.lastCalculatedResult = extraOperations.getOnlyOperand();
      this.number = null;
      return this.lastCalculatedResult;
    } else {
      extraOperations.setOnlyOperand(parseFloat(this.number));
      extraOperations.changeTheSign();
      if (this.operationQueue.length === 0) {
        this.number = null;
        this.lastCalculatedResult = extraOperations.getOnlyOperand();
        return this.lastCalculatedResult;
      } else {
        this.number = extraOperations.getOnlyOperand();
        this.operationQueue[0].setSecondOperand(
          extraOperations.getOnlyOperand()
        );
        return this.number;
      }
    }
  }

  reset() {
    this.operationQueue = [];
    this.number = "";
    this.lastCalculatedResult = 0;
    return this.lastCalculatedResult;
  }


  delete() {
    let end = this.number.length - 1;
    this.number = this.number.substring(0, end);
    if (!this.number.length) {
      this.setNumber("0");
    }
    return this.number;
  }

  addToMemory(){
    console.log(this.number)
    console.log(this.lastCalculatedResult)

    this.memoryOperations.addToMemory(this.lastCalculatedResult)

    this.storedNumber = this.memoryOperations.recallMemory();
    this.lastCalculatedResult = this.memoryOperations.recallMemory();
    this.number = "";

    console.log(this.storedNumber)
    return this.storedNumber
  }

  recallMemory(){
    // const memoryOperations = new MemoryOperations();
    // let y = memoryOperations.recallMemory();
    // console.log(y)
    return this.memoryOperations.recallMemory();
    // // this.setNumberStored(this.number)
    
    // let y = memoryOperations.recallMemory();
    // // this.number = 
    // console.log(y)
    // console.log(this.number)
    // console.log(y)
    // return this.storedNumber;
  }

  clearMemory(){
    return this.memoryOperations.clearMemory();
  }

}
