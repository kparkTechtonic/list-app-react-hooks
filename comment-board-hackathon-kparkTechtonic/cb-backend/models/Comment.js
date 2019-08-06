// Comment.js Comment "Model"
var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  author: String,
  comment: String,
  pubDate: Number
});
mongoose.model('Comment', CommentSchema);

var CarSchema = new mongoose.Schema({
  author: String,
  comment: String,
  pubDate: Number
});
mongoose.model('Car', CarSchema)

var HorseSchema = new mongoose.Schema({
  author: String,
  comment: String,
  pubDate: Number
});
mongoose.model('horse', HorseSchema)

var ElephantSchema = new mongoose.Schema({
  author: String,
  comment: String,
  pubDate: Number
});
mongoose.model('elephant', ElephantSchema)

module.exports = {
  general:mongoose.model('Comment'), 
  cars:mongoose.model('Car'), 
  horses:mongoose.model('horse'),
  elephants:mongoose.model('elephant')
  };

