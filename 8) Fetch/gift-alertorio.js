const api = "https://api.giphy.com/v1/gifs/random?api_key=TODGcHMiJLMasqHCEIVKuExBvcx8fIpM&tag=&rating=g"
fetch(api)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        console.log(datos)
        document.querySelector(".imagen").innerHTML = ` <img src="${datos.data.image_url}" >`
    })
    .catch(function(error){
        console.log("El error fue: " + error);
    })