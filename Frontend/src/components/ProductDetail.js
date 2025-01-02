import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  Divider,
} from '@mui/material';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const image = `../images/${product?.item?.image}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/items/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h5" color="text.secondary">
          Product not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        padding: 4,
        backgroundColor: '#F5F5F5',
        minHeight: '100vh',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          
          gap: 4,
          padding: 3,
          boxShadow: 5,
          borderRadius: 4,
          backgroundColor: 'whitesmoke',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 10,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: '100%', md: 300 },
            height: { xs: 'auto', md: 300 },
            borderRadius: 2,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          image={image}
          alt={product.item.name}
        />
        <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#002B5B', width: '2px' }} />

        <CardContent sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#002B5B',
              textTransform: 'uppercase',
              letterSpacing: 1.2,
            }}
          >
            {product.item.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {product.item.description}
          </Typography>
          <Divider sx={{ marginY: 2, backgroundColor: '#FFC107' }} />
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              fontWeight: 'bold',
              color: '#4CAF50',
            }}
          >
            ₹{product.item.price}
          </Typography>
          <Box sx={{ marginTop: 4, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                paddingX: 3,
                fontSize: '1rem',
                background: '#002B5B',
                color: '#FFFFFF',
                boxShadow: 3,
                '&:hover': {
                  background: '#D4A017',
                },
              }}
            >
              Buy Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                paddingX: 3,
                fontSize: '1rem',
                color: '#002B5B',
                borderColor: '#002B5B',
                '&:hover': {
                  backgroundColor: '#002B5B',
                  color: '#FFFFFF',
                  borderColor: '#002B5B',
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetail;
