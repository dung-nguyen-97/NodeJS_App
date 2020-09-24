const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewControllers');

route.get('/:id', newsController.show);
route.get('/', newsController.index);

module.exports = route;
