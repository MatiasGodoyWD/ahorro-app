import { infoPage } from "./info.js";
import { showResults } from "./result.js";

function calculatorPage(contenedor) {
  contenedor.innerHTML = `  <h1 class="title">¡Empeza a ahorrar!</h1>
    <div class="calculator__container">
      <form class="calculator__form">
        <h2 class="calculator__title">Calcula tu ahorro</h2>
        <h3 class="calculator__secondary-title">
          ¿Por cuanto tiempo queres comprometerte?
        </h3>
        <p>
          <input class='radio-input' type="radio" id="one-month" name="days" value="1" />
          <label class='calculator__label' for="one-month">1 Mes</label>
          
        </p>

        <p>
          <input class='radio-input' type="radio" id="six-months" name="days" value="6" />
          <label class='calculator__label' for="six-months">6 meses</label>
        </p>
        <p>
          <input class='radio-input' type="radio" id="twelve-month" name="days" value="12" />
          <label class='calculator__label' for="twelve-month">12 meses</label>
        </p>
        <p>
          <input class='radio-input' type="radio" id="other" name="days" checked />
          <label class='calculator__label' for="other">
            Otro : </label> <input type="text" name="days" id="other-text" class="calculator__input" placeholder="meses..." />
          
        </p>
        <h3 class="calculator__secondary-title">
          ¿Queres multiplicar la cantidad a ahorrar?
        </h3>

        <p><label class='calculator__label' for = 'multiply'>Días a multiplicar: </label > <input type="text" name="multiply" id="multiply" class="calculator__input"></p>
        <p><label class='calculator__label' for = 'multiplier'>Multiplicar por:</label > <input type="text" name="multiplier" id="multiplier" class="calculator__input"></p>
      <button class="btn calculator__btn" type= 'submit' >Calcula tu ahorro</button>
        </form>
      <img
        src="./img/chanchaorro.jpg"
        alt="Chanchito ahorrador"
        class="info__img"
      />
    </div>`;
  printResults();
}

function getMonthInfo() {
  const month = [...document.getElementsByName("days")];
  const checkedInput = month.find((m) => m.checked === true);
  if (checkedInput.id === "other") {
    const checkedInputText = document.querySelector("#other-text");
    return Number(checkedInputText.value);
  } else {
    console.log(checkedInput.value);
    return Number(checkedInput.value);
  }
}

function getMultiply() {
  const multiply = document.querySelector("#multiply");
  console.log(multiply.value);
  if (multiply.value !== "") {
    return Number(multiply.value);
  } else {
    return 0;
  }
}

function getMultiplier() {
  const multiplier = document.querySelector("#multiplier");
  console.log(multiplier.value);
  if (multiplier.value !== "") {
    return Number(multiplier.value);
  } else {
    return 0;
  }
}

function calculateSavings() {
  const month = getMonthInfo();
  const multiply = getMultiply();
  const multiplier = getMultiplier();
  let sum = 0;
  for (let i = 1; i <= month * 30; i++) {
    if (i <= multiply) {
      sum += i * multiplier;
    } else {
      sum += i;
    }
  }
  return sum;
}

function printResults() {
  const form = document.querySelector(".calculator__form");

  form.addEventListener("submit", showResults);
}

export {
  calculatorPage,
  calculateSavings,
  getMultiply,
  getMultiplier,
  getMonthInfo,
};
