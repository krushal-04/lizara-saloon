import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  TextField,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const menServices = [
  { title: "Packages", icon: "📦" },
  { title: "Haircut & Beard Styling", icon: "✂⃣" },
  { title: "Massage", icon: "💆‍♂⃣" },
  { title: "Detan", icon: "🧖" },
];

const womenServices = [
  { title: "Manicure & Pedicure", icon: "💅" },
  { title: "Hair Color", icon: "🎨" },
  { title: "Facial & Cleanup", icon: "🧴" },
  { title: "Massage", icon: "💆‍♀⃣" },
];

const menPackages = [
  {
    title: "Grooming Essentials",
    price: "₹557",
    duration: "1 hr 55 mins",
    details: "Haircut, Beard Grooming, Head Massage",
  },
];

const womenPackages = [
  {
    title: "Cut & Color",
    price: "₹508",
    duration: "1 hr",
    details: "Haircut & Hair Color",
  },
];

const Services = () => {
  const [gender, setGender] = useState("men");

  const handleGenderChange = (event, newGender) => {
    if (newGender) setGender(newGender);
  };

  const services = gender === "men" ? menServices : womenServices;
  const packages = gender === "men" ? menPackages : womenPackages;

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header with Search */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <TextField
          variant="outlined"
          placeholder="Search "
          size="small"
          InputProps={{ startAdornment: <SearchIcon /> }}
        />
        <ToggleButtonGroup
          value={gender}
          exclusive
          onChange={handleGenderChange}
          aria-label="gender selection"
        >
          <ToggleButton value="men">Men</ToggleButton>
          <ToggleButton value="women">Women</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Main Layout */}
      <Grid container spacing={4}>
        {/* Services */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" mb={2} fontWeight="bold">
            {gender === "men" ? "Men's Services" : "Women's Services"}
          </Typography>
          <Box>
            {services.map((service) => (
              <Card
                key={service.title}
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  marginBottom: 2,
                  cursor: "pointer",
                  ":hover": { boxShadow: 3 },
                }}
              >
                <Avatar sx={{ bgcolor: "primary.light", marginRight: 2 }}>
                  {service.icon}
                </Avatar>
                <Typography variant="body1">{service.title}</Typography>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Packages */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" mb={2} fontWeight="bold">
            {gender === "men" ? "Men's Packages" : "Women's Packages"}
          </Typography>
          <Box>
            {packages.map((pkg) => (
              <Card key={pkg.title} variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pkg.details}
                  </Typography>
                  <Typography variant="body1" mt={1} fontWeight="bold">
                    {pkg.price} • {pkg.duration}
                  </Typography>
                  <Button variant="contained" size="small" sx={{ mt: 2 }}>
                    Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
