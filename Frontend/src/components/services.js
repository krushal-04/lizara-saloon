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

      let id = "676909a949a0a01675dda2cd";

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

      setSelectedCategory();
    };

    fetchData();
    // fetchData1();
    fetchData2();
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
  const handelallclick = async () => {

    fetchData1();
    setSelectedCategory("All Service");
  }
  const handlegender = async (category) => {
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
    setServices({})
    setSelectedCategory();

    // console.log('Men selected');

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
          <ToggleButtonGroup
            value={selectedGender}
            exclusive
            //  onChange={handleGenderChange}
            aria-label="Gender Toggle"
          >


            {
              selectedGender?.Ser_Category?.map((item) => {
                console.log(item);
                return (
                  <ToggleButton key={item.name} onClick={() => { handlegender(item) }} value={item.name} aria-label={item.name}>
                    {item.name}
                  </ToggleButton>
                );
              })
            }

            {/* <ToggleButton value="Men" aria-label="Men">
              Men
            </ToggleButton>
            <ToggleButton value="Women" aria-label="Women">
              Women
            </ToggleButton> */}
          </ToggleButtonGroup>
          <Box display="flex" justifyContent="center" mt={0}>
            <Typography variant="h4">
              {selectedCategory === "All" ? "All Services" : selectedCategory}
            </Typography></Box>
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
                    onClick={() => handleclick(category)}                  >
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
              <Card key={service.id} sx={{ mb: 2, display: "flex", flexDirection: "row", border: "2px solid #ddd", height: 250 }}>
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
                      transition: 'revert-layer',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        transform: 'scale(1.05)',
                      },
                    }}
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