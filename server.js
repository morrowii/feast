
require('dotenv').config()
var feastRoutes = require('./controllers/feasts_controller');
var bparse = require('body-parser');
var exphbs  = require('express-handlebars');
var express = require('express');
var app = express();
var port = process.env.PORT;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.use('/', feastRoutes);
app.use(bparse.urlencoded({ extended: true }));
app.use(bparse.text());
app.use(bparse.json());

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});