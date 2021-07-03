// arithmethic equation
let eqn = []
// maximum lenght of character that can be displayed
const max_length=30
// current arithmetic operation 
let operation=null
// get all buttons with id from index.html
document.getElementById("AC").addEventListener("click",ac)
document.getElementById("zero").addEventListener("click",zero_num)
document.getElementById("one").addEventListener("click",one_num)
document.getElementById("two").addEventListener("click",two_num)
document.getElementById("three").addEventListener("click",three_num)
document.getElementById("four").addEventListener("click",four_num)
document.getElementById("five").addEventListener("click",five_num)
document.getElementById("six").addEventListener("click",six_num)
document.getElementById("seven").addEventListener("click",seven_num)
document.getElementById("eight").addEventListener("click",eight_num)
document.getElementById("nine").addEventListener("click",nine_num)
document.getElementById("back").addEventListener("click",back)
document.getElementById("point").addEventListener("click",point)
document.getElementById("plus").addEventListener("click",plus)
document.getElementById("minus").addEventListener("click",minus)
document.getElementById("multiply").addEventListener("click",multiply)
document.getElementById("divide").addEventListener("click",divide)
document.getElementById("equal").addEventListener("click",equal)
document.getElementById("plus_minus").addEventListener("click",plus_minus)
document.getElementById("percent").addEventListener("click",percent)

// refresh
function ac(){
    window.location.reload()
}

// enter number from 0-9
function zero_num(){
    if (eqn.length<max_length){
        eqn.push(0)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("zero").removeEventListener("click",zero_num)
        }
}

function one_num(){
    if (eqn.length<max_length){
        eqn.push(1)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("one").removeEventListener("click",one_num)
        }
}


function two_num(){
    if (eqn.length<max_length){
        eqn.push(2)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("two").removeEventListener("click",two_num)
        }
}


function three_num(){
    if (eqn.length<max_length){
        eqn.push(3)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("three").removeEventListener("click",three_num)
        }
}


function four_num(){
    if (eqn.length<max_length){
        eqn.push(4)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("four").removeEventListener("click",four_num)
        }
}


function five_num(){
    if (eqn.length<max_length){
        eqn.push(5)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("five").removeEventListener("click",five_num)
        }
}


function six_num(){
    if (eqn.length<max_length){
        eqn.push(6)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("six").removeEventListener("click",six_num)
        }
}


function seven_num(){
    if (eqn.length<max_length){
        eqn.push(7)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("seven").removeEventListener("click",seven_num)
        }
}


function eight_num(){
    if (eqn.length<max_length){
        eqn.push(8)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("eight").removeEventListener("click",eight_num)
        }
}


function nine_num(){
    if (eqn.length<max_length){
        eqn.push(9)
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
        document.getElementById("nine").removeEventListener("click",nine_num)
        }
}

// add decimal point
function point(){
    if (eqn.length<max_length){
        eqn.push(".")
        document.getElementById("container").innerHTML=eqn.join("")
        }
    else{
        document.getElementById("point").removeEventListener("click",point)
    }
}

// turn last number entered into a negative value
function plus_minus(){
    // adding negative(-) after the last operation
    if (eqn.length<max_length){
        if (operation===null){
            eqn.unshift("-")
        }
        else if (operation==="+"){
            eqn.splice(eqn.indexOf("+")+1,0,"-")
        }
        else if (operation==="x"){
            eqn.splice(eqn.indexOf("x")+1,0,"-")
        }
        else if (operation==="÷"){
            eqn.splice(eqn.indexOf("÷")+1,0,"-")
        }
        else if (operation==="/100"){
            eqn.splice(eqn.indexOf("/100")+1,0,"-")
        }
        else if (operation==="-"){
            eqn.splice(eqn.lastIndexOf("-")+1,0,"-")
        }
        document.getElementById("container").innerHTML=eqn.join("")
    }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
    }
}

