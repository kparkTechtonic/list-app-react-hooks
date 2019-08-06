const http = require('http').Server(app);
var app = require('./app');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3002;

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

module.exports = http;
