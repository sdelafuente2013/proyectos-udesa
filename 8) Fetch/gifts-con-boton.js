window.addEventListener("load", function () {
    const api = "https://api.giphy.com/v1/gifs/trending?api_key=TODGcHMiJLMasqHCEIVKuExBvcx8fIpM&limit=25&rating=g";
    let boton = document.querySelector(".boton")
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos)

            boton.addEventListener("click", function () {
                document.querySelector(".imagenRandom").innerHTML = `<img src="${datos.data[Math.floor(Math.random()*26)].images.original.url}" >`
            })
        })
        .catch(function (error) {
            console.log("El error fue: " + error);
        })
})