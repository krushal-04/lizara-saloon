<<<<<<< HEAD
import {React,useEffect,useState} from 'react';
import axios from 'axios'
import {Grid,Box} from '@mui/material'; 
import ProductCard from './ProductItem';

function Product() {

    const [products, setProducts] = useState({});
      useEffect(() => {
          axios.get("http://localhost:5050/item")
              .then((response) => {
                  console.log(response.data);
                  setProducts(response.data);
              })
              .catch((error) => {
                  console.error("Error fetching users:", error);
              });
      }, []);

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}>
                <Grid container spacing={3}>
                    {products?.item?.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product?._id}>
                            <ProductCard
                                product={product}
                                
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
=======
import React from 'react';
// import axios from 'axios'
import { Grid, Box , TextField} from '@mui/material';
import ProductCard from './ProductItem';
import SearchIcon from "@mui/icons-material/Search";

const products = [
  {
    id: 1,
    name: 'Lizard',
    image: '/images/p2.jfif',
    description: 'Lizards are a widespread group of squamate reptiles.',
    price: '₹20',
    rating: 4,
  },
  {
    id: 2,
    name: 'Snake',
    image: '/images/p3.jfif',
    description: 'Lizards are a widespread group of squamate reptiles.',
    price: '₹35',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Turtle',
    image: '/images/p4.jfif',
    description: 'Turtles are reptiles of the order Testudines.',
    price: '₹50',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lizard',
    image: '/images/p5.jfif',
    description: 'Lizards are a widespread group of squamate reptiles.',
    price: '₹20',
    rating: 4,
  },
  {
    id: 5,
    name: 'Snake',
    image: '/images/p2.jfif',
    description: 'Snakes are elongated, legless, carnivorous reptiles.',
    price: '₹35',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Turtle',
    image: '/images/p3.jfif',
    description: 'Turtles are reptiles of the order Testudines.',
    price: '₹50',
    rating: 5,
  },
  {
    id: 7,
    name: 'Lizard',
    image: '/images/p4.jfif',
    description: 'Lizards are a widespread group of squamate reptiles.',
    price: '₹20',
    rating: 4,
  },
  {
    id: 8,
    name: 'Snake',
    image: '/images/p5.jfif',
    description: 'Snakes are elongated, legless, carnivorous reptiles.',
    price: '₹35',
    rating: 4.5,
  },
  {
    id: 9,
    name: 'Turtle',
    image: '/images/p2.jfif',
    description: 'Turtles are reptiles of the order Testudines.',
    price: '₹50',
    rating: 5,
  },
  {
    id: 10,
    name: 'Lizard',
    image: '/images/p3.jfif',
    description: 'Lizards are a widespread group of squamate reptiles.',
    price: '₹20',
    rating: 4,
  },
  {
    id: 11,
    name: 'Snake',
    image: '/images/p4.jfif',
    description: 'Snakes are elongated, legless, carnivorous reptiles.',
    price: '₹35',
    rating: 4.5,
  },
  {
    id: 12,
    name: 'Turtle',
    image: '/images/p5.jfif',
    description: 'Turtles are reptiles of the order Testudines.',
    price: '₹50',
    rating: 5,
  },
];
<ProductCard />

function Product() {

  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //     // axios.get('https://localhost:5050/items').then(res=>setProducts(res.data))
  // },)

  return (
    <>  
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} padding={2}>
    <TextField
      variant="standard"
      placeholder="Search "
      size="small"
      InputProps={{ startAdornment: <SearchIcon /> }}
    />
    </Box>
    <Box>
    
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}>
          
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard
                  product={product}

                />
              </Grid>
            ))}
          </Grid>
>>>>>>> faf845b2df1c1714641336a5e9505c691b97e013
        </Box>
      </Box>
      </>


      );
}

      export default Product;