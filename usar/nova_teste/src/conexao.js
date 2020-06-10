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
  
    host:'localhost',
    port:'3000',
    user:'anacaraban',
    password:'PvyAQs573SD', //empty for window
    database: 'placebo_data',
    multipleStatements: true

});




con.connect((err) => {
  if (!err)
      console.log('DB connection succeded.');
  else
      console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
// while(con.state == "disconnected"){
//   console.log(con.state)
// }
app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

// app.get('/user', function(req, res){
//   con.query('select * from users', function(error, rows, fields){
//         if(error) console.log(error);

//         else{
//             console.log(rows);
//             res.send(rows);

//         }

//   });
// });
