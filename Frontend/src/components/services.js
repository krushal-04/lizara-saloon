import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ServicePage = () => {
  // Extended Services Data
  const services = [
    {
      id: 1,
      name: "Grooming essentials",
      price: 557,
      discount: 657,
      duration: "1 hr 5 mins",
      details: ["Haircut for men", "Beard trimming & styling", "Head massage (10 mins)"],
      category: "Packages",
      rating: 4.88,
      reviews: "909K",
      gender: "Men",
    },
    {
      id: 2,
      name: "Cut & color",
      price: 508,
      discount: 558,
      duration: "60 mins",
      details: ["Haircut for men", "Hair color (Garnier): Brown black (shade 3)"],
      category: "Haircut & beard styling",
      rating: 4.88,
      reviews: "538K",
      gender: "Men",
    },
    {
      id: 3,
      name: "Detan therapy",
      price: 399,
      discount: 499,
      duration: "45 mins",
      details: ["Full face detan", "Glow enhancement", "Relaxation therapy"],
      category: "Detan",
      rating: 4.72,
      reviews: "320K",
      gender: "Women",
    },
    {
      id: 4,
      name: "Facial & cleanup",
      price: 699,
      discount: 799,
      duration: "1 hr 15 mins",
      details: ["Deep cleansing facial", "Hydration therapy", "Acne control treatment"],
      category: "Facial & cleanup",
      rating: 4.85,
      reviews: "410K",
      gender: "Women",
    },
    // Add more services as needed
  ];

  // Categories
  const categories = ["All", "Packages", "Haircut & beard styling", "Massage", "Detan", "Facial & cleanup"];

  // State to manage cart, selected category, and gender
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("Men");

  // Add to cart function
  const addToCart = (service) => {
    const existingItem = cart.find((item) => item.id === service.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };

  // Update cart quantity
  const updateCartQuantity = (serviceId, increment) => {
    setCart(
      cart
        .map((item) =>
          item.id === serviceId
            ? { ...item, quantity: item.quantity + increment }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Filter services based on selected category and gender
  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "All" || service.category === selectedCategory) &&
      service.gender === selectedGender
  );

  return (
    <Box p={3}>
      <Grid container spacing={2}>
        {/* Gender Toggle */}
        <Grid item xs={12}>
          <ToggleButtonGroup
            value={selectedGender}
            exclusive
            onChange={(event, newGender) => setSelectedGender(newGender)}
            aria-label="Gender Toggle"
          >
            <ToggleButton value="Men" aria-label="Men">
              Men
            </ToggleButton>
            <ToggleButton value="Women" aria-label="Women">
              Women
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        {/* Left Section: Service Categories */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Select a service
              </Typography>
              <List>
                {categories.map((category, index) => (
                  <ListItem
                    button
                    key={index}
                    selected={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Middle Section: Packages */}
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            {selectedCategory === "All" ? "All Services" : selectedCategory}
          </Typography>
          {filteredServices.map((service) => (
            <Card key={service.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ⭐ {service.rating} ({service.reviews} reviews)
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  ₹{service.price}{" "}
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    ₹{service.discount}
                  </Typography>{" "}
                  • {service.duration}
                </Typography>
                <List>
                  {service.details.map((detail, i) => (
                    <ListItem key={i} sx={{ py: 0 }}>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{ mt: 2 }}
                  onClick={() => addToCart(service)}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Right Section: Cart */}
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <ShoppingCartIcon /> Cart
              </Typography>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <Box key={item.id} sx={{ mb: 2 }}>
                      <Typography variant="body1">{item.name}</Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ mt: 1 }}
                      >
                        <IconButton
                          onClick={() => updateCartQuantity(item.id, -1)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton
                          onClick={() => updateCartQuantity(item.id, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      
                    </Box>
                  ))}
                  <Divider />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Total: ₹{totalPrice}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Checkout
                  </Button>
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Your cart is empty.
                </Typography>
              )}
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6">UC Promise</Typography>
              <Typography variant="body2" color="text.secondary">
                <CheckCircleIcon fontSize="small" /> Verified Professionals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <CheckCircleIcon fontSize="small" /> Hassle-Free Booking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <CheckCircleIcon fontSize="small" /> Transparent Pricing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicePage;
