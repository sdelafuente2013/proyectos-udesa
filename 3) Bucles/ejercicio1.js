// 1) 

//A-
for (let index = 0; index < 5; index++) {
    console.log("Practicando con el bucle for");
};

//B-
for (let i = 0; i < 10; i++) {
    console.log(`La variable ${i} tiene el valor ${i}`);
};

//C- i
for (let index = 0; index < 20; index += 2) {
    console.log(`Multiplo ${index}° de 2 es: ${index}`);
};

//C- ii
for (let index = 0; index < 105; index += 5) {
    console.log(`Multiplo ${index}° de 5 es: ${index}`);
};

//D
for (let index = 100; index >= 0; index--) {
    console.log(index)
}


// 2)

let base = 2;
let resultados = [];

for (let index = 1; index <= 10; index++) {
    resultados.push(base * index);
};

console.log(resultados);



// 3) 
let ganancia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaTotal = 0;
for (let index = 0; index < ganancia.length; index++) {
    sumaTotal += ganancia[index]
};


// 4)) 
let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

// A-
for (let index = 0; index < healingIsDifficult.length; index++) {
    console.log(healingIsDifficult[index]);
};

// B- 
for (let index = 0; index < healingIsDifficult.length; index++) {
    console.log(`${index}-${healingIsDifficult[index]} `);
};


// 5)
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19,
        ciudad: "TheRed in Paez"
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

// A-
for (let index = 0; index < got.length; index++) {
    console.log (`Hola ${got[index].nombre} ${got[index].apellido} criatura viajera!`)
    
}

// B-
for (let index = 0; index < got.length; index++) {
    console.log (`Soy ${got[index].nombre} ${got[index].apellido} de la ciudad ${got[index].ciudad} `)
    
}
