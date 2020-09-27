const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseController');

route.get('/edit/:id', courseController.edit);
route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:slug', courseController.index);

module.exports = route;
