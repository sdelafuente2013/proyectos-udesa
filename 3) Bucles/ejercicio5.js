// 5)
let got = [{
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
console.log(`Hola ${got[index].nombre} ${got[index].apellido} criatura viajera!`)

}

// B-
for (let index = 0; index < got.length; index++) {
console.log(`Soy ${got[index].nombre} ${got[index].apellido} de la ciudad ${got[index].ciudad} `)

}