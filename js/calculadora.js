function operacao() {
    //definindo aqui as variaveis de entrada
    let entradaValor01 = parseInt(document.getElementById("valor1").value);
    let entradaValor02 = parseInt(document.getElementById("valor2").value);
    let recebeResultado = null;

    //define a operação a ser executada
    let operacao = document.getElementById("operadoresCalc").value;

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
                                                recebeResultado = "&#9785;";
                                                break
                                        }    
                                        //Imprime o valor no html
                                        //mudei awui para usar imprimir no código no HTML e exibir smiles
                                        //Document.querySelector("#resultaOperacao").textContent = recebeResultado;
                                        document.querySelector("#resultaOperacao").innerHTML = recebeResultado;
                                        document.getElementById("valor1").value = "";
                                        document.getElementById("valor2").value = "";
                                } 