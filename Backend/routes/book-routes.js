const express = require("express");
const { getAllBooking,createbooking } = require("../controller/book-controller");

const router=express.Router();

router.get("/",getAllBooking);
router.post("/booking",createbooking);



module.exports=router;