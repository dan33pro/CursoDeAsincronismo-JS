import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Como ya sabemos la función fetch, hace uso de
// las promesas, por lo que es perfecta para este
// ejemplo.
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

// La función fetchData, tiene que esperar la respuesta de
// la función fetch que importamos, y también espera la 
// conversión de la respuesta.
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

// Por otro lado la función anotherFn, va ha consumir
// la función fetchData, para realizar 3 peticiones GET
// esperando la respuesta de cada una de ellas.
anotherFn(API);