const newsRouter = require('./news');
const sitesRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/', sitesRouter);

  //   app.get("/search", (req, res) => {
  //     res.render("search");
  //   });
}
module.exports = route;
