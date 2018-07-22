
var feast = require('../models/feast');
var express = require('express')
var router = express.Router()

// define the home index route
router.get('/', function (req, res) {
    res.sendFile();
});
// define the select route
router.get('/select', function (req, res) {
    feast.selectAll(req.body);
});
// define the insert route
router.post('/insert', function (req, res) {
    feast.insertOne(req.body);
});
// define the update route
router.put('/update', function (req, res) {
    feast.updateOne(req.body);
});

module.exports = router;