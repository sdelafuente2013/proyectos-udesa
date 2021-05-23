// 1)

function calcularAreaCuadrado(altura, ancho) {
    return `El area del cuadrado es: ${altura * ancho}`;
};

// 2)
const PI = 3.14;

function calcularAreaCirculo(radio, PI) {
    return `El area del circulo es: ${PI * radio ** 2}`;
}

// 3)
const listaNumeros = [1,2,3,4,5]
function promedioCincoNumeros(listaNumeros) {
    let promedio = 0;
    for (let index = 0; index < 5; index++) {
        promedio += listaNumeros[index];          
    }
    promedio /= 5;
    return `El promedio de la lista de 5 numeros es: ${promedio}`;
}