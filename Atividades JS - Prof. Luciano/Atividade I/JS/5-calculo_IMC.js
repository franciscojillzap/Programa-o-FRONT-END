let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("Digite sua altura: "));

let imc = Math.round(peso / (altura * altura))

alert("Seu IMC é de: " + imc);