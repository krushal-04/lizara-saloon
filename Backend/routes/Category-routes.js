const express = require("express");
const { getCategory,CreateCategory,getbyid } = require("../controller/Category-controller");


const router=express.Router();

router.get("/",getCategory);
router.post("/",getbyid);
router.post("/Cat",CreateCategory);



module.exports=router;