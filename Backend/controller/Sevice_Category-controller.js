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


const createCategory = async (req, res, next) => {
    console.log(req.body);
    const {name, Category_name, image,desc} = req.body;

    

    const Category1 = new Service_Category({ name, Category_name, image,desc });

    try {
        await Category1.save();
        console.log("Items created successfully");
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
