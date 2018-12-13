const express = require('express');
const path = require('path');
const dbrouter = require('./models/database.js');
const Indexrouter = require('./routes/index.js');
const morgan = require('morgan');

dbrouter.con;


// DB CONNECTION


const app = express();

// Models


// functions


app.use(morgan('short'));
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'pug');



// Paths
app.get('/',Indexrouter);
app.get('/add_users',Indexrouter);
app.get('/user/:user/:pass',Indexrouter);


app.listen(3005, function(){
});

module.exports = app;