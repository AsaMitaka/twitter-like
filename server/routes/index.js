const express = require('express');
const route = express.Router();
const mainRoute = require('./main.route');
const usersRoute = require('./users.route');
const tweetsRoute = require('./tweets.route');

route.use('/', mainRoute);
route.use('/user', usersRoute);
route.use('/tweet', tweetsRoute);

module.exports = route;
