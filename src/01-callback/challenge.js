//      XMLHttpRequest 
// es un objeto de JS que permite hacer peticiones
// hacia servicios en la nube(URLs o APIs).
const XMLHttpRequest = require('xmlhttprequest');
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

// Esta es la forma en la que se hacia a los inicios de JS
// a día de hoy un Fetch es una opción más sencilla
