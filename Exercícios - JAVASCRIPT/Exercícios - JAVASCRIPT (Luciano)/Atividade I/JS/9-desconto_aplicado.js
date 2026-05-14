let preco = Number(prompt("Digite o preço de um produto: "));

let desconto = preco - (preco * (12/100))

desconto.toFixed(2);

alert("Preço com desconto: " + desconto);