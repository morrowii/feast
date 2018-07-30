
var connection = require('./connection');

module.exports = function ORM(table) {

    this.connection = connection;
    this.table = table;

    this.selectAll = function(callback) {
        
        var query = `SELECT * FROM ${this.table}`;

        connection.query(query, function(err, data) {
            if (err) throw err;
            else {
                callback(data);
            }
        });

    }

    this.insertOne = function(reqBody) {

        var query = `INSERT INTO ${this.table} (feast_name, devoured) VALUES (?, ?)`;

        connection.query(query, [reqBody.feast_name, reqBody.devoured], function(err, data) {
            if (err) throw err;
        });

    }

    this.updateOne = function(reqBody) {

        var query = `UPDATE ${this.table} SET devoured = true WHERE feast_name = ?`;

        connection.query(query, [reqBody.feast_name], function(err, data) {
            if (err) throw err;
        });

    }

};