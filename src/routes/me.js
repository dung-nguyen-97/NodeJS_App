const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/MeController');

route.get('/store/courses', meController.index);

module.exports = route;
