window.addEventListener('load', function () {
	// alert('Hola mundo');

	// capturamos todos los input

	let campoNombre = document.querySelector('#nombre');
	let campoApellido = document.querySelector('#apellido');
	let campoEmail = document.querySelector('#email');
	let campoPass = document.querySelector('#password');
	let formulario = document.querySelector('form');
	// let campoBoton = document.querySelector('#boton');

	// Focus
	campoNombre.addEventListener('focus', function () {
		campoNombre.style.border = '3px solid blue';
	});

	campoApellido.addEventListener('focus', function () {
		campoApellido.style.border = '3px solid blue';
	});

	campoEmail.addEventListener('focus', function () {
		campoEmail.style.border = '3px solid blue';
	});

	campoPass.addEventListener('focus', function () {
		campoPass.style.border = '3px solid blue';
	});

	// Blur
	campoNombre.addEventListener('blur', function () {
		perderFoco('nombre');
	});

	campoApellido.addEventListener('blur', function () {
		perderFoco('apellido');
	});

	campoEmail.addEventListener('blur', function () {
		perderFoco('email');
	});

	campoPass.addEventListener('blur', function () {
		perderFoco('password');
	});

	function perderFoco(id) {
		let element = document.querySelector(`#${id}`); //
		let valor = element.value;
		if (valor === '' || valor.length < 3 || !isNaN(valor)) {
			element.style.border = '3px solid red';
		} else {
			element.style.border = '3px solid green';
		}
	}

	formulario.addEventListener('submit', function (e) {
		e.preventDefault();
		if (campoNombre.value === '' || campoApellido.value === '' || campoEmail.value === '' || campoPass.value === '') {
			alert('Todos los campos son obligatorios');
		} else {
			alert('¡Formulario enviado!');
			this.submit();
		}
	});
});
