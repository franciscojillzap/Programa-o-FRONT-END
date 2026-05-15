function mostrar_promocao() {
    // Cria referência aos elementos manipulados pelo programa
    let inVeiculo = document.getElementById("inVeiculo");
    let inPreco = document.getElementById("inPreco");
    let outVeiculo = document.getElementById("outVeiculo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcela = document.getElementById("outParcela");
    
    // Obtém conteúdo dos campos de entrada
    let veiculo = inVeiculo.value;
    let preco = Number(inPreco.value);
    
    // Calcula valor de entrada e das parcelas
    let entrada = preco * 0.50;
    let parcela = (preco * 0.50) / 12;
    
    // Altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

// Cria uma referência ao elemento btVerPromocao (botão)
let btVerPromocao = document.getElementById("btVerPromocao");

// Registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrar_promocao);