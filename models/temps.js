var express = require('express');
express.Router();

class Query {
    constructor() {
      
    }
    set name(name) {
      this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
      return this._name;
    }
    sayHello(name) {
      var console1 = 'Hello, my name is ' + name + ', I have ID: ' + this.id;
      return console1;
    }
    query(table){
        let sql = "Select * from "+table;
        return sql;
    }
  }

module.exports = Query;