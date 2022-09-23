# Promise

Estructura basica de una promesa

```javascript
const cows = 15;
const countCows = new Promise( (resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
});
```

En este ejmeplo simplemente devuelve un resolve o un reject
dependiendo del numero de vacas, para usar la promesa podemos
hacer lo siguiente.

```javascript
countCows.then((result) => console.log(result))
.catch((error) => console.error(error))
.finally(() => console.log('Finally'));
```

## Fetch Data con Node

Primero hay que importar lo siguiente

> Recordar que es necesario correr antes el comando: npm i node-fetch

```javascript
import fetch, { Response } from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
```

Ya con esto podemos hacer una función que consuma la función
que acabamos de importar.

```javascript
function fetchData(urlApi) {
    return fetch(urlApi);
};
```

Partiendo de esto podemos hacer el mismo ejemplo que con la
función FetchData que hicimos con CallBacks y conseguir el mismo
resultado con la función que importamos, que es una promesa.

```javascript
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
```
