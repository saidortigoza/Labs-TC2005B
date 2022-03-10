const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tc2005b_a01707430',
    password: ''
});

module.exports = pool.promise();