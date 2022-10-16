const screenDisplay = document.querySelector(".screen-display");
const dataNumbers = document.querySelectorAll(".numbers");
const dataOperation = document.querySelector(".operation");
const dataOperations = document.querySelectorAll(".operations");
const dataNumber = document.querySelector(".number");
const btnOn = document.querySelector(".btn-on");
const btnOff = document.querySelector(".btn-off");




dataNumbers.forEach(function(button){
    button.addEventListener("click", function(){
      let buttonValue = this.textContent;
        screenDisplay.innerHTML = (screenDisplay.innerHTML + buttonValue).substr(0, 10);
    })
})
dataNumber.addEventListener("click", function(){
    let buttonValue = this.textContent;
    screenDisplay.innerHTML = (screenDisplay.innerHTML + buttonValue).substr(0, 10); 
})






