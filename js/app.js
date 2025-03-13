const $mortageInput = document.querySelector(".mortage-amount-input")
const $mortageTermInput = document.querySelector(".mortage-term-input")
const $mortageInterestInput = document.querySelector(".interest-rate-input")
const $submit = document.querySelector(".submit")


let results;


console.log($submit)

$submit.addEventListener("click", (e) => {
    e.preventDefault()
    let m = $mortageTermInput.value * 12
    let p = $mortageInput.value
    let i = $mortageInterestInput.value

    console.log( p * i * (Math.pow(1 + i, m)) / (Math.pow(1 + i, m) - 1))

})


var M; //monthly mortgage payment
var P = 400000; //principle / initial amount borrowed
var I = 3.5 / 100 / 12; //monthly interest rate
var N = 30 * 12; //number of payments months

//monthly mortgage payment
M = monthlyPaymente(P, N, I);

console.log(M);

function monthlyPaymente(p, n, i) {
  return Math.floor( p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
}