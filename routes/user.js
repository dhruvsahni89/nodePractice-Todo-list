
const express = require('express');
const router = express.Router();
const usercontroller=require('../controller/user.js');


router.get("/",usercontroller.homepage);
router.post("/",usercontroller.add);
router.post("/delete",usercontroller.delete);

module.exports=router;