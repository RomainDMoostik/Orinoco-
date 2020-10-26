
console.log('ajax');

fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(json => console.log(json))

