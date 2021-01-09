var express=require('express');
var bodyparser=require("body-parser");

var app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
var i1=[];

exports.homepage=(req,res)=>{
    res.render("../views/list",{newlistitem:i1});
}
exports.add=(req,res)=>{
     i=req.body.n;
     i1.push(i);
    // res.render("../views/list",{newlistitem:i})
    // console.log(i);
    res.redirect("/");

}