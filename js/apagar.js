//definindo aqui as variaveis de entrada

let entradaValor01 = document.getElementById('valor1');
let entradaValor02 = document.getElementById('valor2');
let recebeResultado;

//define a operação a ser executada
let operacao = document.getElementById('operadoresCalc');

//Função da calculadora
switch (operacao) {
        case "soma":
            recebeResultado = entradaValor01 + entradaValor02;
            break;
        case "subtracao":
                recebeResultado = entradaValor01 - entradaValor02;
                break;
        case "divisao":
                recebeResultado = entradaValor01 / entradaValor02;
                break;
        case "multiplicacao":
                recebeResultado = entradaValor01 * entradaValor02;
                break;
        default:
                break
                }    
console.log(recebeResultado)