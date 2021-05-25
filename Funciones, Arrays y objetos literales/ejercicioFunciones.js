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

// 6) 

function saberCantidadPalabra(palabra){
    let contador = 0;
    for (let index = 0; index < palabra.length; index++) {
        if (palabra[index] !== " "){
            contador++;
        };
    }
    return `La cantidad de palabras es: ${contador}`;
}

// 7) 

function pesosAdolares(precio) {
    const dolares = 94.22;
    return `El resultado de la conversion de ARG $${precio} a USD es: ${precio/dolares}USD`;
}

// 8)

function precioMasIva(precio) {
    const IVA = 21;
    return `El resultado del precio mas IVA 21% es: ${precio*21/100+precio}`;
}

// 9)

function mitad(numero) {
    return `La mitad del numero (${numero}) es: ${numero/2}`
}


