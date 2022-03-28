const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/lab11.html`)
});

router.get('/preguntasAResponder', (req, res, next) => {
    res.sendFile(`${__dirname}/public/preguntasLab11.html`)
    
});

module.exports = router;