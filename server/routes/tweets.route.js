const express = require('express');
const route = express.Router();

const { getAllTweets, getTweetById } = require('../controllers/tweets.controller');

route.get('/', getAllTweets);
route.get('/:id', getTweetById);

module.exports = route;
