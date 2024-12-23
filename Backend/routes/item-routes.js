const express = require("express");
const { getAllItems,createItem,getAllServiceByCatid } = require("../controller/item-controller");

const router=express.Router();

router.get("/",getAllItems);
router.post("/getCatid",getAllServiceByCatid);
router.post("/create",createItem);



module.exports=router;