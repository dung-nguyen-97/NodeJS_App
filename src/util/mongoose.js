module.exports = {
  mutipleMongooseToObject: function (mgArrays) {
    return mgArrays.map((mgArray) => mgArray.toObject());
  },
  mongooseToObject: function (mgArrays) {
    return mgArrays ? mgArrays.toObject() : mgArrays;
  },
};
