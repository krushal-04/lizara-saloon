import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const AddServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    service_category: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission logic (e.g., sending data to the backend)
    console.log(formData);
    // After submitting, you can reset the form if needed
    setFormData({
      name: '',
      service_category: '',
      price: '',
      description: '',
      image: null
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add New Service
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ width: '100%' }}>
          <TextField
            label="Service Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Service Category"
            name="service_category"
            variant="outlined"
            fullWidth
            value={formData.service_category}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            variant="outlined"
            fullWidth
            value={formData.price}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {formData.image && (
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
              {formData.image.name}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Add Service
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddServices;
