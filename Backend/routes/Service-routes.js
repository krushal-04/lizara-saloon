const express = require("express");
const { getAllService,createService,getAllServiceByCatid } = require("../controller/Service-controller");

const router=express.Router();

router.get("/",getAllService);
router.post("/getCatid",getAllServiceByCatid);
router.post("/service",createService);




module.exports=router;