
var feast = require('../models/feast');
var express = require('express');
var router = express.Router();

// define the index/select route
router.get('/', function (req, res) {
    feast.selectAll(function(data) {
        res.render('index', { feasts: data } );
    });
});
// define the insert route
router.post('/insert', function (req, res) {
    feast.insertOne(req.body, function() {
        res.json({ redirect_url: "/"});
    });
});
// define the update route
router.put('/update', function (req, res) {
    feast.updateOne(req.body, function() {
        res.json({ redirect_url: "/"});
    });
});

module.exports = router;