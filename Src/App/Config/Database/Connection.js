const mysql = require('mysql')
const {db} = require('./keys')

const pool =  mysql.createPool(db)

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('DB Connect');
  });

module.exports = pool