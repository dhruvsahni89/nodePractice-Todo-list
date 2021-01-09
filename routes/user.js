
const express = require('express');
const router = express.Router();
const usercontroller=require('../controller/user.js');


router.get("/",usercontroller.homepage);

module.exports=router;