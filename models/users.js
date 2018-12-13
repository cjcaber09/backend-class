var express = require('express');
express.Router();

const mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'simple'
});
con.connect();



insert_into = function(table,data){
    
    sql = "INSERT INTO "+table+" SET ?";
    con.query(sql,data,(err,rows)=>{
        if (err) throw err;
        console.log(err);
        console.log(rows); 
    })
};
userslist = function (table){
    sql = "Select * from "+table;
    con.query(sql,(err,rows)=>{
        if (err) throw err;
        return rows;
        res.send(rows);
    })
};
find_user = function(table,data){
    sql = "SELECT * FROM "+table+" WHERE u_user = ?";
    con.query(sql,data.u_user,(err,rows,field)=>{
        if(err) throw err;
        console.log(data.u_user); 
        res.send(rows);
    })
}



module.exports = {} ;