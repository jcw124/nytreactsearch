const MONGOOSE = require("mongoose");
const SCHEMA = mongoose.Schema;

const ARTICLESCHEMA = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const ARTICLE = mongoose.model("Article", ARTICLESCHEMA);

module.exports = Article;
