import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import axios from "axios";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({ name: "", price: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editedService, setEditedService] = useState({ name: "", price: "", image: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const image = service.item ? `../images/${service.item.image}` : "";

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.post(`http://localhost:5050/Services/${id}`);
        console.log(response.data);
        setService(response.data);
        setEditedService(response.data);
      } catch (error) {
        console.error("Error fetching service details:", error);
        setSnackbar({ open: true, message: "Failed to fetch service details", severity: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  const handleUpdateService = async () => {
    try {
      await axios.put(`http://localhost:5050/Services/${id}`, editedService);
      setService(editedService);
      setOpenEditDialog(false);
      setSnackbar({ open: true, message: "Service updated successfully!", severity: "success" });
    } catch (error) {
      console.error("Error updating service:", error);
      setSnackbar({ open: true, message: "Failed to update service", severity: "error" });
    }
  };

  const handleDeleteService = async () => {
    try {
      await axios.delete(`http://localhost:5050/Services/${id}`);
      setOpenDeleteDialog(false);
      setSnackbar({ open: true, message: "Service deleted successfully!", severity: "success" });
      navigate("/services");
    } catch (error) {
      console.error("Error deleting service:", error);
      setSnackbar({ open: true, message: "Failed to delete service", severity: "error" });
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Card 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: "100%",
          gap: 4,
          padding: 3,
          boxShadow: 5,
          borderRadius: 4,
          backgroundColor: 'whitesmoke',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 10,
          },
        }}>
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: 300 },
            height: { xs: 'auto', md: 300 },
            borderRadius: 2,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          image={image}
          alt={service.item.name}
        />
        <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#002B5B', width: '2px' }} />

        <CardContent sx={{ flex: 1 }}>
          
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {service.item?.name || "Service Name"}
              </Typography>
          <Divider sx={{ marginY: 2, backgroundColor: '#002B5B' }} />
            
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Price: {service.item?.price || "N/A"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {service.item?.description || "No description available"}
          </Typography>
            <Divider sx={{ marginY: 2, backgroundColor: '#002B5B' }} />
          <Grid item>
              <Button
                onClick={() => setOpenEditDialog(true)}
                color="primary"
                sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}
              >
                Update<EditIcon />
              </Button>
              <Button
                onClick={() => setOpenDeleteDialog(true)}
                color="error"
                sx={{ "&:hover": { backgroundColor: "#ffebee" } }}
              >
                Delete <DeleteIcon />
              </Button>
            </Grid>
             
            
          <Button
            onClick={() => navigate("/admin/dashboard")}
            variant="outlined"
            color="secondary"
            sx={{
              marginTop: 2,
              '&:hover': {
                backgroundColor: "#e3f2fd",
                color: "#000",
                transform: "scale(1.02)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
              }
            }} >

            Cancel
          </Button>
         
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Service</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Service Name"
            fullWidth
            variant="outlined"
            value={editedService.name}
            onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
            value={editedService.price}
            onChange={(e) => setEditedService({ ...editedService, price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            variant="outlined"
            value={editedService.image}
            onChange={(e) => setEditedService({ ...editedService, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdateService} variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Delete Service</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this service?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDeleteService} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box >
  );
}
