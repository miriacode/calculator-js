class CalculatorController {
  constructor() {
    this.lastCalculatedResult = 0;
    this.operationQueue = []; // Cola de operaciones
  }

  getLastCalculatedResult() {
    return this.lastCalculatedResult;
  }

  processOperation(number, operator) {
    if (this.operationQueue.length > 0) {
      // Hay por lo menos una operación en la cola
      // presumimos que esa operación le falta el segundo operando
      const prevOperation = this.operationQueue.shift();
      prevOperation.setSecondOperand(number);

      const result = prevOperation.evaluate();
      const currentOperation = new Operation();
      currentOperation.setFirstOperand(result);
      currentOperation.setOperator(operatorsSymbols.get(operator));
      this.operationQueue.push(currentOperation);
      this.lastCalculatedResult = result;
    } else {
      // No hay elementos. Es la primera operación que se va a hacer
      const operation = new Operation();
      operation.setFirstOperand(number);
      operation.setOperator(operatorsSymbols.get(operator));
      this.operationQueue.push(operation);
      this.lastCalculatedResult = operation.getFirstOperand();
    }
  }

  processEqualOperator(number) {
    if (this.operationQueue.length > 0) {
      // Si la cola tiene alguna operación guardada
      const prevOperation = this.operationQueue.shift();
      if (prevOperation.getSecondOperand()) {
        // Si tiene un segundo operador entonces
        // tenemos todo lo necesario para hacer la operación, sea
        // la que sea. Por eso llamamos al método evaluate
        this.lastCalculatedResult = prevOperation.evaluate();
      } else {
        // Pero si no tiene un segundo operador
        // Entonces se lo asignamos y evaluamos
        prevOperation.setSecondOperand(number);
        this.lastCalculatedResult = prevOperation.evaluate();
      }
      return this.lastCalculatedResult;
    } else {
      // Si la cola está vacía
      return this.lastCalculatedResult;
    }
  }

  processPercentage(){ 
      const percentage = new ExtraOperations();
    if(this.operationQueue.length==0){//2->1//<=2
      console.log('sisi')
      percentage.setOnlyOperand(this.lastCalculatedResult);
      percentage.applyPercentage()
      this.lastCalculatedResult = percentage.getOnlyOperand();
      this.operationQueue = [];
      return this.lastCalculatedResult;
    }
    else{
      //OBTENER OPTRO MODO DE HALLAR EL LAST NUMBER!!!
      //Esto debe ir en el View
      const currentOut = document.querySelector('.current__output');
      percentage.setOnlyOperand(parseFloat(currentOut.innerText));
      currentOut.innerText = percentage.getOnlyOperand()
      percentage.applyPercentage();
      this.operationQueue[0].setSecondOperand(percentage.getOnlyOperand())
    }
    
  }

}
