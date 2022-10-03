import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Redmi note 11",
    "price": 200,
    "description": "Celular de Xiaomi",
    "categoryId": 2,
    "images": [
        "https://http2.mlstatic.com/D_NQ_NP_691702-MLA50292491031_062022-O.jpg"
    ]
}

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data))