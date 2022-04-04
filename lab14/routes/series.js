const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerSeries = require('../controllers/series-controller')

router.get("/", controllerSeries.homeSeries);

router.get("/new", controllerSeries.nuevaSerie);

router.get("/new", controllerSeries.postNuevaSerie);

router.post("/new", controllerSeries.postNuevaSerie);

module.exports = router;