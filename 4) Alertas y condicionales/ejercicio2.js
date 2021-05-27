// 2)

let numeroElegido = Number(prompt("Ingrese un numero del 1 al 100: "));
let numeroElegido2 = Number(prompt("Ingrese otro numero del 1 al 100: "));
let resultado = numeroElegido + numeroElegido2;

if (numeroElegido !== numeroElegido2 && numeroElegido !== "" && numeroElegido2 !== "") {
    if (resultado < 10) {
        console.log(`La suma de tus números es ${resultado} y es menor a 10 `);
    } else if (resultado > 10 && resultado < 20) {
        console.log("Bien pasaste");
    } else {
        console.log("Te zarpaste");
    };

}