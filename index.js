
let home = 0
let guest = 0



function plusOne() {
    home += 1
    document.getElementById("home-score").textContent = home

}

function plusTwo() {
    home += 2
    document.getElementById("home-score").textContent = home
}

function plusThree () {
    home += 3
    document.getElementById("home-score").textContent = home 
}

function plus1() {
    guest += 1
    document.getElementById("guest-score").textContent = guest 

}

function plus2() {
    guest += 2
    document.getElementById("guest-score").textContent = guest 

}

function plus3() {
    guest += 3
    document.getElementById("guest-score").textContent = guest 

}

function newGame() {
    home = 0
    guest = 0
    document.getElementById("guest-score").textContent = guest
    document.getElementById("home-score").textContent = home
}