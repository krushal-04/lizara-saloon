const express = require("express");
const { getAllItems,createItem,getAllServiceByCatid,getitemById } = require("../controller/item-controller");

const router=express.Router();

router.get("/",getAllItems);
router.get("/:id",getitemById);
router.post("/getCatid",getAllServiceByCatid);
router.post("/create",createItem);



module.exports=router;