let numeroElegido = Number(prompt("Ingrese un numero del 1 al 100: "));
let numeroElegido2 = Number(prompt("Ingrese otro numero del 1 al 100: "));
let resultado = numeroElegido + numeroElegido2;

if(numeroElegido !== numeroElegido2){
    console.log(`El resultado de la suma es: ${resultado}`);
}else if(numeroElegido === "" || numeroElegido2 === "" || numeroElegido === numeroElegido2){
    console.log("Los numeros no pueden ser iguales o no pueden estar vacios")
}