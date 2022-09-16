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
