var express=require("express");
var bodyparser=require("body-parser");
var app=express();
const homeroute = require('./routes/user');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.listen(3000,);
app.set('view engine','ejs');
app.use(homeroute);
