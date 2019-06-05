const express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
const cors = require('cors');

const app = express();

app.use(cors);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

//check if user pass a valid JSON middleware
// app.use('/',function(req,res,next){
//     let jsonData = JSON.stringify(req.body);
//     console.log(req.method);
//     console.log(req);
//     console.log(jsonData);
// });

app.use(bodyParser.json());
app.use('/',require("./router/grads"));

// app.use(function (req, res) {
//     console.log(req.body);
//     let x = JSON.stringify(req.body);
//     console.log(x);
//   });



app.use(function(err,req,res,next){
    console.error(err);
    res.status(500).send(err);
});

app.listen(3000, (e) => console.log('app listen on port 3000'));