const express = require("express");
const { getAllSerCategory,createCategory,getAllSerCategorybyid,getAllServiceByCatid } = require("../controller/Sevice_Category-controller");


const router=express.Router();

router.get("/",getAllSerCategory);
router.post("/",getAllSerCategorybyid);
router.post("/getCatid",getAllServiceByCatid);
router.post("/create",createCategory);



module.exports=router;