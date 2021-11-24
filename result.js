import {
  calculateSavings,
  getMonthInfo,
  getMultiply,
  getMultiplier,
  calculatorPage
} from "./calculator.js";
import { infoPage } from "./info.js";


function showResults(e) {
  e.preventDefault()
  const month = getMonthInfo();
  const multiply = getMultiply();
  const multiplier = getMultiplier();
  const result = calculateSavings();
  const calculatorContainer = document.querySelector(".calculator__container");

  calculatorContainer.innerHTML = `    <div class="loader">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>`
const loader = document.querySelector('.loader')
  setTimeout(() => {
      loader.classList.remove('show')
      calculatorContainer.classList.remove('calculator__container')
      calculatorContainer.classList.add('result__container')
      calculatorContainer.innerHTML = `
      <p class= 'result__p'>Has decidido ahorrar durante ${month * 30} días</p>
      <p class= 'result__p'>Multiplicando los primeros ${multiply} días por $${multiplier}</p>
      <p class= 'result__p'>Podrás ahorrar $${result}</p>
      <div class="result__btn__container">
        <button class="btn info__btn responsive__btn">Volver a introducción</button>
        <button class="btn calculator__btn responsive__btn">Volver a calcular</button>
      </div>
`;  
btnHandlers()
  }, 2000);
  
 

}

function btnHandlers(){
  const appContainer = document.querySelector(".app-container");
  const infoBtn = document.querySelector('.info__btn')
  const calculator__btn = document.querySelector('.calculator__btn')

  infoBtn.addEventListener('click',() =>{
    infoPage(appContainer)
  })
  calculator__btn.addEventListener('click',() =>{
    calculatorPage(appContainer)
  })
}


export { showResults };
