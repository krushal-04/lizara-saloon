const user = require("../model/user");
const { validate, ValidationError, Joi } = require('express-validation')



// Email validation pattern (regex)
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await user.find();
    } catch (err) {
        return next(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ users });
};

const createUsers = async (req, res, next) => {
    console.log(req.body);
    const { name, email, password , mobileNo} = req.body;

    // Email validation check
    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    if (!name) {
        return res.status(400).json({ message: "No found Name" });
    }

    const user1 = new user({ name, email, password ,mobileNo});

    try {
        await user1.save();
        console.log("User created successfully");
    } catch (err) {
        return next(err);
    }
    if (!user1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ user1 });
};

exports.getAllUsers = getAllUsers;
exports.createUsers = createUsers;
