/*let numero = prompt("Informe o número para tabuada: ");

console.log("Tabuada do", numero);

for(let i = 1; i <= 10; i++){
    console.log(i + "*" + numero + "=" + numero*i);
}*/

/*let numero = prompt("Informe o número para tabuada: ");

console.log("Tabuada do", numero);

let contador = 1;

//console.log("Contagem do While");

/*while(contador <= 10){
    console.log(numero + "*" + contador + "=" + numero*contador);
    contador++;
}*/

/*contador = 6
console.log("Contagem do Do While");*/
/*do{
    console.log(numero + "*" + contador + "=" + numero*contador);
    contador++;
}while(contador <= 10)*/

let numero = prompt("Digite o numero para verificar se seus antecessores são pares ou impares: ")

let contador = 1;

while(contador <= numero){
    let texto = "";
    if(contador%2 == 0){
        texto = "par"
    }
    else{
        texto = "impar"
    }
    console.log("O número " + contador + " é " + texto + ".")
    contador++;
}