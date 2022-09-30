# Aync

## Async Await

Son un tipo de funciones especiales que nos permiten
trabajar con promesas, claro esta que no detienen el
flujo de la ejecución.

Usando la siguiente promesa:

```javascript
const fnAsync = () => {
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
};
```

En este caso nuestra función async espera la respuesta de
la función de arriba, que es una promesa que se resuelve
a los 2 segundos.

```javascript
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hola mundo');
};
```

El orden de visualización seria

  1. Antes
  2. Despues
  3. Async!
  4. Hola mundo
  
  ```javascript
console.log('Antes');
anotherFn();
console.log('Despues');
```

Demostrando que la función no detiene el flujo de
ejecución.

## Challenge

Continuando con el ejemplo anterior de realizar 3 peticones
GET a la FakeApi de Platzi, lo vamos a hacer ahora con Async Await,
importamos la función fetch de los modulos de node.

```javascript
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
```

Como ya sabemos la función fetch, hace uso de
las promesas, por lo que es perfecta para este
ejemplo.

```javascript
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}
```

La función fetchData, tiene que esperar la respuesta de
la función fetch que importamos, y también espera la
conversión de la respuesta.

```javascript
const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${product.category.id}`);

        console.log(products);
        console.log(`
        ${product.title}
        ${category.name}`);
    } catch {
        console.error(error);
    }
};
```

Por otro lado la función anotherFn, va ha consumir
la función fetchData, para realizar 3 peticiones GET
esperando la respuesta de cada una de ellas.

```javascript
anotherFn(API);
```
