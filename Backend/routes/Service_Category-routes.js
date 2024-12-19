const express = require("express");
const { getAllSerCategory,createCategory } = require("../controller/Sevice_Category-controller");

const router=express.Router();

router.get("/",getAllSerCategory);
router.post("/Category",createCategory);



module.exports=router;