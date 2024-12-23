import React from 'react';
import { Link } from "react-router-dom";
import {Card,CardContent,CardMedia,Typography,Button,CardActionArea,CardActions,Rating} from '@mui/material';


export default function ProductCard({ product }) {
    console.log(product)
    const image = `./images/${product.image}`
    return (
        
        <Card sx={{
            justifyContent:"space-between",
           boxShadow:3,
            borderRadius: "10px",
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <CardActionArea>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={product.name}
                    sx={{
                         height: 400,
                        objectFit: '-moz-initial',
                        borderRadius: '10px 10px 0 0',
                 
                    }}
                />
                </Link>
                <CardContent> 
                   <center> <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography></center><br></br>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                       {product.desc}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                    Price:  {product.price}
                    </Typography>
                    {/* <Typography variant="h6" color="text.primary">
                        {product.Category_name}
                    </Typography> */}
                    <Rating value={product?.rating} readOnly precision={0.5} />
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
                    size="medium"
                    variant="contained"
                    sx={{ backgroundColor: 'primary.main',  width:"45%" }}
                >
                    Buy Now
                </Button>
                <Button
                    size="medium"
                    variant="contained"
                    sx={{ backgroundColor: 'primary.main',width: "45%" }}
                >
                    Add to Cart
                </Button>
               
            </CardActions>
        </Card>
    );
}