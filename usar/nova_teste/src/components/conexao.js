var express = require ('express');
var mysql = require ('mysql');
var app = express();

var connection = mysql.createConnection({

    host : '66.175.221.248',
    user : 'anacaraban',
    password : 'PvyAQs573SD',
    database : 'placebo_data'
});
connection.connect(function(error){
    if(!!error) {
        console.log('erro');
    }
    else{
        console.log('conectado');
    }
})
app.get('/', function(req, resp){
    // connection.query("SELECT * FROM placebo_data", function(error, rows, fields 
    //     if()
    // );
})

app.listen(3000);
