// var mysql      = require('mysql');

// var connection = mysql.createConnection({
// host : '66.175.221.248',
// user : 'anacaraban',
// password : 'PvyAQs573SD',
// database : 'placebo_data'
// });
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//    console.log('connected as id ' + connection.threadId);
// });
var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    port:'3000',
    user:'anacaraban',
    password:'PvyAQs573SD', //empty for window
    database: 'placebo_data'

});

var server = app.listen(1348, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/user', function(req, res){
  con.query('select * from users', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});
