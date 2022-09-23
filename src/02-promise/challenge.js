// Recordar que es necesario correr el comando
//      npm i node-fetch
import fetch, { Response } from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

// Primer grupo de peticiones
// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => console.log(products))
// .catch(error => console.error(error));

// Segundo Grupo de peticiones, en este caso es el ejemplo anterior
// de Fetch Data, pero con promesas.
fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products[0]);
    return fetchData(`${API}/products/${products[0].id}`);
})
.then(response => response.json())
.then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
})
.then(response => response.json())
.then(category => console.log(category.name))
.catch(error => console.log(error))
.finally(() => console.log('Finally'));