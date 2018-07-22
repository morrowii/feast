
var ORM = require('../config/orm');

var feast = {};
var feastORM = new ORM('feasts');

feast.selectAll = function(reqBody) {
    feastORM.selectAll(reqBody);
};

feast.insertOne = function(reqBody) {
    feastORM.insertOne(reqBody);
};

feast.updateOne = function(reqBody) {
    feastORM.updateOne(reqBody);
};

module.exports = feast;