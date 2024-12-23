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
const getAllServiceByCatid = async (req, res, next) => {
    let Category;
    let id = req.body.id;
    console.log(id)
    try {
        Category = await items.findById(id);
    } 
    catch (err) {
        return next(err);
    }
    if (!Category) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Category });
};
const createItem = async (req, res, next) => {
    console.log(req.body);
    const {image,name, price , is_active , desc, Category_name ,Category_id,rating} = req.body;

    

    const Items1 = new items({ image,name, price , is_active , desc, Category_name,Category_id,rating });

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
