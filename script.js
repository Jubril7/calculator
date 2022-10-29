const screenDisplay = document.querySelector(".screen-display");
const dataNumbers = document.querySelectorAll(".numbers");
const dataOperation = document.querySelector(".operation");
const dataOperations = document.querySelectorAll(".operations");
const dataNumber = document.querySelector(".number");
const btnOnOff = document.querySelector(".btn-onoff");
const plusOrMinus = document.querySelector(".operation1");
const dataPercent = document.querySelector(".operation2");
const decimal = document.querySelector(".decimal");
const dataEquals = document.querySelector(".operations1");
const prevScreenDisplay = document.querySelector(".screen-display-pre");

// let disVal = screenDisplay.innerHTML;
// if(disVal != " "){
//     Number(disVal).toLocaleString("en-US")
// }


dataNumbers.forEach(function(button){
    button.addEventListener("click", function(){
      let buttonValue = this.textContent;
        screenDisplay.innerHTML = ((screenDisplay.innerHTML += buttonValue).replace(/^0+/, '').substr(0, 9)).toLocaleString("en-US");
        dataOperation.innerText = "C"
        dataOperation.addEventListener("click", function(){
            dataOperations.forEach(function(button){
                button.style.backgroundColor = "rgb(231, 166, 44)"
                prevScreenDisplay.innerHTML = " "
            })       
        })
    })
})

dataNumber.addEventListener("click", function(){
    let buttonValue = this.textContent;

    // screenDisplay.innerHTML = ((screenDisplay.innerHTML += buttonValue).replace(/^0+/, '0').substr(0, 9)).toLocaleString("en-US");
    
    
})

decimal.addEventListener("click", function(){
  if(screenDisplay.innerHTML.indexOf(".") === -1){
    screenDisplay.innerHTML += ".";
  }
})  


dataOperation.addEventListener("click", function(){
    if(buttonValue = "C"){
            screenDisplay.innerHTML = "0"
            dataOperation.innerText = "AC"
        if(buttonValue = "AC"){
            dataOperation.addEventListener("click", function(){
                dataOperations.forEach(function(button){
                    button.style.backgroundColor = "rgb(231, 166, 44)"
                    prevScreenDisplay.innerHTML = " "
                })       
            })
        }
    }
})    



dataOperations.forEach(function(button){
    button.addEventListener("click", function(e){
        button.style.backgroundColor = "rgb(246, 230, 216)"
        let buttonValue = this.textContent;
            buttonValue = e.target.innerText;
        if(buttonValue === "x"){
                prevScreenDisplay.innerHTML = (screenDisplay.innerHTML).replace(/^0+/, '')   
                screenDisplay.innerHTML = "0" 
            dataEquals.addEventListener("click", function(){
                screenDisplay.innerHTML = (prevScreenDisplay.innerHTML * screenDisplay.innerHTML).toLocaleString("en-US");
                button.style.backgroundColor = "rgb(231, 166, 44)"
            })

        } else if(buttonValue === "+"){
                prevScreenDisplay.innerHTML = (screenDisplay.innerHTML).replace(/^0+/, '')   
                screenDisplay.innerHTML = 0 
            dataEquals.addEventListener("click", function(){
                screenDisplay.innerHTML = (parseFloat(prevScreenDisplay.innerHTML) + parseFloat(screenDisplay.innerHTML)).toLocaleString("en-US");
                button.style.backgroundColor = "rgb(231, 166, 44)" 
            })

        } else if(buttonValue === "-"){
                prevScreenDisplay.innerHTML = (screenDisplay.innerHTML).replace(/^0+/, '')   
                screenDisplay.innerHTML = "0"
            dataEquals.addEventListener("click", function(){
                screenDisplay.innerHTML = (prevScreenDisplay.innerHTML - screenDisplay.innerHTML).toLocaleString("en-US");
                button.style.backgroundColor = "rgb(231, 166, 44)"
            })

        } else if(buttonValue === "÷"){
                prevScreenDisplay.innerHTML = (screenDisplay.innerHTML).replace(/^0+/, '')   
                screenDisplay.innerHTML = "0" 
            dataEquals.addEventListener("click", function(){
                screenDisplay.innerHTML = (prevScreenDisplay.innerHTML / screenDisplay.innerHTML).toLocaleString("en-US");
                button.style.backgroundColor = "rgb(231, 166, 44)"
            }) 
        } 
    })
})


btnOnOff.addEventListener("click", function(e){
    let buttonValue = this.textContent;
        buttonValue = e.target.innerText;
    if(buttonValue === "OFF"){
        dataNumber.disabled = true;
        dataOperation.disabled = true;
        dataPercent.disabled = true;
        plusOrMinus.disabled = true;
        decimal.disabled = true;
        dataEquals.disabled = true;
        dataNumber.style.color = "darkgrey"
        dataOperation.style.color = "darkgrey"
        dataPercent.style.color = "darkgrey" 
        plusOrMinus.style.color = "darkgrey"
        decimal.style.color = "darkgrey" 
        dataEquals.style.color = "darkgrey" 
        btnOnOff.innerText = "ON"
        btnOnOff.style.backgroundColor = "green"
        screenDisplay.innerHTML = " "
    } else if(buttonValue === "ON"){
        dataNumber.disabled = false;
        dataOperation.disabled = false;
        dataPercent.disabled = false;
        plusOrMinus.disabled = false;
        decimal.disabled = false;
        dataEquals.disabled = false;
        dataNumber.style.color = "white"
        dataOperation.style.color = "white"
        dataPercent.style.color = "white" 
        plusOrMinus.style.color = "white"
        decimal.style.color = "white"
        dataEquals.style.color = "white"
        btnOnOff.innerText = "OFF"
        btnOnOff.style.backgroundColor = "red"
        screenDisplay.innerHTML = "0"
    }

    
})


btnOnOff.addEventListener("click", function(e){
    dataNumbers.forEach(function(button){
        let buttonValue = this.textContent;
            buttonValue = e.target.innerText; 
        if(buttonValue === "ON"){    
            button.disabled = true;
            button.style.color = "darkgrey"
        } else if(buttonValue === "OFF"){
            button.disabled = false;
            button.style.color = "white"
        }     
    })
})




btnOnOff.addEventListener("click", function(e){
    dataOperations.forEach(function(button){
        let buttonValue = this.textContent;
            buttonValue = e.target.innerText; 
        if(buttonValue === "ON"){    
            button.disabled = true;
            button.style.color = "darkgrey"
        } else if(buttonValue === "OFF"){
                button.disabled = false;
                button.style.color = "white"
        }
    })
})




plusOrMinus.addEventListener("click", function(){
    screenDisplay.innerHTML = screenDisplay.innerHTML * -1
})

dataPercent.addEventListener("click", function(){
    screenDisplay.innerHTML = screenDisplay.innerHTML / 100
})
