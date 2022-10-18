const screenDisplay = document.querySelector(".screen-display");
const dataNumbers = document.querySelectorAll(".numbers");
const dataOperation = document.querySelector(".operation");
const dataOperations = document.querySelectorAll(".operations");
const dataNumber = document.querySelector(".number");
const btnOn = document.querySelector(".btn-on");
const btnOff = document.querySelector(".btn-off");
const plusOrMinus = document.querySelector(".operation1");
const dataPercent = document.querySelector(".operation2");




dataNumbers.forEach(function(button){
    button.addEventListener("click", function(){
      let buttonValue = this.textContent;
        screenDisplay.innerHTML = (screenDisplay.innerHTML + buttonValue).substr(0, 12);
    })
})

dataNumber.addEventListener("click", function(){
    let buttonValue = this.textContent;
    screenDisplay.innerHTML = (screenDisplay.innerHTML + buttonValue).substr(0, 10); 
})

dataOperation.addEventListener("click", function(){
  screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1)
    
})

btnOn.addEventListener("click", function(){
    dataNumber.disabled = false;
    dataOperation.disabled = false;
    dataPercent.disabled = false;
    plusOrMinus.disabled = false;
    dataNumber.style.color = "white"
    dataOperation.style.color = "white"
    dataPercent.style.color = "white" 
    plusOrMinus.style.color = "white" 
})


btnOff.addEventListener("click", function(){
    dataNumber.disabled = true;        
    dataOperation.disabled = true;
    dataPercent.disabled = true;
    plusOrMinus.disabled = true;
    dataNumber.style.color = "darkgrey"
    dataOperation.style.color = "darkgrey"
    dataPercent.style.color = "darkgrey"
    plusOrMinus.style.color = "darkgrey"


})

btnOn.addEventListener("click", function(){
    dataNumbers.forEach(function(button){
        button.disabled = false;
        button.style.color = "white"
    })
})

btnOff.addEventListener("click", function(){
    dataNumbers.forEach(function(button){
        button.disabled = true;
        button.style.color = "darkgrey"
    })
})

btnOn.addEventListener("click", function(){
    dataOperations.forEach(function(button){
        button.disabled = false;
        button.style.color = "white"
    })
})

btnOff.addEventListener("click", function(){
    dataOperations.forEach(function(button){
        button.disabled = true;
        button.style.color = "darkgrey"
    })
})

plusOrMinus.addEventListener("click", function(){
    `$("#p").text(-(parseFloat($("#p").text())))`;

})
