const soma = (pNum1, pNum2) => pNum1+pNum2;
const subtracao = (pNum1, pNum2) => pNum1-pNum2;
const multiplicacao = (pNum1, pNum2) => pNum1*pNum2;
const divisao = (pNum1, pNum2) => (pNum2 !== 0 ? pNum1/pNum2 : "Divisão por 0 é impossivel de ser feita!!!");

function calculadora(){
    let continuar = true;

    while(continuar){

        console.log("Escolha uma opção:\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Sair ");

        const escolha = prompt("Digite o número da opção desejada: ");

        if(escolha === "5"){
            console.log("Saindo da calculadora...")
            continuar = false;
            break;
        }

        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));

        let resultado;

        switch(escolha){
            case "1":
                resultado = soma(num1,num2);
                console.log("Resultado da Soma: " + resultado);
                break;
            case "2":
                resultado = subtracao(num1,num2);
                console.log("Resultado da Subtração: " + resultado);
                break;
            case "3":
                resultado = multiplicacao(num1,num2);
                console.log("Resultado da Multiplicação: " + resultado);
                break;
            case "4":
                resultado = divisao(num1,num2);
                console.log(`Resultado da Divisão: ${resultado}`);
                break;
            default:
                console.log("Opção inválida!!!");
                break;
        }

    }
}

calculadora();