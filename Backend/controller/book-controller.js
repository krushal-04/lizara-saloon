const Booking = require("../model/Booking");


const getAllBooking = async (req, res, next) => {
    let book;
    try {
        book = await Booking.find();
    } 
    catch (err) {
        return next(err);
    }
    if (!book) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ book });
};

const createbooking = async (req, res, next) => {
    console.log(req.body);
    const {name, Bookdate_from, Bookdate_to, user_id, item_id } = req.body;

    

    const Book1 = new Booking({ name, Bookdate_from, Bookdate_to, user_id, item_id });

    try {
        await Book1.save();
        console.log("Booking Done successfully");
    } catch (err) {
        return next(err);
    }
    if (!Book1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Book1 });
};

exports.getAllBooking = getAllBooking;
exports.createbooking = createbooking;
