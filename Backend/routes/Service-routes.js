const express = require("express");
const { getAllService,createService } = require("../controller/Service-controller");

const router=express.Router();

router.get("/",getAllService);
router.post("/service",createService);



module.exports=router;