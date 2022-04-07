function stringCheck(string1){
    if (typeof string1 === 'string' ||string1 instanceof String){
       string1 = 0;
    }
    return string1;
}
function multiply(x,y){
    return(parseFloat(stringCheck(x)) * parseFloat(stringCheck(y)));
}
function divide(x,y){
    return(parseFloat(stringCheck(x)) / parseFloat(stringCheck(y)));
}
function add(x,y){
    return(parseFloat(stringCheck(x)) + parseFloat(stringCheck(y)));
}
function subtract(x,y){
    return(parseFloat(stringCheck(x)) - parseFloat(stringCheck(y)));
}
module.exports = {
    add: add,
    divide: divide,
    subtract: subtract,
    multiply: multiply
}
