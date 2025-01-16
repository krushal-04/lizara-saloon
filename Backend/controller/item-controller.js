const items = require("../model/items");


const getAllItems = async (req, res, next) => {
    let item;
    try {
        item = await items.find();
    } 
    catch (err) {
        return next(err);
    }
    if (!item) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ item });
};
const getitemById = async (req, res, next) => {
    let itemId = req.params.id;
    let item;
    try {
        item = await items.findById(itemId);
    } 
    catch (err) {
        return next(err);
    }
    if (!item) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ item });

}

const getAllServiceByCatid = async (req, res, next) => {
    let Category;
    let id = req.body.id;
    let filteredCategory
    console.log(id)
    try {
        Category = await items.find();
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
const createItem = async (req, res, next) => {
    console.log(req.body);
    const {image,name, price , is_active , desc,Detail, Category_name ,Category_id,rating} = req.body;

    

    const Items1 = new items({ image,name, price , is_active , desc,Detail, Category_name,Category_id,rating });

    try {
        await Items1.save();
        console.log("Items created successfully");
    } catch (err) {
        return next(err);
    }
    if (!Items1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Items1 });
};

exports.getAllItems = getAllItems;
exports.createItem = createItem;
exports.getAllServiceByCatid=getAllServiceByCatid;
exports.getitemById=getitemById;
