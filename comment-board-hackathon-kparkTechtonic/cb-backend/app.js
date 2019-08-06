var app = require('express')();
// var app = express();
var db = require('./db');
var cors = require('cors');
var CommentController = require('./controllers/CommentController');

//CORS Access lift (we eventually want to add security using JWT and whitelist our platforms)
app.use(cors(
    {   "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
));

//Include Controller Routes
app.use('/comment', CommentController);

module.exports = app;
