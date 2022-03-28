const express = require('express');
const router = express.Router();
const fs = require('fs');

const json_items = fs.readFileSync(`${__dirname}/public/api.json`, 'utf-8');
const items = JSON.parse(json_items);

router.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/lab10.html`)
    
});

router.get('/tienda', (req, res, next) => {
    res.sendFile(`${__dirname}/public/tienda.html`);
    
});

router.post('/tienda', (req, res, next) => {
    console.log(req.body);
    const {precio, id, title, thumbnailUrl} = req.body;
    let newItem = {
        precio,
        id,
        title,
        thumbnailUrl
    };
    items.push(newItem);
    const json_items = JSON.stringify(items);
    console.log(newItem);
    fs.writeFileSync(`${__dirname}/public/api.json`, json_items, 'utf-8');
    res.sendFile(`${__dirname}/public/tienda.html`);
});

// Tienda - Archivos estaticos
router.get('/tienda.js', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/tienda.js`).pipe(res);
});

router.get('/api.json', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/api.json`).pipe(res);
});

// Validacion - Archivos estaticos
router.get('/validacion', (req, res, next) => {
    res.sendFile(`${__dirname}/public/validacion.html`)
});

router.get('/validacion.js', (req, res, next) => {
    fs.createReadStream(`${__dirname}/public/validacion.js`).pipe(res);
});

router.get('/preguntas', (req, res, next) => {
    res.sendFile(`${__dirname}/public/preguntasLab10.html`) 
});

module.exports = router;