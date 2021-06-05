window.addEventListener('load', function () {
	const prox = 'https://cors-anywhere.herokuapp.com/';
	let api = `${prox}https://api.deezer.com/genre/`;

	fetch(api)
		.then(function (response) {
			return response.json();
		})
		.then(function (datos) {
			console.log(datos);

			let caja_1 = document.querySelector('#caja_1');
			let caja_2 = document.querySelector('#caja_2');
			let caja_3 = document.querySelector('#caja_3');
			let caja_4 = document.querySelector('#caja_4');

			// Agregar imagenes a mi HMTL con el endpoint
			caja_1.innerHTML += `
      <h2>${datos.data[1].name} </h2>
      <img src="${datos.data[1].picture_medium}">                  
      `;
			caja_2.innerHTML += `
      <h2>${datos.data[2].name} </h2>
      <img src="${datos.data[2].picture_medium}">                  
      `;
			caja_3.innerHTML += `
      <h2>${datos.data[3].name} </h2>
      <img src="${datos.data[3].picture_medium}">                  
      `;
			caja_4.innerHTML += `
      <h2>${datos.data[4].name} </h2>
      <img src="${datos.data[4].picture_medium}">                  
      `;

			// Creando eventos

			caja_1.addEventListener('click', function (e) {
				e.preventDefault(); //sacarle el comportamiento por defecto(o de naturaleza)
				localStorage.setItem('pop', JSON.stringify(`${datos.data[1].picture_medium}`));
			});
			caja_2.addEventListener('click', function (e) {
				e.preventDefault(); //sacarle el comportamiento por defecto(o de naturaleza)
				localStorage.setItem('rap', JSON.stringify(`${datos.data[2].picture_medium}`));
			});
			caja_3.addEventListener('click', function (e) {
				e.preventDefault(); //sacarle el comportamiento por defecto(o de naturaleza)
				localStorage.setItem('reggaeton', JSON.stringify(`${datos.data[3].picture_medium}`));
			});
			caja_4.addEventListener('click', function (e) {
				e.preventDefault(); //sacarle el comportamiento por defecto(o de naturaleza)
				localStorage.setItem('rock', JSON.stringify(`${datos.data[4].picture_medium}`));
			});
		})
		.catch(function (error) {
			console.log('Tu error es: ' + error);
		});
});
