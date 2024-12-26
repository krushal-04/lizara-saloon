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
  const [isHovered, setIsHovered] = useState({});

  useEffect(() => {
    setSelectedGender("Men")
    fetchData();
    fetchData3();
    // fetchData1();
    fetchData2();
  }, []);
  let globalId = categories?.id
  const fetchData = async () => {

    let id = globalId;
    try {
      const res3 = await
        axios.post("http://localhost:5050/Category/getserviceid", {
          id: id
        }).then((response) => {


          setServices(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

    try {
      const res2 = await
        axios.post("http://localhost:5050/Category/getCatid", {
          id: id
        }).then((response) => {


          setCategories(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

    setSelectedCategory("All Service");
  };
  const fetchData3 = async () => {

    let id = "676909a949a0a01675dda2cd";
    try {
      const res3 = await
        axios.post("http://localhost:5050/Category/getserviceid", {
          id: id
        }).then((response) => {


          setServices(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

    try {
      const res2 = await
        axios.post("http://localhost:5050/Category/getCatid", {
          id: id
        }).then((response) => {


          setCategories(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

    setSelectedCategory("All Service");
  };

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
  const fetchData2 = async () => {
    try {
      const res1 = await
        axios.get("http://localhost:5050/Category/").then((response) => {


          setSelectedGender(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const handleclick = async (category) => {
    console.log(category);
    let id = category._id;
    try {
      const res2 = await
        axios.post("http://localhost:5050/Services/getCatid", {
          catId: id
        }).then((response) => {


          setServices(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }

    setSelectedCategory(category.name);
  }
  // const handelallclick = async () => {

  //   fetchData();
  //   setSelectedCategory("All Service");
  // }
  const handlegender = async (category) => {
    //  let Men_id = "676909a949a0a01675dda2cd";
    console.log(category);
    let id = category._id;
    try {
      const res2 = await
        axios.post("http://localhost:5050/Category/getCatid", {
          id: id
        }).then((response) => {


          setCategories(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
    try {
      const res2 = await
        axios.post("http://localhost:5050/Category/getserviceid", {
          id: id
        }).then((response) => {


          setServices(response.data);
          console.log(response.data);
          setLoading(false);
        })
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }


    setSelectedCategory("All Service");



  };


  const addToCart = (service) => {
    const existingItem = cart.find((item) => item._id === service._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === service._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
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
          item._id === serviceId
            ? {
              ...item,
              quantity: Math.max((item.quantity || 1) + increment, 0)
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter((item) => item._id !== serviceId));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}  >
          <ToggleButtonGroup
            value={selectedGender}
            exclusive
            aria-label="Gender Toggle"
          >
            {
              selectedGender?.Ser_Category?.map((item) => {
                console.log(item);
                return (
                  <ToggleButton 
                  key={item.name} 
                  onClick={() => { handlegender(item) }} 
                  value={item.name} 
                  aria-label={item.name}
                  sx={{
                 
                  
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      transform: "scale(1.05)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                    
                  }}>
                    {item.name}
                  </ToggleButton>
                );
              })
            }


          </ToggleButtonGroup>
          <Box display="flex" justifyContent="center" mt={0}>
            <Typography variant="h4"
              sx={{
                fontWeight: 600,
                textTransform: "uppercase",
                color: "primary.main",
                textAlign: "center",
                mt: 2,
                }}>
              {selectedCategory === "All" ? "All Services" : selectedCategory}
            </Typography></Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Select a service
              </Typography>
              <List>
                <ListItem button onClick={fetchData}
                  sx={{
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      transform: "scale(1.05)",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}>
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
                    onClick={() => handleclick(category)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        transform: "scale(1.05)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
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
          {services?.Service?.map((service) => (
            <Card
              key={service._id}
              sx={{ mb: 2, display: "flex", flexDirection: "row", border: "2px solid #ddd", height: 250 }}
            >
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
              <CardContent sx={{ flex: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="h9" sx={{ mb: 1 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body1" paddingTop={4} sx={{ mb: 1 }}>
                    Price: ₹{service.price}
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{
                    mt: 2,
                    transition: "revert-layer",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => addToCart(service)}
                >
                  Add
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShoppingCartIcon /> Cart ({cart.length} items)
              </Typography>
              {cart.length > 0 ? (
                <>
                  <Box sx={{ maxHeight: '400px', overflowY: 'auto', mb: 2 }}>
                    {cart.map((item) => (
                      <Box
                        key={item._id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                          p: 1,
                          border: '1px solid #eee',
                          borderRadius: 1,
                          '&:hover': {
                            backgroundColor: '#f5f5f5'
                          }
                        }}
                      >
                        <img
                          src={`./images/${item.image}`}
                          alt={item.name}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 8,
                            marginRight: 10,
                            border: "1px solid #ddd",
                          }}
                        />
                        <Box flex={1}>
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ₹{item.price} × {item.quantity || 1}
                          </Typography>
                          <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                            ₹{item.price * (item.quantity || 1)}
                          </Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                          <Box display="flex" alignItems="center" sx={{ backgroundColor: '#f5f5f5', borderRadius: 1, p: 0.5 }}>
                            <IconButton
                              onClick={() => updateCartQuantity(item._id, -1)}
                              size="small"
                              color="primary"
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography sx={{ mx: 1, minWidth: '20px', textAlign: 'center' }}>
                              {item.quantity || 1}
                            </Typography>
                            <IconButton
                              onClick={() => updateCartQuantity(item._id, 1)}
                              size="small"
                              color="primary"
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                          <IconButton
                            onClick={() => removeFromCart(item._id)}
                            size="small"
                            color="error"
                            sx={{ p: 0.5 }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Divider />
                  <Box sx={{ mt: 2, mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <span>Subtotal:</span>
                      <span>₹{totalPrice}</span>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'space-between', color: 'primary.main', fontWeight: 'bold' }}>
                      <span>Total:</span>
                      <span>₹{totalPrice}</span>
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: "bold",
                      backgroundColor: "#1976d2",
                      "&:hover": {
                        backgroundColor: "#005bb5",
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      },
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </>
              ) : (
                <Box sx={{
                  textAlign: 'center',
                  py: 4,
                  color: 'text.secondary'
                }}>
                  <ShoppingCartIcon sx={{ fontSize: 40, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1" gutterBottom>
                    Your cart is empty
                  </Typography>
                  <Typography variant="body2">
                    Add services to get started
                  </Typography>
                </Box>
              )}
              <Divider sx={{ my: 3 }} />
              <Typography variant="h6" gutterBottom>UC Promise</Typography>
              <List sx={{ p: 0 }}>
                {['Verified Professionals', 'Hassle-Free Booking', 'Transparent Pricing'].map((text) => (
                  <ListItem key={text} sx={{ px: 0, py: 0.5 }}>
                    <CheckCircleIcon fontSize="small" sx={{ mr: 1, color: 'success.main' }} />
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicePage;