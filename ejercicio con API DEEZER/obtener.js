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
			let favoritos1 = JSON.parse(localStorage.getItem('pop'));
			// console.log(localStorage.getItem('pop'));
			// console.log(JSON.parse(localStorage.getItem('pop')));
			caja_1.innerHTML += `<img src="${favoritos1}">
										
			`;

			// let caja_2 = document.querySelector('#caja_1');
			// let favoritos2 = JSON.parse(localStorage.getItem('rap'));
			// caja_2.innerHTML += `<img src="${favoritos2}">`;

			// let caja_3 = document.querySelector('#caja_1');
			// let favoritos3 = JSON.parse(localStorage.getItem('reggaeton'));
			// caja_3.innerHTML += `<img src="${favoritos3}">`;

			// let caja_4 = document.querySelector('#caja_1');
			// let favoritos4 = JSON.parse(localStorage.getItem('rock'));
			// caja_4.innerHTML += `<img src="${favoritos4}">`;
		})
		.catch(function (error) {
			console.log('Tu error es: ' + error);
		});
});
