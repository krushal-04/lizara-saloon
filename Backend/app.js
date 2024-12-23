const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const router1 = require("./routes/item-routes");
const router2 = require("./routes/book-routes");
const router3 = require("./routes/Service_Category-routes");
const router4 = require("./routes/Service-routes");
const router5 = require("./routes/Category-routes");
const multer = require('multer');
const path = require('path');
const cors = require("cors");
const fs = require('fs'); // Import the fs module

const app = express();
app.use(cors());

// Ensure the 'uploads' folder exists
// const uploadFolder = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder); // Create the 'uploads' folder if it doesn't exist
// }

// // Set up multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadFolder); // Save the file to the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Unique file name using timestamp
//   }
// });

// const upload = multer({ storage });

// // API endpoint for file upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ message: 'No image uploaded' });
//   }
//   console.log('Received file:', req.file);
//   console.log('Form data:', req.body);

//   // Respond with the uploaded file's information
//   res.json({
//     message: 'File uploaded successfully',
//     file: req.file,
//     name: req.body.name,
//     email: req.body.email,
//   });
// });

// Use express to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://system:manager@cluster0.kjg58.mongodb.net/", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5050, () => console.log("Connected to port 5050")))
  .catch((err) => console.log(err));

// Use the routes
app.use("/users", router);
app.use("/items", router1);
app.use("/booking", router2);
app.use("/Service_Cat", router3);
app.use("/Services", router4);
app.use("/Category", router5);
