window.addEventListener("load", function () {
    let botonAbracadabra = document.querySelector("#abracadabra");
    botonAbracadabra.addEventListener("click", function(){
        let nombre = prompt("¿Cual es su nombre?");
        document.querySelector("#titular").innerHTML = `Hi, I’m <strong>${nombre}</strong>`;
    });
    let botonGetInTouch = document.querySelector("#probando");
    botonGetInTouch.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".parrafo-color").style.color = colorAlAzar();
    });

    function colorAlAzar() {
        let coloresAzar = ["Blue", "Red", "Yellow", "Green", "Gray"]
        return coloresAzar[Math.floor(Math.random()*coloresAzar.length)]
    }

})