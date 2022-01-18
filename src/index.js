document.addEventListener("DOMContentLoaded", () => {
  const calculatorView = new CalculatorView(new CalculatorController());
  const numberButtons = [
    ...document.querySelectorAll("[data-button-number]")];
  
  const numberExtras = [
    ...document.querySelectorAll("[data-button-extra]")];
  const numberOperatorsX = [
      ...document.querySelectorAll("[data-button-operator]")];
  const equal = [
      ...document.querySelectorAll("[data-button-operator]")].slice(3,4);
  const numberOperators = [...numberOperatorsX.filter(el => !equal.includes(el))];
  

  //Event Listeners
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //POR EL MOMENTO, DEBERIA ESTAR ENCAPSULADO EN UN CONTROLLER
      calculatorView.pressNumber(button.innerText);
      //Paint
      calculatorView.showNumber();
    });
  });

  numberOperators.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.innerText;
      calculatorView.pressOperator(operator);
      // calculatorView.showResult();
    });
  });

  equal[0].addEventListener("click", () => {
      calculatorView.pressEqual();
   
  });
 
  numberExtras.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.innerText);
    });
  });
});
