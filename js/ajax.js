app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
  
  
console.log('ajax');



//const { post } = require("jquery");

fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(json => console.log(json))