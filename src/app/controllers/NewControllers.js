class NewControllers {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }
  // [GET] /news/:id
  show(req, res) {
    res.json(data);
  }
}
module.exports = new NewControllers();
const data = {
  name: 'dung',
  age: '15',
};
