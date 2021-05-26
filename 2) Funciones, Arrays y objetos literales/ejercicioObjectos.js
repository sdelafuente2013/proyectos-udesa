// 1)

let misDatos = {
    nombre: "Santiago",
    apellido: "de la Fuente",
    dni: "45615661",
    comidaFavorita: "Pizza Italiana",
    edad: 24,

    saludar: function () {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
};

//imprimi el metodo "saludar()" de mi objeto "misDatos"
console.log(misDatos.saludar());

// creamos un objeto ("auto")
let auto = {};

// le asignamos atributos a mi objeto creado ("auto")
auto.marca = "Ford"
auto.modelo = "Focus";
auto.anio = 2021;
auto.color = "Azul";
auto.posicion = "parado";

//le asignamos metodos a mi objeto creado ("auto")
auto.avanzar = function () {
    this.posicion = "en marcha, avanzando..."
};

auto.retroceder = function () {
    this.posicion = "retrocediendo.."
};

auto.moverse = function (pasos) {
    if (pasos > 0) {
        this.posicion = `Avanzó ${pasos} pasos el auto..`
    } else {
        this.posicion = `Retrocedió ${pasos} pasos el auto..`
    }
};

// 4)  

let ironMan = {
    //propiedades
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,

    //metodos
    getPoder: function (numeroPoder = Math.floor(Math.random() * 3)) {
        console.log(`Usted eligio el poder: ${this.poderes[numeroPoder]}`)
        this.energia -= 10
        console.log(`Le queda ${this.energia} de energia`)
    }
};

let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,

    getPoder: function (numeroPoder = Math.floor(Math.random() * 3)) {
        console.log(`Usted eligio el poder: ${this.poderes[numeroPoder]}`)
        this.energia -= 10
        console.log(`Le queda ${this.energia} de energia`)
    }
};