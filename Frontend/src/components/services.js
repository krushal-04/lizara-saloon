import React, { useState, useEffect } from "react";
import axios from "axios";
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
import DeleteIcon from "@mui/icons-material/Delete";

const ServicePage = () => {
  const [services, setServices] = useState({});
  const [categories, setCategories] = useState({});
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("Men");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("http://localhost:5050/Service_Cat").then((response) => {
          setCategories(response.data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      await axios.get("http://localhost:5050/Services/").then((response) => {
        setServices(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

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

  const updateCartQuantity = (serviceId, increment) => {
    setCart(
      cart
        .map((item) =>
          item.id === serviceId
            ? { ...item, quantity: item.quantity + increment }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item.id !== serviceId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const handleCategoryClick = async (category) => {
    try {
      await axios
        .post("http://localhost:5050/Services/getCatid", { catId: category._id })
        .then((response) => {
          setServices(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
    setSelectedCategory(category.name);
  };

  const handleAllClick = async () => {
    fetchData1();
    setSelectedCategory("All Services");
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <ToggleButtonGroup
              value={selectedGender}
              exclusive
              onChange={(event, newGender) => setSelectedGender(newGender)}
              aria-label="Gender Toggle"
              style={{ flexShrink: 0 }}
            >
              <ToggleButton value="Men" aria-label="Men">
                Men
              </ToggleButton>
              <ToggleButton value="Women" aria-label="Women">
                Women
              </ToggleButton>
            </ToggleButtonGroup>

            <Box flexGrow={1} />

            <Typography variant="h4" gutterBottom textAlign="center" style={{ flexGrow: 1 }}>
              {selectedCategory === "All" ? "All Services" : selectedCategory}
            </Typography>

            <Box flexGrow={1} />
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Select a service
              </Typography>
              <List>
                <ListItem button onClick={handleAllClick}>
                  <img
                    src={`./images/profile1.jpg`}
                    alt="All Services"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      marginRight: 10,
                    }}
                  />
                  <ListItemText primary={"All Services"} />
                </ListItem>
                {categories?.Ser_Category?.map((category, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <img
                      src={`./images/${category.image}`}
                      alt={category.name}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        marginRight: 10,
                      }}
                    />
                    <ListItemText primary={category.name} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          {services?.Service?.map((service) => {

            return (
              <Card key={service.id} sx={{ mb: 2, display: "flex", flexDirection: "row" , border: "2px solid #ddd" }}>
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: "1px solid #ddd",
                  }}
                >
                  <img
                    src={`./images/${service.image}`}
                    alt={service.name}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "1%",
                      marginBottom: 8,
                    }}
                  />
                  <Typography variant="h6" textAlign="center">
                    {service.name}
                  </Typography>
                </CardContent>

                <CardContent sx={{ flex: 2 }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    ₹{service.price}
                  </Typography>
                  
                   
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
            );
          })}
        </Grid>

        <Grid item xs={12} md={3}>
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
                        <IconButton onClick={() => updateCartQuantity(item.id, -1)}>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton onClick={() => updateCartQuantity(item.id, 1)}>
                          <AddIcon />
                        </IconButton>
                        <IconButton onClick={() => removeFromCart(item.id)}>
                          <DeleteIcon />
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