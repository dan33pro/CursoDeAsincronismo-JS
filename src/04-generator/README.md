# Generators

Un generador en JavaScript consta de una función generadora que muestra un objeto iterable Generator.
La palabra reservada yield se usa para pausar y reanudar una función generadora.

- La estructura del Generador consta con la palabra function seguido de un asterísco * `function*` ésta es una función generadora heredada.
- El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo (string, numérico, objetos, etc) y se puede tener tantos yield que se desee.

## Ejemplo 1

```javascript
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
```

## Ejemplo 2

En este ejemplo usamos un generator para iterar un arreglo, y probamos que al no existir más elementos en el arreglo devuelve value : undefined y done: true

```javascript
function* iterate(array) {
    for ( let value of array ) {
        yield value;
    }
}

const it = iterate(['Lucas', 'Juan', 'Sara', 'Tatiana']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```
