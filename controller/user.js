var express=require('express');
var bodyparser=require("body-parser");
const List=require("../model/user.js");

var app=express();
app.use(express.static("public"));
app.set('view engine','ejs');
const d=new List({
    name:"welcome"
})
d.save();

exports.homepage=(req,res)=>{
    // list.find({}, function(err,s){
    //     if(s.length()===0){
    //         list.insert(d,function(err){
    //             if(err){
    //                 console.log(err);
    //             }
    //             else{
    //                 console.log("Successfully saved items to DB");
    //             }
    //         });
    //         res.redirect("/");

    //     }
    List.find({},function(err,s)
        {
            if(s.length===0){
                List.insert(d);
                List.save();
                   res.redirect("/");
            }
            // res.redirect("/");
            else {
            res.render("../views/list",{newlistitem:s});
            }

        });

    
    
}
exports.add=(req,res)=>{
     const itemname=req.body.n;
     const list=new List({
         name:itemname
     });
     list.save();
    // res.render("../views/list",{newlistitem:i})
    // console.log(i);
    res.redirect("/");

}
exports.delete=(req,res)=>{
    const check=req.body.checkbox;
    List.findByIdAndRemove(check,function(err)
    {
        if(!err)
        {
            console.log("Successfully deleted");
            res.redirect("/");
        }
    })

}
