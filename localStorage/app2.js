window.addEventListener('load', function () {
	let api = 'https://api.giphy.com/v1/gifs/trending?api_key=TODGcHMiJLMasqHCEIVKuExBvcx8fIpM&limit=25&rating=g';

	fetch(api)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			let caja_1 = document.querySelector('#uno');
			let caja_2 = document.querySelector('#dos');
			let caja_3 = document.querySelector('#tres');
			let caja_4 = document.querySelector('#cuatro');
			let limpiar = document.querySelector('#limpiar');

			let favoritas = JSON.parse(localStorage.getItem('id_caja1'));
			if (favoritas !== null) {
				console.log(favoritas);
				caja_1.innerHTML += `<img src="${favoritas}">`;
			} else {
				alert('No hay imagenes');
			}

			limpiar.addEventListener('click', function () {
				localStorage.clear();
			});
		})
		.catch(function (error) {
			console.log('El error es: ' + error);
		});
});

let obtener = JSON.parse(localStorage.getItem('id_caja1'));
// JSON.parse(obtener);
console.log(obtener);
