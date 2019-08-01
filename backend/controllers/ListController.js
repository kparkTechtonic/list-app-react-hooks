process.currentComments = 0
var express = require('express');
var bodyParser = require('body-parser');
var Lists = require('../models/List');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
router.use(bodyParser.json());

router.post('/', function (req, res) {
    Lists.create(req.body,(err,x)=>{
        if (err) console.log(err);
    })
res.send("sent")});

router.get('/', async function (req, res) {
    const query = await Lists.find({},function(err,doc){
        if(err)console.log(err)
    });
    res.send(query);
    console.log(query)
});

router.get('/test/', async function (req, res) {
    const query = await Lists.find({},function(err,doc){
        if(err)console.log(err)
    }).countDocuments({},function(err,doc){
        if(err)console.log(err)
    });
    // console.log(query)
    res.send(String(query));
});

router.post('/test/', async function (req, res) {
        process.currentComments = req.body.count;
        res.send(String(req.body.count))
});

router.post('/switch/', async function (req, res) {
    var allowedThreads = ["general","cars", "horses", "elephants"]
    if(allowedThreads.indexOf(req.body.text)===-1){
        res.sendStatus(400).send("bad request")
    }
    Lists = require('../models/List')[`${req.body.text}`];
    res.send(`set channel to ${req.body.text}`)
});

router.put('/update', async function(req,res) {
    console.log(req.body)
    await Lists.updateOne({"_id":ObjectId(String(req.body.id))},{ $set:{"comment":String(req.body.text)}},function(err,doc){
        if(err)console.log(err)
    })
    res.send(req.body)
});

router.delete('/:id', async function (req, res) {
    console.log(req.params.id)
        await Lists.deleteOne({"_id":ObjectId(String(req.params.id))},function(err,doc){
            if(err)console.log(err)
        })
    res.send(`deleted ${req.params.id}`)
});


module.exports = router;


const http = require('http');
http.createServer((request, response) => {
  response.writeHead(200, {
    'Access-Control-Allow-Origin':"*",
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });
  setInterval(async () => {
    const query = await Lists.find().countDocuments({},function(err,doc){
        if(err)console.log(err)
    });
        console.log("sending request")
        response.write(
            `data: query`
          );

    response.write('\n\n');
  }, 300);
}).listen(5000);