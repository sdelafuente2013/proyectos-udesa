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

			caja_1.innerHTML += `<img src="${data.data[0].images.original.url}">`;
			caja_2.innerHTML += `<img src="${data.data[1].images.original.url}">`;
			caja_3.innerHTML += `<img src="${data.data[2].images.original.url}">`;
			caja_4.innerHTML += `<img src="${data.data[3].images.original.url}">`;

			caja_1.addEventListener('click', function (e) {
				e.preventDefault();
				localStorage.setItem('id_caja1', JSON.stringify(`${data.data[0].images.original.url}`));
				// console.log(`${this.id}`);
			});
			caja_2.addEventListener('click', function (e) {
				e.preventDefault();
				localStorage.setItem('id_caja2', JSON.stringify(`${this.id}`));
				// console.log(`${this.id}`);
			});
			caja_3.addEventListener('click', function (e) {
				e.preventDefault();
				localStorage.setItem('id_caja3', JSON.stringify(`${this.id}`));
				// console.log(`${this.id}`);
			});
			caja_4.addEventListener('click', function (e) {
				e.preventDefault();
				localStorage.setItem('id_caja4', JSON.stringify(`${this.id}`));
				// console.log(`${this.id}`);
			});
			limpiar.addEventListener('click', function () {
				localStorage.clear();
			});
		})
		.catch(function (error) {
			console.log('El error es: ' + error);
		});
});
