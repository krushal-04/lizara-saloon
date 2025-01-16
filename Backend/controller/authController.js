const Admin = require('../model/admin');
const jwt = require('jsonwebtoken');



// Register new Admin
exports.registerAdmin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Check if the admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create a new admin instance
    admin = new Admin({ email, password });

    // Save the admin to the database
    await admin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the admin exists
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      'your_secret_key', // Secret key, keep this private
      { expiresIn: '1h' } // Set the expiration time
    );
    res.status(200).json({ message: 'Login successful',
      token: token,
     });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
