// var user = require("./userpass.js");
require('dotenv').config();
// db.js is our mlabs database connection YOU NEED TO HOOK THIS UP!
const mongoose = require('mongoose');
// you need to add the uri to your database from mlabs and set up a user on that database to log in with!
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@kparktechtonic-izx3z.mongodb.net/CommentBoard?retryWrites=true&w=majority`, { useNewUrlParser: true },
);

const db = mongoose.connection;

module.exports = db;
