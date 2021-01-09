var express=require("express");
var app=express();
const homeroute = require('./routes/user');
app.use(express.static("public"));
app.listen(3000,);
app.set('view engine','ejs');
app.use(homeroute);