var input = document.getElementById('input');

// document.querySelector('#input').innerHTML = input; //this is how to change the display
function pushBtn(obj){
    var display = obj.innerHTML; 
    
    if(display == '='){
        input.innerHTML = eval(input.innerHTML);
    }
    else if (display == 'C'){
        input.innerHTML = '0';
    } else {
        if(input.innerHTML == "0"){
            input.innerHTML = display;
        } else {
            input.innerHTML += display;
        }
    }
}

//math functions
// const add = function(a, b){
//     return a + b;
// }
// const subtract = function(a, b){
//     return a - b;
// }
// function multiply(a,b){
//     return a * b;
// }
// function divide(a,b){
//     return a / b;
// }

// let operator = '';
// //take an operator and 2 numbers and calls one of above functions
// function operate(operator, a, b){
//     if(operator == "*"){
//         multiply(a, b);
//     } else if(operator == "/"){
//         divide(a,b);
//     } 
//     if(operator == "+"){
//         add(a,b);
//     } 
//     if(operator == "-"){
//         subtract(a,b);
//     }
// }