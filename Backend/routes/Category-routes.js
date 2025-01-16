const express = require("express");
const { getCategory,CreateCategory,getbyid,getAllServiceByid,getAllCategoryByid } = require("../controller/Category-controller");


const router=express.Router();

router.get("/",getCategory);
router.post("/",getbyid);
router.post("/getCatid",getAllCategoryByid);
router.post("/getserviceid",getAllServiceByid);
router.post("/create",CreateCategory);



module.exports=router;