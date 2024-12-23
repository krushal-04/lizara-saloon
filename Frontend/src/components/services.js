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
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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

const Services = () => {
  const [gender, setGender] = useState("men");
  const [cart, setCart] = useState([]);

  const handleGenderChange = (event, newGender) => {
    if (newGender) setGender(newGender);
  };

  const addToCart = (item) => {
    // Add service to cart only if it doesn't already exist
    setCart((prev) => {
      if (prev.some((cartItem) => cartItem.title === item.title)) {
        return prev; // Service already exists, no duplicates
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const services = gender === "men" ? menServices : womenServices;
  const smallCards = gender === "men" ? smallMenCards : smallWomenCards;

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
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={() => addToCart(card)}
                  >
                    Add Service
                  </Button>
                </Card>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Cart Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" mb={2} fontWeight="bold">
            Service Cart
          </Typography>
          <Box>
            {cart.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                variant="outlined"
                sx={{ marginBottom: 2, padding: 2, display: "flex", alignItems: "center" }}
              >
                <Box flex={1}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}
                  </Typography>
                </Box>
                <IconButton
                  color="error"
                  onClick={() => removeFromCart(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
            {cart.length === 0 && (
              <Typography color="text.secondary">Your cart is empty</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
