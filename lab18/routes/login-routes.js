const express = require('express');
const router = express.Router()

const filesystem = require('fs');

const path = require('path');

const controllerLogin = require('../controllers/login-controllers')

router.get("/", controllerLogin.make_login);

router.post("/", controllerLogin.login);

router.get("/logout", controllerLogin.logout);

router.get("/signup", controllerLogin.get_signup);

router.post("/signup", controllerLogin.post_signup);

module.exports = router;