const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewControllers');

route.use('/:id', newsController.show);
route.use('/', newsController.index);

module.exports = route;
