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
        </Box>
           
           
    );
}

export default Product;