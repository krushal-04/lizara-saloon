const express = require("express");
const { getAllItems,createItem } = require("../controller/item-controller");

const router=express.Router();

router.get("/",getAllItems);
router.post("/pro",createItem);



module.exports=router;