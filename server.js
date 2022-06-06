
const express = require('express');
const moment = require('moment');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')})
   
   

let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});   






