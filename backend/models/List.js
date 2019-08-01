// Comment.js Comment "Model"
var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  listArr: Array,
  time: Number
});
mongoose.model('List', CommentSchema);


module.exports = mongoose.model('List');