
var ORM = require('../config/orm');

var feastORM = new ORM('feasts');
var feast = {};

feast.selectAll = function(callback) {
    feastORM.selectAll(function(data) {
        callback(data);
    });
};

feast.insertOne = function(reqBody, callback) {
    feastORM.insertOne(reqBody);
    callback();
};

feast.updateOne = function(reqBody, callback) {
    feastORM.updateOne(reqBody);
    callback();
};

module.exports = feast;