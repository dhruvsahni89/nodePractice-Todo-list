var express=require("express");
var bodyparser=require("body-parser");
var mongoose=require('mongoose');
const mongodb=require('mongodb');
const mongoclient=mongodb.mongoclient;
var app=express();
mongoose.connect('mongodb+srv://dhruvsahni89:sahnifamily@cluster0.gwow1.mongodb.net/dhruvsahni89?retryWrites=true&w=majority', { useNewUrlParser: 
true,useUnifiedTopology:true })
.then(result =>{
   
    console.log("server started");
})
.catch(err =>{
    console.log(err);
})

const homeroute = require('./routes/user');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000);
app.set('view engine','ejs');
app.use(homeroute);
