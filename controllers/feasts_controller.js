
var feast = require('../models/feast');
var express = require('express')
var router = express.Router()

// define the index/select route
app.get('/', function (req, res) {
    var data = feast.selectAll();
    res.render('index', { feasts: data } );
});
// define the insert route
router.post('/insert', function (req, res) {
    feast.insertOne(req.body);
    app.redirect('/');
});
// define the update route
router.put('/update', function (req, res) {
    feast.updateOne(req.body);
    app.redirect('/');
});

module.exports = router;