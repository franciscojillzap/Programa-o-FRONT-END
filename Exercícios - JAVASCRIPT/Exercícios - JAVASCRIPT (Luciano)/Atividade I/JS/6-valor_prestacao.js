let valor = Number(prompt("Valor da prestação: "));
let taxa = Number(prompt("Valor da taxa de juros: "));
let tempo = Number(prompt("Tempo do atraso: "));

let prestacao = valor + (valor * (taxa/100) * tempo)

// Arredonda e fixa um valor com até duas casas decimais
prestacao.toFixed(2);

alert("Quantidade a pagar: " + prestacao);