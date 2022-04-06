const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerLogin = require('../controllers/login-controllers')

router.get("/", controllerLogin.make_login);

router.post("/", controllerLogin.sign_up);

router.get("/logout", controllerLogin.logout);

module.exports = router;