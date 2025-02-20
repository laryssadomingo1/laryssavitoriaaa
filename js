imc.js:
function calcularIMC() {
    // Obter os valores inseridos pelo usuário
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    // Validar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    // Calcular o IMC
    var imc = peso / (altura * altura);
    // Determinar a classificação com base no IMC
    var classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    // Exibir o IMC e a classificação
  
  calculadora.js 
    function executarCalculo() {
    // Obtém os valores inseridos nos campos
    const primeiroNumero = Number(document.querySelector('#num1').value);
    const segundoNumero = Number(document.querySelector('#num2').value);
    const operacaoEscolhida = document.querySelector('#operacao').value;
    let resultadoCalculado;
    // Verifica se os números inseridos são válidos
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        resultadoCalculado = 'Por favor, insira números válidos.';
    } else {
        // Realiza a operação escolhida
        switch (operacaoEscolhida) {
            case 'adicao':
                resultadoCalculado = primeiroNumero + segundoNumero;
                break;
            case 'subtracao':
                resultadoCalculado = primeiroNumero - segundoNumero;
                break;
            case 'multiplicacao':
                resultadoCalculado = primeiroNumero * segundoNumero;
                break;
            case 'divisao':
                if (segundoNumero === 0) {
                    resultadoCalculado = 'Não é possível dividir por zero!';
                } else {
                    resultadoCalculado = primeiroNumero / segundoNumero;
                    if (segundoNumero === 1) {
                        resultadoCalculado = 'Dividir por 1 não altera o valor!';
                    }
                }
                break;
            default:
                resultadoCalculado = 'Operação desconhecida.';
        }
    }
    // Exibe o resultado no elemento de ID "resultadoCalculadora"
    document.querySelector('#resultadoCalculadora').textContent = Resultado: ${resultadoCalculado};
}
  conversores.js
  // Função principal para executar a conversão baseada na opção selecionada
function realizarConversao() {
    // Captura o valor informado no campo de entrada e converte para número.
    const entrada = parseFloat(document.querySelector('#entrada').value);
    // Captura a opção de conversão escolhida no dropdown.
    const opcaoConversao = document.querySelector('#opcaoConversao').value;
    // Variável que armazenará o resultado final da conversão.
    let resultadoFinal;
    // Checa se o valor informado é um número válido.
    if (isNaN(entrada)) {
        resultadoFinal = 'Por favor, insira um valor numérico válido.';
    } else {
        // Dependendo da opção selecionada, realiza a conversão adequada.
        if (opcaoConversao === 'temp') {
            // Converte de Celsius para Fahrenheit.
            resultadoFinal = (entrada * 9 / 5) + 32;
            resultadoFinal = ${entrada}°C correspondem a ${resultadoFinal.toFixed(2)}°F.;
        } else if (opcaoConversao === 'comprimento') {
            // Converte de metros para centímetros.
            resultadoFinal = entrada * 100;
            resultadoFinal = ${entrada} metros são equivalentes a ${resultadoFinal.toFixed(2)} centímetros.;
        } else if (opcaoConversao === 'peso') {
            // Converte de quilogramas para libras.
            resultadoFinal = entrada * 2.20462;
            resultadoFinal = ${entrada} kg equivalem a ${resultadoFinal.toFixed(2)} libras.;
        } else {
            // Se a opção de conversão não for válida, exibe uma mensagem de erro.
            resultadoFinal = 'Opção de conversão não reconhecida.';
        }
    }
    // Atualiza o conteúdo do elemento com o ID "resultadoFinal" com o resultado da conversão.
    document.querySelector('#resultadoFinal').textContent = resultadoFinal;
}
   
