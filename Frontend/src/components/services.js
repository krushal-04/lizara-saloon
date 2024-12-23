import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const menServices = [
  { title: "Packages", icon: "📦" },
  { title: "Haircut & Beard Styling", icon: "✂" },
  { title: "Massage", icon: "💆‍♂" },
  { title: "Detan", icon: "🧖" },
];

const smallMenCards = [
  { title: "Haircut", price: "₹200" },
  { title: "Beard Trim", price: "₹150" },
  { title: "Head Massage", price: "₹250" },
];

const womenServices = [
  { title: "Manicure & Pedicure", icon: "💅" },
  { title: "Hair Color", icon: "🎨" },
  { title: "Facial & Cleanup", icon: "🧴" },
  { title: "Massage", icon: "💆‍♀" },
];

const smallWomenCards = [
  { title: "Manicure", price: "₹300" },
  { title: "Pedicure", price: "₹350" },
  { title: "Hair Wash", price: "₹150" },
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
  const smallCards = gender === "men" ? smallMenCards : smallWomenCards;
  const packages = gender === "men" ? menPackages : womenPackages;

  return (
    <Box sx={{ padding: 4 }}>
      {/* Gender Toggle */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
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

      <Grid container spacing={4}>
        {/* Services Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" mb={2} fontWeight="bold">
            {gender === "men" ? "Men's Services" : "Women's Services"}
          </Typography>
          <Box display="flex">
            {/* Large Cards for Services */}
            <Box flex={1}>
              {services.map((service) => (
                <Card
                  key={service.title}
                  variant="elevation"
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
            {/* Small Cards */}
            <Box flex={1} pl={2}>
              {smallCards.map((card) => (
                <Card
                  key={card.title}
                  variant="outlined"
                  sx={{
                    marginBottom: 2,
                    padding: 2,
                    ":hover": { boxShadow: 3 },
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.price}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Packages Section */}
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
