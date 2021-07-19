//main file

const express = require('express');
const port = 8000;
const cors = require('cors')

const db = require('./config/mongoose');
// const List = require('./model/list');

const app = express();
app.use(express.urlencoded());
app.use(cors());

//this will use for routing purpouses
app.use('/',require('./router'));

//app listen on port 8000;
app.listen(port,(err)=>{

    if(err){
        console.log(err);
        return;
    }
   console.log("Success");
});