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
    }else if(this.number=="00"&&this.number.length==2){
      this.number ="0";
    }else if(typeof(this.number) != typeof(number)){
      this.number;
    }else {
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

  addComma(){
    let numberArray = this.number.split('')
    if(numberArray.includes(".")){
      this.number = this.number;
    }else{
      this.number = this.getNumber() +".";
    }
    return this.getNumber();
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
      // console.log(this.getNumber())
    }
  }

  processEqualOperator() {
    // debugger
    console.log(this.operationQueue)
    let number = parseFloat(this.number);
    if (this.operationQueue.length > 0) {
      // Si la cola tiene alguna operación guardada
      const prevOperation = this.operationQueue.shift();
      console.log(prevOperation)
      if (prevOperation.getSecondOperand()) {
        // Si tiene un segundo operador entonces tenemos todo lo necesario para hacer la operación, sea
        // la que sea. Por eso llamamos al método evaluate
        prevOperation.setFirstOperand(this.number);
        this.lastCalculatedResult = prevOperation.evaluate();
        return this.lastCalculatedResult

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
      percentage.setOnlyOperand(this.number);
      percentage.applyPercentage();
      this.number = percentage.getOnlyOperand();
    } else {
      percentage.setOnlyOperand(parseFloat(this.number));
      percentage.applyPercentage();
      this.number = percentage.getOnlyOperand();
      this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand());
    }
    return this.number;
  }

  processChangeSign() {
    const percentage = new ExtraOperations();
    console.log(this.operationQueue)
    if (this.operationQueue.length == 0) {
      percentage.setOnlyOperand(this.number);
      percentage.changeTheSign();
      this.number = percentage.getOnlyOperand();
      console.log(this.number)

      percentage.setOnlyOperand(parseFloat(this.lastCalculatedResult));
     percentage.changeTheSign();
       this.lastCalculatedResult = percentage.getOnlyOperand();
    } 
    // else if(this.lastCalculatedResult.length) {
    //   percentage.setOnlyOperand(parseFloat(this.lastCalculatedResult));
    //   percentage.changeTheSign();
    //   this.lastCalculatedResult = percentage.getOnlyOperand();
    //   // this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand());
    //   console.log(this.lastCalculatedResult)
    // }
    else{
      percentage.setOnlyOperand(parseFloat(this.number));
      percentage.changeTheSign();
      this.number = percentage.getOnlyOperand();
      this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand());
      console.log(this.number)
    }
    return this.number;
  }

  reset() {
    this.operationQueue = [];
    this.number = "";
    this.lastCalculatedResult = 0;
    return this.lastCalculatedResult;
  }

  delete() {
    let end = this.number.length-1;
    this.number = this.number.substring(0,end);
    return this.number;
  }
}
