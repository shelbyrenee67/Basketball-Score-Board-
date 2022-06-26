
let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")

let score = 0

function plusOne() {
    score += 1
    num1.textContent = score 

}

function plusTwo() {
    score += 2
    num1.textContent = score 
}

function plusThree () {
    score += 3
    num1.textContent = score 
}

function plus1() {
    score += 1
    num2.textContent = score 

}

function plus2() {
    score += 2
    num2.textContent = score 

}

function plus3() {
    score += 3
    num2.textContent = score 

}