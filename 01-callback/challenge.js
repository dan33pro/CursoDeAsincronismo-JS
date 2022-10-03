//      XMLHttpRequest 
// es un objeto de JS que permite hacer peticiones
// hacia servicios en la nube(URLs o APIs).
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    // Abrir una conexión a una API, con el
    // tipo de petición
    xhttp.open('GET', urlApi, true);

    // onreadystatechange: es una propiedad de los objetos
    // tipo XMLHttpRequest, que permite escuchar el estado de
    // una petición y saber cuando esta disponible el resultado.
    xhttp.onreadystatechange = (event) => {
        { // readyState info
            //
            // ----------------------------------
            // |          readyState            |
            // ----------------------------------
            // |    0   |   Se ha inicializado  |
            // |    1   |   Cargando            |
            // |    2   |   Se ha cargado       |
            // |    3   |   Procesando          |
            // |    4   |   Completado          |
            // ----------------------------------
            //
        }
        if (xhttp.readyState === 4) {
            { // status info 
                //
                // ------------------------------------------------
                // |                    status                    |
                // ------------------------------------------------
                // |    100-199   |   Respuestas informativas     |
                // |    200-299   |   Respuestas satisfactorias   |
                // |    300-399   |   Redirecciones               |
                // |    400-499   |   Errores de los clientes     |
                // |    500-599   |   Errores de los servidores   |
                // ------------------------------------------------
                //
            }
            if (xhttp.status === 200) {
                // pasamos la respuesta de texto a JSON
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    // Ejecutar la logica previa
    xhttp.send();
}

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

// Como vemos estamos realizando 3 peticiones en esta función:
//      1. La primera para obtener todos los productos y 
//          visualizar el primero.
//
//      2. En la segunda, pasamos el 'id' como parametro en la
//         URL y nos devuelve un solo producto, para imprimir 
//         el titulo.
//
//      3. Y en la ultima obtenemos una categoria pasando el 
//         parametro 'id' en la URL que nos devuelve una sola 
//         categoria, con la que imprimimos el nombre.