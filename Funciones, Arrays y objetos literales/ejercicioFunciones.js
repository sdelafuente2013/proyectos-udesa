// 1) Funcion para calcular el area de un cuadrado

function calcularAreaCuadrado(altura, ancho) {
    return `El area del cuadrado es: ${altura * ancho}`;
};

// 2) Funcion para calcular el area de un circulo
const PI = 3.14;

function calcularAreaCirculo(radio, PI) {
    return `El area del circulo es: ${PI * radio ** 2}`;
}

// 3) Funcion que recibe un array de numeros y devuelve el promedio
const listaNumeros = [1, 2, 3, 4, 5]

function promedioCincoNumeros(listaNumeros) {
    let promedio = 0;
    for (let index = 0; index < 5; index++) {
        promedio += listaNumeros[index];
    }
    promedio /= 5;
    return `El promedio de la lista de numeros es: ${promedio}`;
}

// 4) Funcion que recibe un array y retorna la cantidad de elementos que contiene

const diasSemanales = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

function cantidadElementos(diasSemanales) {
    return diasSemanales.length;
};

// 5) Funcion que recibe un array y retorna la posicion "Miercoles" del array diasSemanales
const diasSemanales2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

function buscarMiercoles(diasSemanales) {
    for (let index = 0; index < diasSemanales.length; index++) {
        if (diasSemanales[index] === "Miercoles") {
            return index;
        };
    };
};