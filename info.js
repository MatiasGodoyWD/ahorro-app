import { calculatorPage } from "./calculator.js";

function infoPage(contenedor) {
  contenedor.innerHTML = ` <h1 class="title">Ahorra para que la plata te "sobre"</h1>
    <div class="info__container">
      <div class="info__sobres__container">
        <h2 class="info__sobres__title">Técnica de los sobres</h2>
        <p class="info__sobres__p">
          Consiste en distribuir lo que podés ahorrar en cierta cantidad de
          sobres. Cada sobre tendrá un numero que va del 1 al numero del
          ultimo dia en que vas a ahorrar. Ponemos esos sobres en una caja y
          cada día sacamos uno al azar y colocamos dentro la cantidad que
          nos indica el sobre.
        </p>
        <button class="btn info__btn">Quiero empezar a ahorrar</button>
      </div>
      <iframe class="info__video" width="560" height="315" src="https://www.youtube.com/embed/cBM48pasdC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>`;
  showCalculator(contenedor);
}

function showCalculator(container) {
  const button = document.querySelector(".info__btn");
  button.addEventListener("click", () => {
    calculatorPage(container);
  });
}

export { infoPage };
