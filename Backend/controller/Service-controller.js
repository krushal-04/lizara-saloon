const Services= require("../model/Service");


const getAllService = async (req, res, next) => {
    let Service;
    try {
        Service = await Services.find();
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
