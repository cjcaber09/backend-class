var express = require('express');
var router = express.Router();
const Queries = require('../models/temps');
const mysql = require('mysql');

let db = new Queries();


var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'simple'
});
con.connect();


router.get('/',function(req,res){
    let sql= db.query('users');
    con.query(sql,(err,rows)=>{
        if (err) throw err;
        res.send(rows);
    })
    
    
})
router.get('/add_users',function(req,res){
    let data ={u_name: "ceejay1",u_user: "CCaber",u_pass: "Support101"};
    let table = "users";
    res.send(insert_into(table,data));
})
router.get('/user/:user/:pass',function(req,res){
    let data ={u_name: "ceejay1",u_user: "CCaber",u_pass: "Support101"};
    let table = "users";
    res.send();
})
module.exports = router;