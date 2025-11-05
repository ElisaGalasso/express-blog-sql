const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blog_database'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connect to MySQL');

})

module.exports = connection