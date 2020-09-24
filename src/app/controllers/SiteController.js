class SiteControllers {
  //[GET] /
  index(req, res) {
    res.render('home');
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
