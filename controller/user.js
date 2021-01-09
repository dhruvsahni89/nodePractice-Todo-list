var express=require('express');
var app=express();
app.set('view engine','ejs');
exports.homepage=(req,res)=>{
    res.render("../views/list");
}