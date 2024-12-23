import React from "react";
import { Box, Typography, Grid, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position:"static",
        backgroundColor: "black",
        color: "white",
        py: 6,
        px: 3,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Lizara Saloon
            </Typography>
            <Typography variant="body2" color="gray">
              Premium grooming services for the modern gentleman. Experience the
              art of barbering at its finest.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Hours
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <AccessTimeIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">Mon - Fri: 9:00 AM - 8:00 PM</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <AccessTimeIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">Sat: 9:00 AM - 6:00 PM</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">Sun: 10:00 AM - 4:00 PM</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Contact
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">123 Style Street, Fashion City</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1, color: "gray" }} />
              <Typography variant="body2">(555) 123-4567</Typography>
            </Box>
            <Box mt={2}>
              <IconButton href="#" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "gray", my: 4 }} />
        <Box textAlign="center">
          <Typography variant="body2" color="gray">
            © 2024 Lizara Saloon. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
