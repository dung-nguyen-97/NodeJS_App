const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: 'https://picsum.photos/1200/800' },
    description: { type: String },
    videoID: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true },
);
module.exports = mongoose.model('Course', Course);
