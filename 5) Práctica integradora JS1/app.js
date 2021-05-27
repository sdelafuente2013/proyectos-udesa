if (confirm("Hola, ¿Le gustaria comenzar?")) {
    let cantidadFamiliares = Number(prompt("¿Cantidad de integrantes familiares?"));
    if (cantidadFamiliares > 2 && !isNaN(cantidadFamiliares)) {
        for (let index = 0; index < cantidadFamiliares; index++) {
            let nombres = [];
            let gastos = [];
            let ingresoNombre = prompt("¿Cual es su nombre?");
            let ingresoGasto = Number(prompt("Indique su gasto:"))
            if (ingresoNombre !== "" && ingresoGasto !== "" && !isNaN(ingresoGasto)) {
                nombres.push(ingresoNombre);
                gastos.push(ingresoGasto);
            }
            console.log(nombres)
            console.log(gastos)

        }
    } else {
        alert("El valor necesario es un número mayor a 2!");
        window.location.reload();
    }

} else {
    alert("Gracias por haber venido");
    window.location.href = "https://netflix.com";
}