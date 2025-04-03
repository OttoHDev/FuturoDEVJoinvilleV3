
//Variaveis
let opcao;

console.log("CALCULADORA FUTURODEV")

do{
    console.log("[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Sair ");
    opcao = prompt("Escolha a Opção desejada: ")

    switch(opcao){
        case "1":
            Soma();
            break;
        case "2":
            Subtacao();
            break;
        case "3":
            Multiplicacao();
            break;
        case "4": 
            Divisao()
            break;
        case "5":
            console.log("Finalizando aplicação...");
            break;
        default:
            console.log("Opção inválida!!!");
    }
}while(opcao != 5);


function Soma(){
    let num1 = parseInt(prompt("Digite o primeiro numero da soma(+): "));
    let num2 = parseInt(prompt("Digite o segundo numero da soma(+): "));

    console.log(num1 + "+" + num2 + "="+ (num1+num2) );
}

function Subtacao(){
    let num1 = parseInt(prompt("Digite o primeiro numero da subtação(-): "));
    let num2 = parseInt(prompt("Digite o segundo numero da subtação(-): "));

    console.log(num1 + "-" + num2 + "="+ (num1-num2) );
}

function Multiplicacao(){
    let num1 = parseInt(prompt("Digite o primeiro numero da multiplicação(x): "));
    let num2 = parseInt(prompt("Digite o segundo numero da multiplicação(x): "));

    console.log(num1 + "x" + num2 + "="+ (num1*num2) );
}

function Divisao(){
    let num1 = parseInt(prompt("Digite o primeiro numero da divisão(/): "));
    
    let num2 = 0;

    do{
        num2 = parseInt(prompt("Digite o segundo numero da divisão(/): "));
    
        if(num2 == 0){
            console.log("Impossivel realizar a divisão por zero, escolha outro numero!")
        }

    }while(num2 == 0);

    
    console.log(num1 + "/" + num2 + "="+ (num1/num2) );
}