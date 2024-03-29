const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseControllers {
  //[GET] /course/:slug
  index(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('./courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  //[GET]  ./courses/create
  create(req, res, next) {
    res.render('./courses/create');
  }
  //[POST]  ./courses/store
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {});
  }
  //[GET]  ./courses/eidt
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('./courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }
}
module.exports = new CourseControllers();
