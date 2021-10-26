import {
  calculateSavings,
  getMonthInfo,
  getMultiply,
  getMultiplier,
} from "./calculator.js";

function showResults(e) {
  e.preventDefault();
  const month = getMonthInfo();
  const multiply = getMultiply();
  const multiplier = getMultiplier();
  const result = calculateSavings();

  const calculatorContainer = document.querySelector(".calculator__container");
  calculatorContainer.innerHTML = `<h1>${result}</h1>`;
}

export { showResults };
