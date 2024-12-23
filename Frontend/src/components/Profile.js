import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function Profile() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditing, setIsEditing] = useState(false); // Dialog state
  const [tempUsername, setTempUsername] = useState(username); // Temporary data
  const [tempEmail, setTempEmail] = useState(email);

  // Open edit dialog
  const handleEdit = () => {
    setTempUsername(username);
    setTempEmail(email);
    setIsEditing(true);
  };

  // Handle save changes
  const handleSave = () => {
    setUsername(tempUsername);
    setEmail(tempEmail);
    setIsEditing(false);
  };

  // Handle cancel changes
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #6a11cb, #2575fc)",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 4,
          overflow: "hidden",
          background: "white",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            padding: 2,
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="./images/profile1.jpg"
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              border: "4px solid white",
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            {username}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            {email}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ px: 3 }}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onClose={handleCancel}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
