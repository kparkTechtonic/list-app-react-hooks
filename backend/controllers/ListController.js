process.currentComments = 0;
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const ObjectId = require('mongodb').ObjectID;

router.use(bodyParser.json());

router.post('/', (req, res) => {
  Lists.create(req.body, (err, x) => {
    if (err) console.log(err);
  });
  res.send('sent');
});

router.get('/', async (req, res) => {
  const query = await Lists.find({}, (err, doc) => {
    if (err)console.log(err);
  });
  res.send(query);
  console.log(query);
});

router.get('/test/', async (req, res) => {
  const query = await Lists.find({}, (err, doc) => {
    if (err)console.log(err);
  }).countDocuments({}, (err, doc) => {
    if (err)console.log(err);
  });
    // console.log(query)
  res.send(String(query));
});

router.post('/test/', async (req, res) => {
  process.currentComments = req.body.count;
  res.send(String(req.body.count));
});

router.post('/switch/', async (req, res) => {
  const allowedThreads = ['general', 'cars', 'horses', 'elephants'];
  if (allowedThreads.indexOf(req.body.text) === -1) {
    res.sendStatus(400).send('bad request');
  }
  Lists = require('../models/List')[`${req.body.text}`];
  res.send(`set channel to ${req.body.text}`);
});

router.put('/update', async (req, res) => {
  console.log(req.body);
  await Lists.updateOne({ _id: ObjectId(String(req.body.id)) }, { $set: { comment: String(req.body.text) } }, (err, doc) => {
    if (err)console.log(err);
  });
  res.send(req.body);
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  await Lists.deleteOne({ _id: ObjectId(String(req.params.id)) }, (err, doc) => {
    if (err)console.log(err);
  });
  res.send(`deleted ${req.params.id}`);
});


module.exports = router;


// const http = require('http');
// let Lists = require('../models/List');

// http.createServer((request, response) => {
//   response.writeHead(200, {
//     'Access-Control-Allow-Origin': '*',
//     Connection: 'keep-alive',
//     'Content-Type': 'text/event-stream',
//     'Cache-Control': 'no-cache',
// //   });
// //   setInterval(async () => {
// //     const query = await Lists.find().countDocuments({}, (err, doc) => {
// //       if (err)console.log(err);
// //     });
// //     console.log('sending request');
// //     response.write(
// //       'data: query',
// //     );

// //     response.write('\n\n');
// //   }, 300);
// // }).listen(5001);
