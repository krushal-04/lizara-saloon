// import React, { useState } from 'react';
// // import './Form.css';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare form data
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     if (image) {
//       formData.append('image', image); // 'image' is the key, and `image` is the file object
//     }

//     try {
//       // Send the form data (including the image) to the backend
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       // Handle the response from the server
//       const data = await response.json();
//       console.log('Form submitted successfully:', data);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="image-container">
//         <img src="https://via.placeholder.com/400" alt="Form Image" className="form-image" />
//       </div>
//       <div className="form-content">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit} className="form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="image">Upload Image</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>
//           <button type="submit" className="submit-btn">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
