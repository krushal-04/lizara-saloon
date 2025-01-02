const express = require("express");
const { getCategory,getcreate } = require("../controller/admin-controller");


const router=express.Router();

router.get("/",getCategory);
router.post("/create",getcreate);



module.exports=router;