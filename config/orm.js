
var connection = require('./connection');

module.exports = function ORM(table) {

    this.connection = connection;
    this.table = table;

    this.selectAll = function selectAll(model) {
        
        var query = `SELECT * FROM ${this.tableName}`;

        connection.query(query, function(err) {
            if (err) throw err;
        });

    }

    // Able to take more keys/values than currently needed to futue-proof
    this.insertOne = function insertOne(model) {

        var keys = Object.keys(model);
        var values = Object.values(model);
        var escapes = keys.map( (x) => '?');
        var secured = keys.concat(values);
        var query = `INSERT INTO ${this.tableName} (${escapes}) VALUES (${escapes})`

        connection.query(query, secured, function(err) {
            if (err) throw err;
        });

    }

    // Able to take more keys/values than currently needed to futue-proof
    this.updateOne = function updateOne(model) {

        var keys = Object.keys(model);
        var values = Object.values(model);
        var escapes = keys.map( (x) => '? = ?');
        var secured = [];

        for (var i = 0; i < keys.length; i++) {
            secured.push(keys[i], values[i]);
        }
        secured.push(keys[0], values[0]);

        var query = `UPDATE ${this.tableName} SET ${escapes} WHERE ? = ?`;

        connection.query(query, secured, function(err) {
            if (err) throw err;
        });

    }

};