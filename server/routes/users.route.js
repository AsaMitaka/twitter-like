const express = require('express');
const route = express.Router();

const { getAllUsers, getUserById } = require('../controllers/users.controller');

route.get('/', getAllUsers);
route.get('/:id', getUserById);

module.exports = route;
