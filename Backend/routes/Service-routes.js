const express = require("express");
const { getAllService,createService,getserviceById,getAllServiceByCatid } = require("../controller/Service-controller");

const router=express.Router();

router.get("/",getAllService);
router.post("/getCatid",getAllServiceByCatid);
router.post("/create",createService);
router.post("/:id",getserviceById)



module.exports=router;