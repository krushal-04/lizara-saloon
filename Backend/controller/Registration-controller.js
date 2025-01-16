const  User= require("../model/Registration");
const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lizarasalon@gmail.com',
    pass: 'cjpk jwpu bvqo plqm',
  },
});

// Send confirmation email function
const sendConfirmationEmail = (email,firstname,lastname) => {
  const mailOptions = {
    from: 'lizarasalon@gmail.com',
    to: email,
    subject: 'Successfully Registered - Lizara Saloon',
    text: `Congratulations, ${firstname}!\n\nYou have successfully registered with Lizara Saloon.\n\nHere are your registration details:\n\nName: ${firstname}\nEmail: ${email}\n\nWe are excited to have you with us!`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7;">
          <table role="presentation" style="width: 100%; background-color: #ffffff; padding: 20px;">
            <tr>
              <td style="text-align: center; padding-bottom: 20px;">
                <img src="cid:companyLogo" alt="Lizara Saloon Logo" style="max-width: 200px;"/>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <h1 style="color: #333; font-size: 24px; text-align: center;">Welcome to Lizara Saloon, ${firstname}!</h1>
                <p style="font-size: 16px; color: #555; text-align: center;">Congratulations! You have successfully registered with us.</p>
                <p style="font-size: 16px; color: #555;">
                  <strong>Your Registration Details:</strong><br>
                  <strong>Name:</strong> ${firstname} ${lastname}<br>
                  <strong>Email:</strong> ${email}<br><br>
                  We are thrilled to have you as a part of our community. Stay tuned for the latest updates and offers from Lizara Saloon!
                </p>
                
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 20px; background-color: #333; color: #fff; font-size: 14px;">
                <p>&copy; 2025 Lizara Saloon. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
      attachments: [
        {
            filename: 'logo.png',
            path: './images/LS123.png',
            cid: 'companyLogo' // This is used in the src attribute to display the image inline.
        }
    ]
    
};


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};


const sendProfileUpdateEmail = (email, firstname) => {
  const mailOptions = {
    from: 'lizarasalon@gmail.com',
    to: email,
    subject: 'Profile Updated Successfully - Lizara Saloon',
    text: `Hi ${firstname},\n\nYour profile has been successfully updated.\n\nIf you did not make these changes, please contact us immediately.\n\nThank you,\nLizara Saloon`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f7f7f7;">
          <table role="presentation" style="width: 100%; background-color: #ffffff; padding: 20px;">
            <tr>
              <td style="padding: 20px;">
                <h1 style="color: #333; font-size: 24px; text-align: center;">Profile Updated Successfully</h1>
                <p style="font-size: 16px; color: #555; text-align: center;">Hi ${firstname},</p>
                <p style="font-size: 16px; color: #555; text-align: center;">Your profile information has been updated.</p>
                <p style="font-size: 14px; color: #555; text-align: center;">If you did not make this change, please contact us immediately on Phone number: +91 90909 80808 or email lizarasalon@gmail.com.</p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 20px; background-color: #333; color: #fff; font-size: 14px;">
                <p>&copy; 2025 Lizara Saloon. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Profile update email sent: ' + info.response);
    }
  });
};



const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return next(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ users });
};

const registerUsers = async (req, res, next) => {
    console.log(req.body);
    const { firstname,lastname, email, password} = req.body;
    let user=await User.findOne({email});
    if(user){
      return res.status(409).json({ message: "Email already exists" });
    }


    const Registration1 = new User({ firstname,lastname, email, password});
    
    try {
        await Registration1.save();
        sendConfirmationEmail(email,firstname,lastname);
        console.log("Registration successfully");
    } catch (err) {
        return next(err);
    }
    if (!Registration1) {
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ Registration1 });
};


const getuserById = async (req, res, next) => {
    let userId = req.params.id;
    let user;
    try {
        user = await User.findById(userId);
    } 
    catch (err) {
        return next(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ user });

}


const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found. Please register first.' });
    }

    // Check if the entered password matches the password in the database (in plain text)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password. Please try again.' });
    }

    // If login is successful, respond with a success message
    res.status(200).json({
      message: 'Login successful',
      value: user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const { firstname, lastname, email,password } = req.body.editedData;
  console.log(req.body)

  try {
    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstname, lastname, email, password },
      { new: true, runValidators: true } // Ensure updated document is returned
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    sendProfileUpdateEmail(updatedUser.email, updatedUser.firstname);
    return res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to update user', error: err.message });
  }
};

exports.getAllUsers = getAllUsers;
exports.registerUsers = registerUsers;
exports.loginUsers=loginUsers;
exports.getuserById=getuserById;
exports.updateUser = updateUser;
