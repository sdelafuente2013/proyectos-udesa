window.addEventListener("load", function () {
    let botonAbracadabra = document.querySelector("#abracadabra");
    botonAbracadabra.addEventListener("click", function () {
        let nombre = prompt("¿Cual es su nombre?");
        document.querySelector("#titular").innerHTML = `Hi, I’m <strong>${nombre}</strong>`;
    });
    let boton2 = document.querySelector("#boton2");
    boton2.addEventListener("dblclick", function (e) {
        e.preventDefault();
        document.querySelector(".parrafo-color-2").style.color = colorAlAzar();
    });

    function colorAlAzar() {
        let coloresAzar = ["Blue", "Red", "Yellow", "Green", "Gray"]
        return coloresAzar[Math.floor(Math.random() * coloresAzar.length)]
    }

    let caja1 = document.querySelector("#box1")
    let caja2 = document.querySelector("#box2")
    let caja3 = document.querySelector("#box3")

    caja1.addEventListener("click", function () {
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });

    caja2.addEventListener("click", function () {
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });

    caja3.addEventListener("click", function () {
        alert(`Clickeaste sobre ${this.querySelector("h3").innerHTML}`)
    });

    let boton1 = document.querySelector("#boton1");

    boton1.addEventListener("mouseover", function (e) {
        e.preventDefault();
        document.querySelector(".parrafo-color-1").style.color = colorAlAzar();
    });

    boton1.addEventListener("mouseout", function () {
        document.querySelector(".parrafo-color-1").style.color = "#888"
    })

    let lechuza = document.querySelector("#lechuza")

    lechuza.addEventListener("click", function () {
        alert("Preparate para el futuro…");
        setTimeout(function () {
            alert("Y el futuro ya llegó!");
        }, 5000);
    })

    let email = document.querySelector("#email")
    email.addEventListener("keydown", function (event) {
        if (event.key === " ") {
            event.preventDefault();
            alert("Ey, tocaste la barra!")
        }
    })

    let estadoSecreto = 0
    window.addEventListener("keydown", function (event) {
        console.log(event.key)
        console.log(estadoSecreto)
        if (estadoSecreto === 0 && event.key === "s") {
            estadoSecreto = 1
        } else if (estadoSecreto === 1 && event.key === "e") {
            estadoSecreto = 2
        } else if (estadoSecreto === 2 && event.key === "c") {
            estadoSecreto = 3
        } else if (estadoSecreto === 3 && event.key === "r") {
            estadoSecreto = 4
        } else if (estadoSecreto === 4 && event.key === "e") {
            estadoSecreto = 5
        } else if (estadoSecreto === 5 && event.key === "t") {
            estadoSecreto = 6
        } else if (estadoSecreto === 6 && event.key === "o") {
            alert("SECRETO MAGICO")
        } else {
            estadoSecreto = 0
        }
    })




    let caja_1 = document.querySelector("#caja_1")
    let caja_2 = document.querySelector("#caja_2")
    let caja_3 = document.querySelector("#caja_3")
    let caja_4 = document.querySelector("#caja_4")
    let caja_5 = document.querySelector("#caja_5")
    let caja_6 = document.querySelector("#caja_6")

    caja_1.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 1) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })
    caja_2.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 2) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })
    caja_3.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 3) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })
    caja_4.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 4) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })
    caja_5.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 5) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })
    caja_6.addEventListener("click", function () {
        let numeroAlertorio = Math.floor(Math.random() * 6)
        if (numeroAlertorio === 6) {
            alert("Ganaste!!!!!!")
        } else {
            alert("Segui participando :(")
        }
    })




})