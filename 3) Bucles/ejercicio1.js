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
    resultados.push(base*index);   
};

console.log(resultados);



// 3) 

let ganancia = [1,2,3,4,5,6,7,8,9,10];
let sumaTotal = 0;
for (let index = 0; index < ganancia.length; index++) {
    sumaTotal += ganancia[index]    
}
