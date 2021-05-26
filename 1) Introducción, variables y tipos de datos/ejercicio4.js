//Defini dos variables y les asigne valores
let numeroA = 30;
let numeroB = 45;

//muestro por consola sus respectivos valores
console.log(numeroA) // me dara 30
console.log(numeroB) // me dara 45

//Ahora defino que "numeroA" tenga el valor de "numeroB" y viceversa
numeroA = numeroB;
numeroB = numeroA;

//imprimi para ver los resultados
console.log(numeroA) //me dara 45
console.log(numeroB) //me dara 45