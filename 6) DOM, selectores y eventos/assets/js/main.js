window.addEventListener("load", function () {
    let botonAbracadabra = document.querySelector("#abracadabra");
    botonAbracadabra.addEventListener("click", function(){
        let nombre = prompt("¿Cual es su nombre?");
        document.querySelector("#titular").innerHTML = `Hi, I’m <strong>${nombre}</strong>`;
    });
    let boton2 = document.querySelector("#boton2");
    boton2.addEventListener("dblclick", function(e){
        e.preventDefault();
        document.querySelector(".parrafo-color-2").style.color = colorAlAzar();
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

    let boton1 = document.querySelector("#boton1");

    boton1.addEventListener("mouseover", function(e){
        e.preventDefault();
        document.querySelector(".parrafo-color-1").style.color = colorAlAzar();
    });

    boton1.addEventListener("mouseout", function(){
        // e.preventDefault();
        document.querySelector(".parrafo-color-1").style.color = "#888"
    })
})