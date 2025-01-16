const express = require("express");
const { getAllUsers,getuserById,registerUsers,loginUsers,updateUser } = require("../controller/Registration-controller");

const router=express.Router();

router.get("/",getAllUsers);
router.get("/:id",getuserById);
router.post("/register",registerUsers);
router.post("/login",loginUsers);
router.put("/:id",updateUser)




module.exports=router;