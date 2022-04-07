const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    secondOperand: null,
    clearAll: false
};
// display variables
var displayText = document.getElementById("displayText");
// button variables
var equalButton = document.getElementById("equalButton");
var negativeButton = document.getElementById("negativeButton");
let numberKeys = Array.from(document.getElementsByClassName("numberKeys"));
let operatorKeys = Array.from(document.getElementsByClassName("operatorKeys"));
//event listeners
allClearButton.addEventListener("click", allClearFunction);
clearButton.addEventListener("click", clearFunction);
negativeButton.addEventListener("click", negativeToggle);
//assign value to buttons
function buttonSetup(){
    numberKeys.map(button => {
        button.addEventListener('click', (e) => {

            if(calculator.clearAll === true){
                displayText.innerHTML = "0";
                calculator.clearAll = false;
            }
            switch(e.target.innerHTML){
                default: 
                if(displayText.innerHTML === "0" ){
                  displayText.innerHTML = e.target.innerHTML;  
                } else {
                    if(calculator.waitingForSecondOperand === true){
                        displayText.innerHTML = "";
                        calculator.waitingForSecondOperand = false;
                        console.log(calculator.firstOperand);
                    }
                    if(displayText.innerHTML.length < 15){
                    displayText.innerHTML += e.target.innerHTML;
                }
                }
            }
        });
    });
    operatorKeys.map(button => {
        button.addEventListener('click', operatorSetup);  
         button.addEventListener('click', (e) =>{
           calculator.operator = e.target.innerHTML; 
           console.log(calculator.operator);
        });
    });

    equalButton.addEventListener('click', equals);
}
buttonSetup();
function operatorSetup(){
    calculator.firstOperand = displayText.innerHTML;
    calculator.waitingForSecondOperand = true;    
}
function equals(){
    calculator.secondOperand = displayText.innerHTML;
    switch(calculator.operator){
        case "*":
            displayText.innerHTML = limit(multiply(calculator.firstOperand, calculator.secondOperand), 15);
            break;
        case "+":
            displayText.innerHTML = limit(add(calculator.firstOperand, calculator.secondOperand),15);
            break;
        case "-":
            displayText.innerHTML = limit(subtract(calculator.firstOperand, calculator.secondOperand),15);
            break;
        case "/":
            displayText.innerHTML = limit(divide(calculator.firstOperand, calculator.secondOperand), 15);
            break;
        default:
            break;
    }
   resetCalculator();
}
function stringCheck(string1){
     if (typeof string1 === 'string' ||string1 instanceof String){
        string1 = 0;
     }

     return string1;
}
function multiply(x,y){
    return(parseFloat(x) * parseFloat(y));
}
function divide(x,y){
    return(parseFloat(x) / parseFloat(y));
}
function add(x,y){
    return(parseFloat(x) + parseFloat(y));
}
function subtract(x,y){
    return(parseFloat(x) - parseFloat(y));
}
function negativeToggle(){
    if(displayText.innerHTML.includes("-")){
        displayText.innerHTML = displayText.innerHTML;
    } else {
        displayText.innerHTML = "-" + displayText.innerHTML;
    }
}
//update display to "0" when nothing is entered
function updateDisplay(){
    displayText.innerHTML = calculator.displayValue;
}
updateDisplay();
//clear current entry
function allClearFunction() {
    displayText.innerHTML = "0";
    console.log('0');
}
//clear last entry
function clearFunction(){
    displayText.innerHTML = displayText.innerHTML.slice(0,-1);
    if(displayText.innerHTML === "" || displayText.innerHTML == "-"){
        displayText.innerHTML = "0";
    } 
}
function resetCalculator(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    calculator.secondOperand = null;
    calculator.clearAll = true;
}
function limit (string = '', limit = 0) {  
  return string.toString().substring(0, limit)
}
