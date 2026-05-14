let a = Number(prompt("A - Digite o 1º número: "));
let b = Number(prompt("B - Digite o 2º número: "));

// Variável C preserva o valor de A
let c = a

// Troca de valores
a = b
b = c

alert("Valor de A: " + a + "\nValor de B: " + b);