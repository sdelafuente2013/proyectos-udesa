window.addEventListener("load", function () {

    //Capture los dos elemntos de mi HTML
    let tituloMasImagenes = document.querySelector(".imagenes"); //capturo el H1 que tiene la clase ".titulo"

    let cantidadImagenes = parseInt(prompt("¿Cantidad de imagenes a mostrar?")) //5

    //Conecto la API 
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=TODGcHMiJLMasqHCEIVKuExBvcx8fIpM&limit=25&rating=g")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (let index = 0; index < cantidadImagenes; index++) {
                tituloMasImagenes.innerHTML +=
                `
                                    <li><h3> ${data.data[index].title}</h3>
                                    <img src="${data.data[index].images.original.url}" alt="GIF ALERTORIO"></li>
                `
            }
        })
        .catch(function (error) {
            console.log("El error fue: " + error);
        })


})