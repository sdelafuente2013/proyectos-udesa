if (confirm("Hola, ¿Le gustaria comenzar?")) {
    let cantidadFamiliares = Number(prompt("¿Cantidad de integrantes familiares?"));
    if (cantidadFamiliares > 2 && !isNaN(cantidadFamiliares)) {
        let nombres = [];
        let gastos = [];
        let integrantes = [];
        let gastoTotal = 0;
        for (let index = 0; index < cantidadFamiliares; index++) {

            //validamos que no sea un campo vacio
            let ingresoNombre = prompt("¿Cual es su nombre?");
            if (ingresoNombre !== "") {
                nombres.push(ingresoNombre);
            } else {
                alert("El valor ingresado tiene que ser un numero");
                window.location.reload();
                break;
            }

            //validamos que sea un numero y no sea un campo vacio
            let ingresoGasto = Number(prompt("Indique su gasto:"))
            if (ingresoGasto !== "" && !isNaN(ingresoGasto) && ingresoGasto !== 0) {
                gastos.push(ingresoGasto);
            } else {
                alert("El valor ingresado tiene que ser un numero");
                window.location.reload();
                break;
            }
        }

        for (let index = 0; index < nombres.length; index++) {
            integrantes.push({
                nombre: nombres[index],
                gasto: gastos[index]
            })
        };

        console.log(integrantes);

        for (let index = 0; index < integrantes.length; index++) {
            console.log(`El gasto de ${integrantes[index].nombre} es: ${integrantes[index].gasto}`);
            gastoTotal += integrantes[index].gasto;
        };

        console.log(`El gasto de toda la familia es: ${gastoTotal}`)
        if (gastoTotal > 1000) {
            alert("Debemos pedir un préstamo")
        }

        console.log(`El promedio del gasto del dia es: ${gastoTotal/integrantes.length}`)
        if (gastoTotal / integrantes.length < 500) {
            alert("¡Festejamos!")
        }
    } else {
        alert("El valor necesario es un número mayor a 2!");
        window.location.reload();
    }

} else {
    alert("Gracias por haber venido");
    window.location.href = "https://netflix.com";
}