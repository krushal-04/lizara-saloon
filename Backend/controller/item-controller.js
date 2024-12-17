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

const createItem = async (req, res, next) => {
    console.log(req.body);
    const {image,name, price , is_active , desc, Category_name ,rating} = req.body;

    

    const Items1 = new items({ image,name, price , is_active , desc, Category_name,rating });

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
