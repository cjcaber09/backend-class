const mysql = require('mysql');
// DB CONNECTION

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'simple'
});
con.connect();
module.exports = con;