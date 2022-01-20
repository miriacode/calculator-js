document.addEventListener("DOMContentLoaded", () => {
  const calculatorView = new CalculatorView(new CalculatorController());
  const numberButtons = [...document.querySelectorAll("[data-button-number]")];
  const numberExtras = [...document.querySelectorAll("[data-button-extra]")];
  const numberOperators = [...document.querySelectorAll("[data-button-operator]")];

  //Event Listeners
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const number = button.innerText;
      calculatorView.pressNumber(number);
    });
  });

  numberOperators.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.innerText;
      calculatorView.pressOperator(operator);
    });
  });

  numberExtras.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.innerText;
      calculatorView.pressExtraOperations(operator);
    });
  });
});