// divide previous number bby 100
function percent(){
    if (eqn.length<max_length){
        operation="%"
        eqn.push(operation)
        document.getElementById("container").innerHTML=eqn.join("")
    }
    else{
        alert(`Reached the maximum number of digits (${max_length})`)
    }
}
function plus(){
    // if the last digit is not a number or,delete the last item in eqn
    operation="+"
    eqn.push(operation)
    document.getElementById("container").innerHTML=eqn.join("")
}
function minus(){
    operation="-"
    eqn.push(operation)
    document.getElementById("container").innerHTML=eqn.join("")
}
function multiply(){
    operation="x"
    eqn.push(operation)
    document.getElementById("container").innerHTML=eqn.join("")
}
function divide(){
    operation="÷"
    eqn.push(operation)
    document.getElementById("container").innerHTML=eqn.join("")
    
}

// delete last character entered
function back(){
    eqn.pop()
    document.getElementById("container").innerHTML=eqn.join("")
}

// calculate result
function equal(){
    // change x and ÷ to * and / so that stringMath function will work
    if (eqn.includes("x")){
        eqn[eqn.indexOf("x")]="*"
    }
    if (eqn.includes("÷")){
        eqn[eqn.indexOf("÷")]="/"
    }
    if (eqn.includes("%")){
        eqn[eqn.indexOf("%")]="/100"
    }
    // if the last element in the equation is . , add 0 at the end of eqn array
    if (eqn[eqn.length-1]==="."){
        eqn.push(0)
    }
    try{
        // calculate result using imported stringMath function and convert float result to 5 decimal point
        let result=parseFloat(stringMath(eqn.join("")).toFixed(5))
        // display result 
        document.getElementById("container").innerHTML=result
        eqn=[result]
    }
    catch(err){
        // throw Syntax Error alert when user entered invalid math equation
        alert("Syntax Error")
        window.location.reload()
    }
}

// copied from https://github.com/devrafalko/string-math/blob/master/string-math.js
function stringMath(eq, callback) {
    if (typeof eq !== 'string') return handleCallback(new TypeError('The [String] argument is expected.'), null);
    const mulDiv = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
    const plusMin = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
    const parentheses = /(\d)?\s*\(([^()]*)\)\s*/;
    var current;
    while (eq.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/) === -1) {
    eq = fParentheses(eq);
    if (eq === current) return handleCallback(new SyntaxError('The equation is invalid.'), null);
    current = eq;
    }
    return handleCallback(null, +eq);

    function fParentheses(eq) {
    while (eq.search(parentheses) !== -1) {
        eq = eq.replace(parentheses, function (a, b, c) {
        c = fMulDiv(c);
        c = fPlusMin(c);
        return typeof b === 'string' ? b + '*' + c : c;
        });
    }
    eq = fMulDiv(eq);
    eq = fPlusMin(eq);
    return eq;
    }

    function fMulDiv(eq) {
    while (eq.search(mulDiv) !== -1) {
        eq = eq.replace(mulDiv, function (a) {
        const sides = mulDiv.exec(a);
        const result = sides[2] === '*' ? sides[1] * sides[3] : sides[1] / sides[3];
        return result >= 0 ? '+' + result : result;
        });
    }
    return eq;
    }

    function fPlusMin(eq) {
    eq = eq.replace(/([+-])([+-])(\d|\.)/g, function (a, b, c, d) { return (b === c ? '+' : '-') + d; });
    while (eq.search(plusMin) !== -1) {
        eq = eq.replace(plusMin, function (a) {
        const sides = plusMin.exec(a);
        return sides[2] === '+' ? +sides[1] + +sides[3] : sides[1] - sides[3];
        });
    }
    return eq;
    }

    function handleCallback(errObject, result) {
    if (typeof callback !== 'function') {
        if (errObject !== null) throw errObject;
    } else {
        callback(errObject, result);
    }
    return result;

    }

}

