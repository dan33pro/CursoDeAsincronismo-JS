# Callback

Un call back es una función que recibe como parametro
otra función para ser usada posteriormente.

```javascript
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));
```

Aqui podemos ver que setTimeout, que hace parte de las WebApis
por defecto ya es un callback.

```javascript
setTimeout( () => console.log('Hola JS'), 5000);
```

> no tiene que ser necesariamente una arrow function.

```javascript
function grettin(name) {
    console.log(`Hola ${name}`);
}

setTimeout( grettin, 2000, 'Daniel');
```

[========]

## XMLHttpRequest

Es un objeto de JS que permite hacer peticiones
hacia servicios en la nube(URLs o APIs).

```javascript
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';
```

Estado de una petición

|  Ready  State  | Significado |
| :-----------: | :------------: |
| 0  | Se ha inicializado  |
| 1  | Cargando  |
| 2  | Se ha cargado  |
| 3  | Procesando  |
| 4  | Completado |

Significado de la respuesta de una petición

| Rango  |  Status |
| :------------: | :------------: |
| 100-199  |  Respuestas informativas |
|  200-299 |  Respuestas satisfactorias |
|  300-399 |  Redirecciones |
|  400-499 |  Errores de los clientes |
|  500-599 |  Errores de los servidores |

```javascript
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    // Abrir una conexión a una API, con el
    // tipo de petición
    xhttp.open('GET', urlApi, true);

    // onreadystatechange: es una propiedad de los objetos
    // tipo XMLHttpRequest, que permite escuchar el estado de
    // una petición y saber cuando esta disponible el resultado.
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                // pasamos la respuesta de texto a JSON
                callback(null, JSON.parse(xhttp.resposeText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    // Ejecutar la logica previa
    xhttp.send();
}
```

## Fetch Data

Para consumir el metodo, lo podemos hacer a travez de la API
de prueba de Platzi, por eso la URL que estamos usando para
este ejemplo, entonces:

```javascript
fetchData( `${API}/products`, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
```

Como vemos estamos realizando 3 peticiones en esta función:

1. La primera para obtener todos los productos y visualizar el primero.

2. En la segunda, pasamos el 'id' como parametro en la URL y
nos devuelve un solo producto, para imprimir el titulo.

3. Y en la ultima obtenemos una categoria pasando el parametro 'id' en la URL que nos devuelve una sola categoria, con la que imprimimos el nombre.
