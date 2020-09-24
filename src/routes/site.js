const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');

route.use('/search', siteController.search);
route.use('/:notFound', siteController.notfound);
route.use('/', siteController.index);

module.exports = route;
