'use strict';

//          Async Await
// Son un tipo de funciones especiales que nos permiten
// trabajar con promesas, claro esta que no detienen el
// flujo de la ejecución.

const fnAsync = () => {
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
};

// En este caso nuestra función async espera la respuesta de
// la función de arriba, que es una promesa que se resuelve
// a los 2 segundos.
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hola mundo');
};

// El orden de visualización seria
//  Antes
//  Despues
//  Async!
//  Hola mundo
console.log('Antes');
anotherFn();
console.log('Despues');

// Demostrando que la función no detiene el flujo de
// ejecución.