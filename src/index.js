document.addEventListener("DOMContentLoaded", () => {
  const calculatorView = new CalculatorView(new CalculatorController());
  const numberButtons = [...document.querySelectorAll("[data-button-number]")];
  const extraOperatorsButtons = [...document.querySelectorAll("[data-button-extra]")];
  const operatorsButtons = [...document.querySelectorAll("[data-button-operator]")];
  const commaButton = document.querySelector("[data-button-comma]");
  const toggle = document.querySelector('.toggle__input')

  //Toggle
  toggle.addEventListener("change",()=>{
    calculatorView.changeTheme();
  })

  //Event Listeners
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const number = button.innerText;
      calculatorView.pressNumber(number);
    });
  });

  commaButton.addEventListener("click",()=>{
    // const comma = button.innerText;
    calculatorView.pressComma();
  })

  operatorsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.innerText;
      calculatorView.pressOperator(operator);
    });
  });

  extraOperatorsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.innerText;
      calculatorView.pressExtraOperations(operator);
    });
  });

});
