const newsRouter = require('./news');
const sitesRouter = require('./site');
const courserRouter = require('./coures');
const meRouter = require('./me');

function route(app) {
  app.use('/me', meRouter);
  app.use('/course', courserRouter);
  app.use('/news', newsRouter);
  app.use('/', sitesRouter);

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });
}
module.exports = route;
