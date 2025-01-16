const Service_Category = require("../model/Service_Category");


const getAllSerCategory = async (req, res, next) => {
    let Ser_Category;
    try {
        Ser_Category = await Service_Category.find();
    } 
    catch (err) {
        return next(err);
    }
    if (!Ser_Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Ser_Category });
};
const getAllSerCategorybyid = async (req, res, next) => {
    let Ser_Category;
    let id = req.body.id;
    console.log(id)
    try {
        Ser_Category = await Service_Category.findById(id);
    } 
    catch (err) {
        return next(err);
    }
    if (!Ser_Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Ser_Category });
};
const getAllServiceByCatid = async (req, res, next) => {
    let Category;
    let id = req.body.id;
    let filteredCategory
    console.log(id)
    try {
        Category = await Service_Category.find();
         filteredCategory = Category.filter((item) => item?.Category_id ==  id);
    } 
    catch (err) {
        return next(err);
    }
    if (!Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ filteredCategory });
};

const createCategory = async (req, res, next) => {
    console.log(req.body);
    const {name, Category_name,Category_id, image} = req.body;

    

    const Category1 = new Service_Category({ name, Category_name,Category_id, image});

    try {
        await Category1.save();
        console.log("Service Category created successfully");
    } catch (err) {
        return next(err);
    }
    if (!Category1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Category1 });
};

exports.getAllSerCategory = getAllSerCategory;
exports.getAllSerCategorybyid = getAllSerCategorybyid;
exports.createCategory = createCategory;
exports.getAllServiceByCatid=getAllServiceByCatid;
