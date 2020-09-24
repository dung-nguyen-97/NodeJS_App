const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteControllers {
  //[GET] /
  index(req, res, next) {
    // Cách viết theo call back
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     next(err);
    //   }
    // });
    // Cách viết theo promiss
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: mutipleMongooseToObject(courses) });
      })
      .catch((err) => next(err));
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
  // [GET] /not-fount
  notfound(req, res) {
    res.render('not-found');
  }
}
module.exports = new SiteControllers();
