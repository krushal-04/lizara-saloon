import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [newService, setNewService] = useState({  name: "", Service_Category: "", Category_id: "", price: "", image: "", description: ""  });
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5050/Services/");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddService = async () => {
    try {
      const response = await axios.post("http://localhost:5050/Services/service", newService);
      setServices(() => [ response.data]);
      setOpen(false);
      setNewService({ name: "", Service_Category: "", Category_id: "", price: "", image: "", description: "" });
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
      
        setNewService({ ...newService, image: file.name });
        console.log("Selected file:", file); 
      }
    };



  return (
    <Box sx={{ padding: 4 }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h4">Service List</Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Service
        </Button>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Service Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {services?.Service?.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>
                        <Link to={`/services/${service._id}`}>
                          <img
                            src={`../images/${service.image}`}
                            alt={service.name}
                            style={{ width: 100, height: 100, borderRadius: '1%', transition: 'transform 0.2s' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = '../images/default.png'; }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h6">{service.name}</Typography>
                      </TableCell>
                      <TableCell>₹{service.price}</TableCell>
                      <TableCell>
                        <Link to={`/services/${service._id}`}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{ marginRight: 1 }}
                          >
                            Edit
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Service</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Service Name"
            fullWidth
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Service_Category"
            fullWidth
            value={newService.Service_Category}
            onChange={(e) => setNewService({ ...newService, Service_Category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Category_id"
            fullWidth
            value={newService.Category_id}
            onChange={(e) => setNewService({ ...newService, Category_id: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price"
            fullWidth
            type="number"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          />
          <div>
            <TextField
              margin="dense"
              label="Image Name"
              fullWidth
              value={newService.image}
              InputProps={{
                readOnly: true, // Makes the TextField non-editable
              }}
            />
            <input
              accept="image/*" // Accept only image files
              style={{ display: "none" }}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button variant="contained" component="span" style={{ marginTop: 8 }}>
                Browse
              </Button>
            </label>
          </div>
          <TextField
            margin="dense"
            label="description"
            fullWidth
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddService} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
