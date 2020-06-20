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

app.use(bodyParser.json());

var con = mysql.createConnection({

    connectionLimit : 10000,
    host:'66.175.221.248',
    port:3002,
    user:'anacaraban',
    password:'PvyAQs573SD', 
    // database: 'placebo_data',
    // multipleStatements: true

});




con.connect((err) => {
  if (!err)
      console.log('DB connection succeded.');
  else
      console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
// // while(con.state == "disconnected"){
// //   console.log(con.state)
// // }
 app.listen(3002, () => console.log('Express server is runnig at port no : 3002'));
 console.log(con.config)

// // app.get('/user', function(req, res){
// //   con.query('select * from users', function(error, rows, fields){
// //         if(error) console.log(error);

// //         else{
// //             console.log(rows);
// //             res.send(rows);

// //         }

// //   });
// // });




//------------------------//
// var mysql = require("mysql");

// var pool = mysql.createPool({
//         connectionLimit : 100,
//         host     : '66.175.221.248',
//         port     :  3306,
//         user     : 'anacaraban',
//         password : 'PvyAQs573SD',
//         database : 'placebo_data',
//     });
// exports.getConnection = function(callback) {

//   pool.getConnection(function(err, conn) {

//     if(err) {
//     	console.log("failed")
//       return callback(err);
//     } else {
//     	console.log("connected")
//     }
//     callback(err, conn);
//   });
// };