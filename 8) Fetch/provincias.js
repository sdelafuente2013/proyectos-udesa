fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(function (response) {
        return response.json()
    })
    .then(function (datos) {
        console.log(datos)
        // console.log("La cantidad de provincias es: " + datos.cantidad)
        // console.log("La primer provincia es: " + datos.provincias[0].nombre)
        // console.log("La primer provincia es: " + datos.provincias[1].nombre)
        for (let index = 0; index < datos.provincias.length; index++) {
            // console.log("provincia es: " + datos.provincias[index].nombre)
            document.querySelector(".lista").innerHTML += `<li>La provincia es: ${datos.provincias[index].nombre}</li>`
        }

    })
    .catch(function (error) {
        console.log("El error fue: " + error);
    })