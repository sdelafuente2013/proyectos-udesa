// 1) Vamos a declarar algunas variables.
let nombre;
let apellido;
let edad;

// 2) Vamos a asignar algunos datos.
nombre = "Santiago";
apellido = "de la Fuente";
edad = 24;

// 3) Ahora vamos a declarar y asignar en la misma línea.
let nombreCompleto = `${nombre} ${apellido}`;

// 4) Ahora intentemos con arrays.
let pelisFavoritas = ["Ford v Ferrari", "Midnight Family", "Shadow", "Lost Bullet", "Promare"];

// A-
let arrayA = [
    ["hola", "mundo"],
    ["hola", "todo", "el", "mundo"]
];

// B-
let frutas = ["Banana", "Naranja", "Limon", "Manzana", "Mango"];
let citricos = [frutas[1], frutas[2]]; //Naranja Limon 

// C-
console.log(frutas.length);

// D-
frutas.push("Frutilla");
frutas.push("Melon");
console.log(frutas.length);

// E-
console.log([].length);
console.log([2, 11, 17, 32, 36, 39].length);
console.log("lalalala".length);

// F- 
let arbolGenealogico = [
    ["Francisco", "Eusebio", "Casilda", "Castora"],
    [],
    ["Miguel", "Pablo", "Maria"],
    []
];

//insertar a los padres
arbolGenealogico[1].push("Nestor");
arbolGenealogico[1].push("Celia");
arbolGenealogico[1].push("Diego");

//insertar a los nietos
arbolGenealogico[3].push("Mia");
arbolGenealogico[3].push("Melanie");
arbolGenealogico[3].push("Matias");

//cantidad de abuelos, padres, hijos y nietos
console.log(`La cantidad de abuelos es: ${arbolGenealogico[0].length}`);
console.log(`La cantidad de padres es: ${arbolGenealogico[1].length}`);
console.log(`La cantidad de hijos es: ${arbolGenealogico[2].length}`);
console.log(`La cantidad de nietos es: ${arbolGenealogico[3].length}`);

//primer abuelo, padre, hijo y nieto
console.log(`El primer abuelo es: ${arbolGenealogico[0][0]}`);
console.log(`El primer padre es: ${arbolGenealogico[1][0]}`);
console.log(`El primer hijo es: ${arbolGenealogico[2][0]}`);
console.log(`El primer nieto es: ${arbolGenealogico[3][0]}`);