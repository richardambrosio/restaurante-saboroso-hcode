const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_saboroso',
    database: 'saboroso',
    password: 'saboroso'
});

module.exports = connection;