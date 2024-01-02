const express = require('express');
const route = express.Router();

const { firstHello, mainHello } = require('../controllers/main.controller');

route.get('/', mainHello);
route.get('/first', firstHello);

module.exports = route;
