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

# XMLHttpRequest

Es un objeto de JS que permite hacer peticiones
hacia servicios en la nube(URLs o APIs).

```javascript
const XMLHttpRequest = require('xmlhttprequest');
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
