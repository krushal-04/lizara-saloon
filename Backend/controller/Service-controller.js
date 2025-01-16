const Services= require("../model/Service");


const getAllService = async (req, res, next) => {
    let Service;
    try {
        Service = await Services.find().populate({
            path: 'Service_Category',
            // select: 'name description' 
        })
        .populate({
            path: 'Category_id',
            // select: 'name' 
        });
    } 
    catch (err) {
        return next(err);
    }
    if (!Service) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Service });
};
const getAllServiceByCatid = async (req, res, next) => {
    let service;
    let catId = req.body.catId
    let Service=[];
    try {
        service = await Services.find();
        console.log(service)
        service.forEach((item)=>{
            if(item.Service_Category == catId){
                Service.push(item)}
                
        });
    } 
    catch (err) {
        return next(err);
    }
    if (!service) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ Service });
};
const getserviceById = async (req, res, next) => {
    let itemId = req.params.id;
    let item;
    try {
        item = await Services.findById(itemId)
            .populate({
                path: 'Service_Category',
                // select: 'name description' 
            })
            .populate({
                path: 'Category_id',
                // select: 'name' 
            });
    } catch (err) {
        console.error('Error occurred while fetching service:', err);
        return next(err); // Pass error to error handling middleware
    }

    if (!item) {
        return res.status(404).json({ message: "Service not found" });
    }

    return res.status(200).json({ item });
};


const createService = async (req, res, next) => {
    console.log(req.body);
    const {name, Service_Category,price, Category_id, image,description} = req.body;

    

    const Services1 = new Services({ name, Service_Category,Category_id,price, image,description });

    try {
        await Services1.save();
        console.log("Items created successfully");
    } catch (err) {
        return next(err);
    }
    if (!Services1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Services1 });
};

exports.getAllService = getAllService;
exports.createService = createService;
exports .getAllServiceByCatid = getAllServiceByCatid;
exports.getserviceById=getserviceById;
