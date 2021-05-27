// 3)
let nombre = prompt("¿Cual es su nombre?");
console.log(nombre);

let edad = Number(prompt("¿Cual es su edad?"));
console.log(edad);

let fanDeportes = confirm("¿Te gustan los deportes?");

alert(`Muchas gracias ${nombre} por responder nuestras preguntas`)

let persona = {
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function () {
        if (fanDeportes && edad >= 18) {
            console.log("Si soy fan de los deportes");
        } else {
            console.log("No soy tan fan aún de los deportes");
        }
    }
}