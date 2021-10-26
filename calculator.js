import { infoPage } from "./info.js";

function calculatorPage(contenedor) {
  contenedor.innerHTML = `  <h1 class="title">¡Empeza a ahorrar!</h1>
    <div class="calculator__container">
      <form class="calculator__form">
        <h2 class="calculator__title">Calcula tu ahorro</h2>
        <h3 class="calculator__secondary-title">
          ¿Por cuanto tiempo queres comprometerte?
        </h3>
        <p>
          <input class='radio-input' type="radio" id="one-month" name="days" value="1" checked/>
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
          <input class='radio-input' type="radio" id="other" name="days" />
          <label class='calculator__label' for="other">
            Otro : <input type="text" name="days" id="other-text" class="calculator__input" placeholder="meses..." />
          </label>
        </p>
        <h3 class="calculator__secondary-title">
          ¿Queres multiplicar la cantidad a ahorrar?
        </h3>

        <label class='calculator__label' for = 'multiply'>Días a multiplicar: <input type="text" name="multiply" id="multiply" class="calculator__input"></label for = 'multiply'>
        <label class='calculator__label' for = 'multiplier'>Multiplicar por: <input type="text" name="multiplier" id="multiplier" class="calculator__input"></label for = 'multiply'>
      <button class="btn calculator__btn" type= 'submit' >Calcula tu ahorro</button>
        </form>
      <img
        src="./img/chanchaorro.jpg"
        alt="Chanchito ahorrador"
        class="info__img"
      />
    </div>`;
  showInfo(contenedor);
}

function showInfo(container) {
  const form = document.querySelector(".calculator__form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    infoPage(container);
  });
}

export { calculatorPage };
