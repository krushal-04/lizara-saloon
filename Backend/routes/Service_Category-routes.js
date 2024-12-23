const express = require("express");
const { getAllSerCategory,createCategory,getAllSerCategorybyid } = require("../controller/Sevice_Category-controller");


const router=express.Router();

router.get("/",getAllSerCategory);
router.post("/",getAllSerCategorybyid);
router.post("/Category",createCategory);



module.exports=router;