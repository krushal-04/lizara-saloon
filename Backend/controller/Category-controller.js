const Category = require("../model/Category");
const Service_Category=require("../model/Service_Category")


const getCategory = async (req, res, next) => {
    let Ser_Category;
    try {
        Ser_Category = await Category.find();
    } 
    catch (err) {
        return next(err);
    }
    if (!Ser_Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Ser_Category });
};
const getbyid = async (req, res, next) => {
    let Categorys;
    let id = req.body.id;
    console.log(id)
    try {
        Categorys = await Category.findById(id);
    } 
    catch (err) {
        return next(err);
    }
    if (!Categorys) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Categorys });
};
const getAllCategoryByid = async (req, res, next) => {
    let Category;
    let id = req.body.id;
    let Ser_Category;
    console.log(id)
    try {
        Category = await Service_Category.find();
         Ser_Category = Category.filter((item) => item?.Category_id ==  id);
    } 
    catch (err) {
        return next(err);
    }
    if (!Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Ser_Category });
};


const CreateCategory = async (req, res, next) => {
    console.log(req.body);
    const {name} = req.body;

    

    const Category1 = new Category({ name });

    try {
        await Category1.save();
        console.log("Category created successfully");
    } catch (err) {
        return next(err);
    }
    if (!Category1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Category1 });
};

exports.getCategory = getCategory;
exports. getbyid =  getbyid;
exports.getAllCategoryByid = getAllCategoryByid;
exports.CreateCategory = CreateCategory;
