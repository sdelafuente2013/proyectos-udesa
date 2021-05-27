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

    let caja1 = document.querySelector("#box1")
    let caja2 = document.querySelector("#box2")
    let caja3 = document.querySelector("#box3")

    caja1.addEventListener("click", function(){
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });

    caja2.addEventListener("click", function(){
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });

    caja3.addEventListener("click", function(){
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });
})