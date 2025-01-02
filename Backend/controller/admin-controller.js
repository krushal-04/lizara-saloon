const admin = require("../model/admin");
// const Service_Category=require("../model/Service_Category")
// const Service = require("../model/Service");


const getCategory = async (req, res, next) => {
    let Ser_Category;
    try {
        Ser_Category = await admin.find();
    } 
    catch (err) {
        return next(err);
    }
  
    return res.status(200).json({ Ser_Category });
};
const getcreate = async (req, res, next) => {
    console.log(req.body);
    const {name,password} = req.body;

    

    const admin1 = new admin({ name,password});

    try {
        await admin1.save();
        console.log("Category created successfully");
    } catch (err) {
        return next(err);
    }
    if (!admin1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ admin1 });
};

exports.getCategory = getCategory;
exports.getcreate =  getcreate;