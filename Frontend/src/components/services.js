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
  CircularProgress,
  Chip,
  Paper,
  Container,
  Rating,
  Badge,
  Fade,
  useTheme,
  useMediaQuery,
  Skeleton,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  AddShoppingCart as AddShoppingCartIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
  ShoppingCart as ShoppingCartIcon,
  CheckCircle as CheckCircleIcon,
  Delete as DeleteIcon,
  AccessTime as AccessTimeIcon,
  LocalOffer as LocalOfferIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const ServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State management
  const [services, setServices] = useState({});
  const [categories, setCategories] = useState({});
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedGender, setSelectedGender] = useState("Men");
  const [genderCategories, setGenderCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState("all");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Initial data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    const initializeData = async () => {
      try {
        await fetchGenderCategories();
        const menCategory = genderCategories.find(cat => cat.name === "Men");
        if (menCategory) {
          await handlegender(menCategory);
        }
      } catch (error) {
        console.error("Error initializing data:", error);
        showSnackbar("Error loading initial data", "error");
      } finally {
        setLoading(false);
      }
    };

    initializeData();
    return () => clearTimeout(timer);
  }, [genderCategories.length]);

  // Snackbar helper
  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({
      open: true,
      message,
      severity
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // API calls
  const fetchGenderCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5050/Category/");
      if (response.data?.Ser_Category) {
        setGenderCategories(response.data.Ser_Category);
      }
    } catch (error) {
      console.error("Error fetching gender categories:", error);
      showSnackbar("Error loading categories", "error");
    }
  };

  const fetchData = async () => {
    setSelectedItemId("all");  // Set selection to "all" when fetching data
    let id = categories?.id;
    try {
      const [servicesRes, categoriesRes] = await Promise.all([
        axios.post("http://localhost:5050/Category/getserviceid", { id }),
        axios.post("http://localhost:5050/Category/getCatid", { id })
      ]);

      setServices(servicesRes.data);
      setCategories(categoriesRes.data);
      setSelectedCategory("All Services");
    } catch (error) {
      console.error("Error fetching data:", error);
      showSnackbar("Error loading services", "error");
    }
  };

  const handleclick = async (category) => {
    setSelectedItemId(category._id);
    try {
      const response = await axios.post("http://localhost:5050/Services/getCatid", {
        catId: category._id
      });
      setServices(response.data);
      setSelectedCategory(category.name);
    } catch (error) {
      console.error("Error fetching category services:", error);
      showSnackbar("Error loading category services", "error");
    }
  };

  const handlegender = async (category) => {
    setLoading(true);
    try {
      const [categoriesResponse, servicesResponse] = await Promise.all([
        axios.post("http://localhost:5050/Category/getCatid", { id: category._id }),
        axios.post("http://localhost:5050/Category/getserviceid", { id: category._id })
      ]);

      setCategories(categoriesResponse.data);
      setServices(servicesResponse.data);
      setSelectedGender(category.name);
      setSelectedCategory("All Services");
    } catch (error) {
      console.error("Error fetching gender data:", error);
      showSnackbar("Error loading gender services", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleGenderChange = (event, newGender) => {
    if (newGender !== null) {
      const selectedCategory = genderCategories.find(
        (item) => item.name === newGender
      );
      if (selectedCategory) {
        handlegender(selectedCategory);
      }
    }
  };

  // Cart operations
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
    showSnackbar(`${service.name} added to cart`);
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
    const itemToRemove = cart.find(item => item._id === serviceId);
    setCart(cart.filter((item) => item._id !== serviceId));
    if (itemToRemove) {
      showSnackbar(`${itemToRemove.name} removed from cart`);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // Loading skeleton
  const LoadingSkeleton = () => (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
        <Grid item xs={12} md={6}>
          {[1, 2].map((i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Skeleton variant="rectangular" height={200} />
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={3}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
      </Grid>
    </Box>
  );

  if (showLoader) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          src="./images/LS123.png"
          alt="Loading..."
          style={{
            marginBottom: "20px",
            width: "100px",
            height: "100px",
            animation: "rotate 2s linear infinite",
          }}
        />
        <style>
          {`
            @keyframes rotate {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </Box>
    );
  }

  if (loading) return <LoadingSkeleton />;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Gender Toggle Section */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2, mb: 3, backgroundColor: 'transparent' }}>
            <ToggleButtonGroup
              value={selectedGender}
              exclusive
              onChange={handleGenderChange}
              aria-label="Gender Toggle"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1,
                '& .MuiToggleButton-root': {
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  border: `2px solid ${theme.palette.primary.main}`,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    }
                  }
                }
              }}
            >
              {genderCategories.map((item) => (
                <ToggleButton
                  key={item._id}
                  value={item.name}
                  aria-label={item.name}
                >
                  {item.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <Typography
              variant="h4"
              sx={{
                mt: 4,
                mb: 2,
                textAlign: 'center',
                fontWeight: 600,
                color: theme.palette.primary.main,
                textTransform: 'capitalize',
              }}
            >
              {selectedCategory}
            </Typography>
          </Paper>
        </Grid>

        {/* Categories Section */}
        <Grid item xs={12} md={3}>
        <Card elevation={3} sx={{
            position: 'sticky',
            top: 20,
            backgroundColor: 'white',
          }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Categories
              </Typography>
              <List sx={{ '& .MuiListItem-root': { mb: 1 } }}>
                <ListItem
                  button
                  onClick={fetchData}
                  selected={selectedItemId === "all"}
                  sx={{
                    borderRadius: 2,
                    transition: 'all 0.2s',
                    backgroundColor: selectedItemId === "all" ? 'black' : 'transparent',
                    color: selectedItemId === "all" ? 'white' : 'inherit',
                    '&:hover': {
                      backgroundColor: selectedItemId === "all" ? 'black' : 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      transform: 'translateX(8px)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="./images/LS.png"
                    alt="All Services"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      mr: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <ListItemText
                    primary="All Services"
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: selectedItemId === "all" ? 'white' : 'inherit'
                    }}
                  />
                </ListItem>

                {categories?.Ser_Category?.map((category) => (
                  <ListItem
                    button
                    key={category._id}
                    onClick={() => handleclick(category)}
                    sx={{
                      borderRadius: 2,
                      transition: 'all 0.2s',
                      backgroundColor: selectedItemId === category._id ? 'black' : 'transparent',
                      color: selectedItemId === category._id ? 'white' : 'inherit',
                      '&:hover': {
                        backgroundColor: selectedItemId === category._id ? 'black' : 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        transform: 'translateX(8px)',
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={`./images/${category.image}`}
                      alt={category.name}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '20%',
                        mr: 2,
                        objectFit: 'cover',
                      }}
                    />
                    <ListItemText
                      primary={category.name}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        color: selectedItemId === category._id ? 'white' : 'inherit'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {services?.Service?.map((service) => (
              <Fade in key={service._id}>
                <Card
                  elevation={2}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', sm: '200px' },
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'grey.50'
                    }}
                  >
                    <Box
                      component="img"
                      src={`./images/${service.image}`}
                      alt={service.name}
                      sx={{
                        width: 200,
                        height: 200,
                        objectFit: '-moz-initial',
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" gutterBottom fontWeight={600}>
                        {service.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {service.description}
                      </Typography>
                    </Box>

                      <Rating value={4.5} readOnly precision={0.5} size="small" sx={{ mb: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      
                      <Chip
                        icon={<LocalOfferIcon />}
                        label={`₹${service.price}`}
                        color="primary"
                        size="small"
                      />
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addToCart(service)}
                      sx={{
                        textTransform: 'none',
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </Box>
        </Grid>

        {/* Cart Section */}
        <Grid item xs={12} md={3}>
          <Card elevation={3} sx={{ position: 'sticky', top: 20 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Badge badgeContent={cart.length} color="primary" sx={{ mr: 1 }}>
                  <ShoppingCartIcon color="primary" />
                </Badge>
                <Typography variant="h6" fontWeight={600}>
                  Your Cart
                </Typography>
              </Box>

              {cart.length > 0 ? (
                <>
                  <Box sx={{ maxHeight: 400, overflowY: 'auto', mb: 2 }}>
                    {cart.map((item) => (
                      <Paper
                        key={item._id}
                        elevation={0}
                        sx={{
                          p: 1.5,
                          mb: 1.5,
                          backgroundColor: 'grey.50',
                          borderRadius: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Box
                            component="img"
                            src={`./images/${item.image}`}
                            alt={item.name}
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 1,
                              objectFit: 'cover',
                            }}
                          />
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              ₹{item.price} × {item.quantity || 1}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                              <IconButton
                                size="small"
                                onClick={() => updateCartQuantity(item._id, -1)}
                              >
                                <RemoveIcon fontSize="small" />
                              </IconButton>
                              <Typography sx={{ mx: 1 }}>
                                {item.quantity || 1}
                              </Typography>
                              <IconButton
                                size="small"
                                onClick={() => updateCartQuantity(item._id, 1)}
                              >
                                <AddIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                color="error"
                                onClick={() => removeFromCart(item._id)}
                                sx={{ ml: 'auto' }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </Box>
                        </Box>
                      </Paper>
                    ))}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography color="text.secondary">Subtotal</Typography>
                      <Typography fontWeight={500}>₹{totalPrice}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="h6" fontWeight={600}>Total</Typography>
                      <Typography variant="h6" fontWeight={600} color="primary">
                        ₹{totalPrice}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      textTransform: 'none',
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    Proceed to Checkout
                  </Button>
                </>
              ) : (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <ShoppingCartIcon
                    sx={{ fontSize: 48, color: 'grey.300', mb: 2 }}
                  />
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Your cart is empty
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add services to get started
                  </Typography>
                </Box>
              )}

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom fontWeight={600}>
                Our Promise
              </Typography>
              <List disablePadding>
                {[
                  'Verified Professionals',
                  'Hassle-Free Booking',
                  'Transparent Pricing',
                  '100% Satisfaction Guaranteed'
                ].map((text) => (
                  <ListItem key={text} sx={{ px: 0, py: 0.5 }}>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ mr: 1, color: 'success.main' }}
                    />
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        variant: 'body2',
                        color: 'text.secondary',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicePage;
